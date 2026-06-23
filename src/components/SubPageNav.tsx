import { useRouter } from "@tanstack/react-router";

type Variant = "light" | "dark";

interface Props {
  variant?: Variant;
  rightSlot?: React.ReactNode;
}

export function SubPageNav({ variant = "light", rightSlot }: Props) {
  const router = useRouter();

  const isDark = variant === "dark";
  const wrapBg = isDark
    ? "bg-deep-ink/90 border-white/15"
    : "bg-surface/90 border-deep-ink/15";
  const textColor = isDark ? "text-inverse-on-surface" : "text-deep-ink";
  const mutedColor = isDark ? "text-white/50" : "text-secondary";

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur border-b ${wrapBg} ${textColor}`}
    >
      <div className="flex items-center justify-between gap-3 md:gap-4 px-3 md:px-8 py-3">
        <button
          type="button"
          onClick={goBack}
          className="flex items-center gap-1.5 md:gap-2 group shrink-0"
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-[18px] md:text-[20px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span className="text-label-caps">BACK</span>
        </button>

        <div
          className={`shrink-0 text-label-caps ${mutedColor} hidden md:block min-w-[60px] text-right`}
        >
          {rightSlot}
        </div>
      </div>
    </header>
  );
}
