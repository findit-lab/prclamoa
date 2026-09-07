import {
  LOCALE_REGISTRY,
  homeAlternateLinks,
  localeHomeUrl,
  ogLocaleAlternates,
  type Locale,
} from "./config";

interface HomeMeta {
  title: string;
  description: string;
}

/** Locale-adapted home metadata — written for each market, not translated word for word. */
const HOME_META: Record<Locale, HomeMeta> = {
  ko: {
    title: "CLAMOA — 패션 PR 에이전시 | 셀럽 협찬·PPL·인플루언서",
    description:
      "셀럽 협찬부터 PPL, 인플루언서, 바이럴, 언론 홍보까지 — 패션 브랜드의 노출과 확산을 설계하는 종합 패션 PR 에이전시 CLAMOA.",
  },
  en: {
    title: "CLAMOA — Korean Fashion PR Agency | Celebrity Seeding & Influencer PR",
    description:
      "Seoul-based fashion PR agency running celebrity seeding, stylist relations, PPL, influencer campaigns and global retail expansion for fashion brands.",
  },
  ja: {
    title: "CLAMOA — 韓国ファッションPRエージェンシー｜セレブ協賛・インフルエンサーPR",
    description:
      "ソウル・狎鴎亭拠点のファッションPRエージェンシー。セレブ協賛、スタイリストリレーション、PPL、インフルエンサー施策、日本市場への展開までサポートします。",
  },
  vi: {
    title: "CLAMOA — Agency PR thời trang Hàn Quốc | Tài trợ người nổi tiếng & Influencer",
    description:
      "Agency PR thời trang tại Seoul: tài trợ người nổi tiếng, quan hệ stylist, PPL, chiến dịch influencer và mở rộng phân phối quốc tế cho thương hiệu thời trang.",
  },
  th: {
    title: "CLAMOA — เอเจนซี PR แฟชั่นเกาหลี | ซีดดิ้งเซเลบและอินฟลูเอนเซอร์",
    description:
      "เอเจนซี PR แฟชั่นในกรุงโซล ดูแลซีดดิ้งเซเลบ ความสัมพันธ์กับสไตลิสต์ PPL แคมเปญอินฟลูเอนเซอร์ และการขยายตลาดต่างประเทศให้แบรนด์แฟชั่น",
  },
};

/** head() payload for a locale variant of the home page. */
export function homeHead(locale: Locale) {
  const { title, description } = HOME_META[locale];
  const url = localeHomeUrl(locale);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: LOCALE_REGISTRY[locale].ogLocale },
      ...ogLocaleAlternates(locale),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }, ...homeAlternateLinks()],
  };
}
