import type { Locale } from "@/i18n/config";
import { makeT } from "@/i18n";
import { trackLandingEvent } from "@/lib/utm-tracking";

export function ContactForm({
  locale = "ko",
  className = "col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-2 gap-6",
}: {
  locale?: Locale;
  className?: string;
}) {
  const t = makeT(locale);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        const fd = new FormData(form);
        const payload = Object.fromEntries(
          [
            "name",
            "brand",
            "email",
            "phone",
            "category",
            "timing",
            "service",
            "budget",
            "website",
            "instagram",
            "message",
          ].map((k) => [k, String(fd.get(k) ?? "").trim()]),
        );
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "SENDING...";
        }
        try {
          const res = await fetch("/api/public/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const data = await res.json().catch(() => ({}) as Record<string, unknown>);
          if (res.ok && data.ok) {
            trackLandingEvent("Lead", { content_name: "clamoa_contact_form" });
            if (submitBtn) submitBtn.textContent = t("SENT ✓ — 24시간 내 회신드리겠습니다");
            form.reset();
          } else {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = "SEND INQUIRY";
            }
            const msg =
              data.error === "invalid_email"
                ? t("이메일 주소를 올바르게 입력해 주세요.")
                : data.error === "missing_fields"
                  ? t("이름 또는 브랜드명을 입력해 주세요.")
                  : t("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
            alert(msg);
          }
        } catch {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "SEND INQUIRY";
          }
          alert(t("네트워크 오류로 전송에 실패했습니다."));
        }
      }}
      className={className}
    >
      {(
        [
          ["Name", "name", "text", "col-span-2 md:col-span-1", true],
          [t("Brand Name / 브랜드명"), "brand", "text", "col-span-2 md:col-span-1", false],
          ["Email", "email", "email", "col-span-2 md:col-span-1", true],
          ["Phone", "phone", "tel", "col-span-2 md:col-span-1", false],
        ] as const
      ).map(([label, name, type, span, required]) => (
        <label key={name} className={`flex flex-col gap-2 ${span}`}>
          <span className="text-label-caps text-secondary">
            {label}
            {required ? " *" : ""}
          </span>
          <input
            name={name}
            type={type}
            required={required}
            className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
          />
        </label>
      ))}
      <label className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <span className="text-label-caps text-secondary">
          {t("Product Category / 제품 카테고리")}
        </span>
        <select
          name="category"
          defaultValue=""
          className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
        >
          <option value="" disabled>
            {t("- 선택 -")}
          </option>
          <option>{t("여성복 / Womenswear")}</option>
          <option>{t("남성복 / Menswear")}</option>
          <option>{t("유니섹스 / Unisex")}</option>
          <option>{t("주얼리 / Jewelry")}</option>
          <option>{t("가방·슈즈 / Bag & Shoes")}</option>
          <option>{t("뷰티 / Beauty")}</option>
          <option>{t("라이프스타일 / Lifestyle")}</option>
          <option>{t("기타 / Other")}</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <span className="text-label-caps text-secondary">{t("Campaign Timing / 진행 시기")}</span>
        <select
          name="timing"
          defaultValue=""
          className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
        >
          <option value="" disabled>
            {t("- 선택 -")}
          </option>
          <option>{t("즉시 진행 / ASAP")}</option>
          <option>{t("1개월 이내")}</option>
          <option>{t("1~3개월 이내")}</option>
          <option>{t("3~6개월 이내")}</option>
          <option>{t("6개월 이후")}</option>
          <option>{t("미정 / 상담 후 결정")}</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <span className="text-label-caps text-secondary">
          {t("Service Interest / 희망 서비스")}
        </span>
        <select
          name="service"
          className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
        >
          <option>{t("Celebrity Seeding (셀럽 협찬)")}</option>
          <option>Stylist Relations</option>
          <option>PPL & Content Placement</option>
          <option>Influencer PR</option>
          <option>Editorial & Viral PR</option>
          <option>Offline Event PR</option>
          <option>Brand Ambassador</option>
          <option>Global Expansion</option>
          <option>Full Brand PR</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <span className="text-label-caps text-secondary">{t("Budget Range / 예산 범위")}</span>
        <select
          name="budget"
          className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
        >
          <option>{t("- 선택 -")}</option>
          <option>{t("~ 500만원")}</option>
          <option>{t("500만원 ~ 1,500만원")}</option>
          <option>{t("1,500만원 ~ 3,000만원")}</option>
          <option>{t("3,000만원 ~ 5,000만원")}</option>
          <option>{t("5,000만원 이상")}</option>
          <option>{t("상담 후 결정")}</option>
        </select>
      </label>
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-label-caps text-secondary">
            {t("Brand Website / 브랜드 홈페이지")}
          </span>
          <input
            name="website"
            type="text"
            inputMode="url"
            placeholder="www.yourbrand.com"
            className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-label-caps text-secondary">{t("Instagram / 인스타그램")}</span>
          <input
            name="instagram"
            type="text"
            placeholder={t("@yourbrand 또는 instagram.com/yourbrand")}
            className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 col-span-2">
        <span className="text-label-caps text-secondary">{t("Message / 추가 메시지")}</span>
        <textarea
          name="message"
          rows={4}
          className="bg-transparent border border-deep-ink p-4 text-body-md focus:outline-none focus:border-neon-signal resize-none"
        />
      </label>
      <button
        type="submit"
        className="col-span-2 bg-deep-ink text-neon-signal py-6 text-label-caps hover:bg-neon-signal hover:text-deep-ink border border-deep-ink transition-all duration-300 active:scale-95"
      >
        SEND INQUIRY
      </button>
    </form>
  );
}
