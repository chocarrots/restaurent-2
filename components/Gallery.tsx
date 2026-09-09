"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    src: "/images/space-interior.svg",
    alt: "화이트와 우드로 꾸민 애플 젤라또 매장 내부",
    caption: "화이트와 우드의 작은 매장",
  },
  {
    src: "/images/visit-exterior.svg",
    alt: "서울 성동구에 위치한 작은 젤라또 가게 외관",
    caption: "마장로에서 만나는 외관",
  },
  {
    src: "/images/menu-pistachio.svg",
    alt: "고소한 구운 피스타치오 젤라또",
    caption: "구운 피스타치오",
  },
  {
    src: "/images/menu-apple.svg",
    alt: "사과와 시나몬 풍미를 담은 애플 시나몬 젤라또",
    caption: "애플 시나몬",
  },
  {
    src: "/images/menu-rice.svg",
    alt: "쌀알 식감이 보이는 리조 젤라또",
    caption: "리조(쌀)",
  },
  {
    src: "/images/menu-sorbet.svg",
    alt: "제철 과일로 만든 상큼한 소르베",
    caption: "제철과일 소르베",
  },
] as const;

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);

  const updateIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    if (cards.length === 0) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best + 1);
  }, []);

  useEffect(() => {
    updateIndex();
    const track = trackRef.current;
    if (!track) return;
    const onScroll = (): void => {
      window.requestAnimationFrame(updateIndex);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateIndex]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const width = card ? card.clientWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * width, behavior: "smooth" });
  }, []);

  return (
    <section aria-labelledby="gallery-title" className="py-36">
      <div className="mx-auto max-w-content px-5">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="gallery-title"
            className="font-serif text-h2 font-semibold text-ink"
          >
            가게 들여다보기
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="이전 사진 보기"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-state/40 text-ink"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="다음 사진 보기"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-state/40 text-ink"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-content md:mt-16">
        <div
          ref={trackRef}
          role="region"
          aria-label="매장 사진 목록"
          aria-roledescription="carousel"
          tabIndex={0}
          className="gallery-track flex gap-6 overflow-x-auto px-5 pb-2"
        >
          {ITEMS.map((item) => (
            <figure
              key={item.src}
              data-card
              className="flex w-[80%] shrink-0 flex-col sm:w-[46%] md:w-[31.5%]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1200}
                quality={75}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) 80vw, 33vw"
                className="aspect-[4/3] h-auto w-full rounded-xl object-cover"
              />
              <figcaption className="flex min-h-[44px] items-start pt-2 text-caption text-ink/75">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between px-5">
          <p aria-live="polite" className="label-latin text-caption text-ink/80">
            {index}/{ITEMS.length}
          </p>
          <p className="text-caption text-ink/70">
            옆으로 밀어 더 볼 수 있어요
          </p>
        </div>
      </div>
    </section>
  );
}
