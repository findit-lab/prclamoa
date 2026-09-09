import en from "./en";
import ja from "./ja";
import zh from "./zh";
import vi from "./vi";
import th from "./th";
import type { BlogPost } from "./types";

export type { BlogPost, BlogSection } from "./types";

/** Locales that have a localized service blog. */
export const BLOG_LOCALES = ["en", "ja", "zh", "vi", "th"] as const;
export type BlogLocale = (typeof BLOG_LOCALES)[number];

export const BLOG: Record<BlogLocale, BlogPost[]> = { en, ja, zh, vi, th };

export function getPosts(locale: BlogLocale): BlogPost[] {
  return BLOG[locale];
}

export function getPost(locale: BlogLocale, slug: string): BlogPost | undefined {
  return BLOG[locale].find((p) => p.slug === slug);
}

type UiStrings = {
  eyebrow: string;
  title: string;
  subtitle: string;
  readMore: string;
  backToBlog: string;
  related: string;
  relatedService: string;
  viewService: string;
  takeaway: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  home: string;
};

export const BLOG_UI: Record<BlogLocale, UiStrings> = {
  en: {
    eyebrow: "CLAMOA JOURNAL",
    title: "FASHION PR INSIGHTS",
    subtitle:
      "How celebrity seeding, stylist relations, PPL and global expansion actually work for fashion brands in Korea.",
    readMore: "READ ARTICLE",
    backToBlog: "BACK TO JOURNAL",
    related: "RELATED ARTICLES",
    relatedService: "RELATED SERVICE",
    viewService: "VIEW SERVICE",
    takeaway: "KEY TAKEAWAY",
    ctaTitle: "PLANNING A KOREAN PR CAMPAIGN?",
    ctaBody: "Tell us about your brand and we will come back with a realistic plan and budget range.",
    ctaButton: "CONTACT CLAMOA",
    home: "HOME",
  },
  ja: {
    eyebrow: "CLAMOA JOURNAL",
    title: "ファッションPRインサイト",
    subtitle:
      "韓国におけるセレブシーディング、スタイリスト・リレーション、PPL、グローバル展開の実務を解説します。",
    readMore: "記事を読む",
    backToBlog: "ジャーナルへ戻る",
    related: "関連記事",
    relatedService: "関連サービス",
    viewService: "サービスを見る",
    takeaway: "要点",
    ctaTitle: "韓国でのPRをご検討中ですか？",
    ctaBody: "ブランド情報をお送りいただければ、現実的なプランと概算予算をご提案します。",
    ctaButton: "お問い合わせ",
    home: "ホーム",
  },
  zh: {
    eyebrow: "CLAMOA JOURNAL",
    title: "时尚公关洞察",
    subtitle:
      "明星借势、造型师资源、影视综植入与海外拓展，在韩国时尚品牌的实际操作中是如何运转的。",
    readMore: "阅读全文",
    backToBlog: "返回 JOURNAL",
    related: "相关文章",
    relatedService: "相关服务",
    viewService: "查看服务",
    takeaway: "核心要点",
    ctaTitle: "正在筹备韩国市场的公关方案？",
    ctaBody: "请告诉我们品牌情况，我们会提供切实可行的方案与预算区间。",
    ctaButton: "联系 CLAMOA",
    home: "首页",
  },
  vi: {
    eyebrow: "CLAMOA JOURNAL",
    title: "GÓC NHÌN PR THỜI TRANG",
    subtitle:
      "Cách celebrity seeding, quan hệ stylist, PPL và mở rộng toàn cầu vận hành thực tế cho thương hiệu thời trang tại Hàn Quốc.",
    readMore: "ĐỌC BÀI VIẾT",
    backToBlog: "QUAY LẠI JOURNAL",
    related: "BÀI VIẾT LIÊN QUAN",
    relatedService: "DỊCH VỤ LIÊN QUAN",
    viewService: "XEM DỊCH VỤ",
    takeaway: "ĐIỂM CHÍNH",
    ctaTitle: "BẠN ĐANG LÊN KẾ HOẠCH PR TẠI HÀN QUỐC?",
    ctaBody: "Hãy cho chúng tôi biết về thương hiệu của bạn, chúng tôi sẽ đề xuất kế hoạch và khoảng ngân sách thực tế.",
    ctaButton: "LIÊN HỆ CLAMOA",
    home: "TRANG CHỦ",
  },
  th: {
    eyebrow: "CLAMOA JOURNAL",
    title: "มุมมองด้าน PR แฟชั่น",
    subtitle:
      "celebrity seeding ความสัมพันธ์กับสไตลิสต์ PPL และการขยายสู่ต่างประเทศทำงานจริงอย่างไรสำหรับแบรนด์แฟชั่นในเกาหลี",
    readMore: "อ่านบทความ",
    backToBlog: "กลับไปที่ JOURNAL",
    related: "บทความที่เกี่ยวข้อง",
    relatedService: "บริการที่เกี่ยวข้อง",
    viewService: "ดูบริการ",
    takeaway: "ประเด็นสำคัญ",
    ctaTitle: "กำลังวางแผนแคมเปญ PR ในเกาหลีอยู่ใช่ไหม",
    ctaBody: "บอกเราเกี่ยวกับแบรนด์ของคุณ แล้วเราจะเสนอแผนงานและช่วงงบประมาณที่เป็นไปได้จริง",
    ctaButton: "ติดต่อ CLAMOA",
    home: "หน้าแรก",
  },
};
