import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";

const SERVICES = [
  {
    no: "01",
    to: "/services/celebrity-seeding",
    title: "Celebrity Seeding",
    ko: "셀럽 협찬",
    desc: "배우·아이돌·방송인 착장 노출을 통한 브랜드 인지도와 콘텐츠 자산 확보.",
  },
  {
    no: "02",
    to: "/services/stylist-relations",
    title: "Stylist Relations",
    ko: "스타일리스트 릴레이션",
    desc: "압구정 쇼룸 기반의 스타일리스트 네트워크로 상시 픽업 환경 구축.",
  },
  {
    no: "03",
    to: "/services/ppl-content-placement",
    title: "PPL & Content Placement",
    ko: "PPL·콘텐츠 플레이스먼트",
    desc: "드라마·예능·뮤직비디오·웹콘텐츠 내 자연스러운 제품 노출 설계.",
  },
  {
    no: "04",
    to: "/services/influencer-pr",
    title: "Influencer PR",
    ko: "인플루언서 PR",
    desc: "브랜드 무드에 맞는 인플루언서 큐레이션과 캠페인 운영.",
  },
  {
    no: "05",
    to: "/services/editorial-viral-pr",
    title: "Editorial & Viral PR",
    ko: "에디토리얼·바이럴 PR",
    desc: "매거진 화보, 디지털 에디토리얼, 바이럴 콘텐츠 기획·확산.",
  },
  {
    no: "06",
    to: "/services/offline-event-pr",
    title: "Offline Event PR",
    ko: "오프라인 이벤트 PR",
    desc: "팝업, 쇼룸 프레스데이, 런칭 파티 등 오프라인 브랜드 경험 설계.",
  },
  {
    no: "07",
    to: "/services/brand-ambassador",
    title: "Brand Ambassador Campaign",
    ko: "앰버서더 캠페인",
    desc: "장기 셀럽·아티스트 앰버서더 매칭과 캠페인 운영.",
  },
  {
    no: "08",
    to: "/services/global-expansion",
    title: "Global Expansion",
    ko: "글로벌 확장",
    desc: "일본 셀렉트샵, 대만 편집샵, 중국 샤오홍수·왕홍 라이브커머스 연계.",
  },
] as const;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "SERVICES — 패션 PR 서비스 전체보기 | CLAMOA" },
      {
        name: "description",
        content:
          "CLAMOA의 8개 패션 PR 서비스 — 셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서 PR, 에디토리얼·바이럴, 오프라인 이벤트, 앰버서더, 글로벌 확장.",
      },
      { property: "og:title", content: "SERVICES — 패션 PR 서비스 전체보기 | CLAMOA" },
      {
        property: "og:description",
        content:
          "셀럽 협찬부터 글로벌 유통 확장까지, CLAMOA의 통합 패션 PR 서비스 8종.",
      },
      { property: "og:url", content: "https://clamoa.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" />

      <section className="px-5 md:px-12 pt-28 md:pt-40 pb-16 md:pb-24 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">
          — SERVICES INDEX
        </span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.04em] mb-10"
          style={{ fontSize: "clamp(56px, 11vw, 180px)" }}
        >
          WHAT<br />
          <span className="italic font-normal">we do</span>
        </h1>
        <p className="text-body-lg max-w-2xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          CLAMOA는 서울 압구정 기반의 패션 PR 에이전시로, 셀럽 협찬부터 글로벌
          유통 확장까지 8개 영역을 통합적으로 설계합니다.
        </p>
      </section>

      <section className="px-5 md:px-12 py-12 md:py-16">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="group block h-full bg-surface border-2 border-deep-ink p-6 md:p-7 hover:bg-deep-ink hover:text-inverse-on-surface transition-colors"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-label-caps font-mono text-secondary group-hover:text-neon-signal">
                    {s.no}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 group-hover:text-neon-signal transition">
                    arrow_outward
                  </span>
                </div>
                <h2 className="text-headline-sm uppercase leading-tight mb-2">
                  {s.title}
                </h2>
                <p className="text-label-caps text-secondary group-hover:text-neon-signal mb-5">
                  {s.ko}
                </p>
                <p className="text-body-sm leading-relaxed opacity-80">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
