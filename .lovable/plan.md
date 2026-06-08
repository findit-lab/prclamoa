# 메인 페이지에 무한 슬라이딩 이미지 마퀴(Marquee) 추가

CLAMOA 착장 이미지 10장이 왼쪽 방향으로 끊김 없이 계속 흐르는 섹션을 메인 페이지에 구현합니다.

## 구현 위치
`src/routes/index.tsx` — Hero 섹션 바로 아래(또는 Featured Work 위)에 풀-블리드(full-bleed) 마퀴 섹션 신규 추가.

## 동작 방식
- 10장의 이미지를 하나의 트랙(`flex` row)에 배치하고, 끊김 없는 루프를 위해 **동일한 10장을 한 번 더 복제**해 총 20장을 렌더링.
- CSS `@keyframes marquee` 로 `transform: translateX(0 → -50%)` 무한 반복 → 정확히 원본 1세트 길이만큼 이동하므로 이음새가 보이지 않음.
- 속도: 약 60초/루프 (이미지가 천천히 우아하게 흐르는 에디토리얼 톤).
- `hover` 시 `animation-play-state: paused` — 사용자가 이미지 응시 가능.
- `prefers-reduced-motion` 사용자에게는 애니메이션 정지(접근성).

## 디자인 톤 (기존 브랜드와 일관)
- 배경: `bg-deep-ink`(검정) 풀-블리드 밴드, 위·아래 1px 보더로 브루탈리스트 구획감.
- 섹션 상단 좌/우 라벨: `LATEST LOOKS — SS25` / `[ AUTO-SCROLL ]` (label-caps 스타일).
- 이미지 카드: 세로형 3:4 비율, 높이 약 `clamp(320px, 38vw, 520px)`, 카드 간격 24px.
- 이미지 필터: 기본 `grayscale(100%)`, hover 시 컬러로 전환 (기존 케이스스터디와 동일 무드).
- 좌/우 끝에 `bg-deep-ink → transparent` 그라데이션 페이드 마스크로 자연스러운 fade-in/out.

## 이미지
사용자가 별도 이미지를 첨부하지 않았으므로, 우선 Unsplash 패션 이미지 10장을 hotlink 하여 자리잡습니다(기존 섹션과 동일 방식). 추후 실제 클라모아 착장 사진으로 손쉽게 교체 가능하도록 **이미지 URL 배열(`marqueeImages`)을 컴포넌트 상단 상수로 분리**.

## 기술 디테일
- 신규 CSS는 `src/styles.css` 의 `@layer utilities` 뒤에 추가:
  ```css
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-track { animation: marquee 60s linear infinite; will-change: transform; }
  .marquee-track:hover { animation-play-state: paused; }
  @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
  ```
- `index.tsx` 에 `<section>` 추가 — 외곽 `overflow-hidden`, 내부 `flex w-max marquee-track`, 이미지 배열을 `[...imgs, ...imgs].map(...)`.

## 확인 사항
1. 이 위치(Hero 바로 아래)에 추가하면 될까요, 아니면 다른 섹션 사이를 원하시나요?
2. 지금은 Unsplash 임시 이미지 10장으로 진행해도 될까요? (이후 실제 이미지 URL을 주시면 교체)
