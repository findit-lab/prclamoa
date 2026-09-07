import { koServiceAlternates } from "@/i18n/serviceHead";
import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/celebrity-seeding")({
  head: () => ({
    meta: [
      { title: "쇼룸 셀럽 PR(Showroom Celebrity PR) — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "쇼룸 PR은 브랜드 제품을 쇼룸에 진열하고 스타일리스트 네트워크를 통해 배우·아이돌 등 셀럽 착용 노출로 연결하는 패션 PR입니다. CLAMOA의 셀럽 가이드라인 설정부터 클리핑 리포트까지 전 과정을 안내합니다.",
      },
      { property: "og:title", content: "쇼룸 셀럽 PR(Showroom Celebrity PR) — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "쇼룸 디스플레이·스타일리스트 피칭·셀럽 착용 모니터링과 클리핑 데이터 관리까지 통합 운영하는 쇼룸 셀럽 PR.",
      },
      { property: "og:url", content: "https://clamoa.com/services/celebrity-seeding" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/celebrity-seeding" }, ...koServiceAlternates("celebrity-seeding")],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="01 — CELEBRITY SEEDING / 셀럽 협찬"
      title={"SHOWROOM\nCELEBRITY PR"}
      definition="쇼룸 PR은 브랜드 제품을 쇼룸에 진열하고, 스타일리스트 네트워크를 통해 배우·아이돌 등 셀럽의 착용 및 노출로 연결하는 패션 PR 방식입니다. CLAMOA는 브랜드 무드와 타깃에 맞춰 쇼룸 디스플레이부터 스타일리스트를 통해 제품 협찬 및 회수, 셀럽 착용 모니터링과 클리핑 데이터 관리까지 전 과정을 통합 운영합니다."
      fitFor={[
        "신규 런칭 후 빠른 인지도 확보가 필요한 브랜드",
        "셀럽 착용을 통해 브랜드 이미지와 화제성을 높이고 싶은 브랜드",
        "SNS 및 온라인 채널에서 바이럴로 활용할 셀럽 콘텐츠 확보가 필요한 브랜드",
        "글로벌 진출을 앞두고 K-셀럽 레퍼런스가 필요한 브랜드",
      ]}
      steps={[
        {
          title: "셀럽 가이드라인 설정",
          desc: "브랜드의 무드와 타깃, 포지셔닝을 분석하여 브랜드 이미지와 적합도가 높은 셀럽의 가이드라인을 설정합니다.",
        },
        {
          title: "제품 등록 & 쇼룸 디스플레이",
          desc: "자체 개발 SaaS 프로그램 RINK를 통한 통합 관리를 위해 제품별 RFID 정보를 등록한 후 쇼룸에 디스플레이합니다.",
        },
        {
          title: "스타일리스트 피칭",
          desc: "브랜드 타깃에 맞는 스타일리스트를 대상으로 온·오프라인 피칭을 진행하여 적극적인 협찬과 셀럽 착용을 유도합니다.",
        },
        {
          title: "클리핑 & 리포트",
          desc: "착장 캡처, 미디어 노출, RINK 기반 자료 정리와 리포트를 제공합니다.",
        },
      ]}
      deliverables={[
        "셀럽 착용 및 노출 클리핑 아카이브",
        "셀럽별·제품별 착용 이력 데이터",
        "스타일리스트 픽업 및 제품 선호도 데이터",
        "제품별 픽업률 및 착용률 데이터",
        "주간 협찬 및 셀럽 노출 성과 리포트",
      ]}
      faqs={[
        {
          q: "셀럽 협찬은 어떤 브랜드에 효과적인가요?",
          a: "런칭 직후 인지도가 필요한 브랜드, 셀럽 착용을 통해 화제성을 높이고 싶은 브랜드 그리고 글로벌 진출을 앞두고 K-셀럽 레퍼런스가 필요한 브랜드에 특히 효과적입니다.",
        },
        {
          q: "협찬 비용은 어떻게 책정되나요?",
          a: "쇼룸 입점에 따른 월 대행비로 운영되며, 셀럽 착용 건수에 따른 별도의 추가 비용은 발생하지 않습니다.",
        },
        {
          q: "셀럽 착용은 보장되나요?",
          a: "쇼룸 협찬은 스타일리스트의 픽업과 실제 착용 여부에 따라 진행되기 때문에 특정 셀럽의 착용을 보장하기는 어렵습니다.",
        },
        {
          q: "협찬 후 노출 자료는 2차 활용이 가능한가요?",
          a: "셀럽의 초상권 및 성명권과 관련된 사항은 소속사와의 별도 협의가 필요하기 때문에, 협찬을 통해 확보된 노출 자료를 광고나 2차 활용하고자 할 경우 반드시 사전에 담당자에게 말씀해 주셔야 합니다.",
        },
        {
          q: "최소 계약 기간은 어느 정도인가요?",
          a: "셀럽 쇼룸 PR의 최소 계약 기간은 6개월입니다. 브랜드 및 제품에 대한 스타일리스트 인지도를 형성하고 지속적인 피칭을 통해 실제 착용으로 연결하기 위해 일정 기간의 운영이 필요합니다.",
        },
      ]}
    />
  ),
});
