CREATE OR REPLACE FUNCTION public.weekly_event_report(_days INT DEFAULT 7)
RETURNS JSONB
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  WITH win AS (
    SELECT * FROM public.site_events
    WHERE created_at >= now() - make_interval(days => _days)
  )
  SELECT jsonb_build_object(
    'days', _days,
    'total_events', (SELECT count(*) FROM win),
    'sessions', (SELECT count(DISTINCT session_id) FROM win WHERE session_id <> ''),
    'by_locale', COALESCE((
      SELECT jsonb_agg(x ORDER BY (x->>'views')::int DESC) FROM (
        SELECT jsonb_build_object(
          'locale', locale,
          'views', count(*) FILTER (WHERE event_type = 'page_view'),
          'sessions', count(DISTINCT session_id) FILTER (WHERE session_id <> ''),
          'clicks', count(*) FILTER (WHERE event_type <> 'page_view')
        ) AS x
        FROM win GROUP BY locale
      ) t
    ), '[]'::jsonb),
    'language_switch', COALESCE((
      SELECT jsonb_agg(x ORDER BY (x->>'clicks')::int DESC) FROM (
        SELECT jsonb_build_object('target', label, 'clicks', count(*)) AS x
        FROM win WHERE event_type = 'language_select' GROUP BY label
      ) t
    ), '[]'::jsonb),
    'service_clicks', COALESCE((
      SELECT jsonb_agg(x ORDER BY (x->>'clicks')::int DESC) FROM (
        SELECT jsonb_build_object('item', label, 'locale', locale, 'clicks', count(*)) AS x
        FROM win WHERE event_type = 'service_click' GROUP BY label, locale
      ) t
    ), '[]'::jsonb),
    'journal_clicks', COALESCE((
      SELECT jsonb_agg(x ORDER BY (x->>'clicks')::int DESC) FROM (
        SELECT jsonb_build_object('item', label, 'locale', locale, 'clicks', count(*)) AS x
        FROM win WHERE event_type = 'journal_click' GROUP BY label, locale
      ) t
    ), '[]'::jsonb),
    'top_pages', COALESCE((
      SELECT jsonb_agg(x ORDER BY (x->>'views')::int DESC) FROM (
        SELECT jsonb_build_object('path', path, 'views', count(*)) AS x
        FROM win WHERE event_type = 'page_view' GROUP BY path
        ORDER BY count(*) DESC LIMIT 20
      ) t
    ), '[]'::jsonb)
  );
$$;

REVOKE ALL ON FUNCTION public.weekly_event_report(INT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.weekly_event_report(INT) TO service_role;