CREATE TABLE public.site_events (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  locale TEXT NOT NULL DEFAULT 'ko',
  event_type TEXT NOT NULL,
  path TEXT NOT NULL DEFAULT '',
  label TEXT NOT NULL DEFAULT '',
  session_id TEXT NOT NULL DEFAULT '',
  referrer TEXT NOT NULL DEFAULT ''
);

CREATE INDEX site_events_created_at_idx ON public.site_events (created_at DESC);
CREATE INDEX site_events_locale_idx ON public.site_events (locale);

GRANT ALL ON public.site_events TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.site_events_id_seq TO service_role;

ALTER TABLE public.site_events ENABLE ROW LEVEL SECURITY;