"use client";

import { useEffect, useState } from "react";
import { STORE } from "@/lib/site";

// 모바일 하단 고정 바: 스크롤 0부터 띄우지 않고,
// 히어로의 위치 CTA가 뷰포트를 벗어날 때 IntersectionObserver로 등장시킨다.
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const bar = document.getElementById("mobile-action-bar");
    if (!heroCta || !bar) return;

    const syncHeight = (show: boolean): void => {
      document.documentElement.style.setProperty(
        "--mobile-action-bar-height",
        show ? `${bar.offsetHeight}px` : "0px",
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const heroVisible = entries[0]?.isIntersecting ?? true;
        const show = !heroVisible;
        setVisible(show);
        syncHeight(show);
      },
      { threshold: 0 },
    );

    observer.observe(heroCta);
    const onResize = (): void => {
      if (bar.classList.contains("is-visible")) syncHeight(true);
    };
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.documentElement.style.setProperty(
        "--mobile-action-bar-height",
        "0px",
      );
    };
  }, []);

  return (
    <div
      id="mobile-action-bar"
      aria-hidden={visible ? "false" : "true"}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        visible ? "is-visible translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-ink/10 bg-background/97 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="#visit"
            data-slot="mobile-location"
            tabIndex={visible ? 0 : -1}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-4 text-support font-semibold text-white"
          >
            매장 위치 보기
          </a>
          <a
            href={STORE.phoneHref}
            tabIndex={visible ? 0 : -1}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-state/40 px-4 text-support font-semibold text-ink"
          >
            전화하기
          </a>
        </div>
      </div>
    </div>
  );
}
