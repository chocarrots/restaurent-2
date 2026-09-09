import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { STORE } from "@/lib/site";

// 섹션 3 — 메뉴: 무엇을 먹나 (대표 4종)만 전달한다.
// 카드 그리드 금지. 가격 우측 정렬 에디토리얼 목록. 메뉴마다 사진 1:1 매칭.
// TODO: 주요 원산지 확인
// TODO: 메뉴별 전체 알레르기 정보 확인
const MENU = [
  {
    name: "구운 피스타치오",
    description: "고소하고 진한 맛",
    image: "/images/menu-pistachio.svg",
    alt: "고소한 구운 피스타치오 젤라또",
  },
  {
    name: "애플 시나몬",
    description: "사과의 산뜻함과 은은한 시나몬 향",
    image: "/images/menu-apple.svg",
    alt: "사과와 시나몬 풍미를 담은 애플 시나몬 젤라또",
    note: "가장 많이 찾는 맛",
  },
  {
    name: "리조(쌀)",
    description: "쌀알 식감이 살아 있는 고소한 우유 젤라또",
    image: "/images/menu-rice.svg",
    alt: "쌀알 식감이 보이는 리조 젤라또",
  },
  {
    name: "제철과일 소르베",
    description: "제철 과일로 만들어 신선하고 상큼한 맛",
    image: "/images/menu-sorbet.svg",
    alt: "제철 과일로 만든 상큼한 소르베",
  },
] as const;

export default function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="py-44">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          id="menu-title"
          title="메뉴"
          description="오늘 고를 수 있는 대표 맛"
        />
        <div className="mt-10 md:mt-16">
          <p className="text-support text-ink/80">
            컵 / 콘{" "}
            <span className="price font-semibold text-ink">
              {STORE.price}
            </span>
          </p>
          <ul className="mt-6 divide-y divide-state/20 border-y border-state/20">
            {MENU.map((item) => (
              <li
                key={item.name}
                className="grid grid-cols-12 items-center gap-6 py-7"
              >
                <div className="col-span-4 sm:col-span-3 md:col-span-2">
                  {/* 래스터 교체 시 AVIF/WebP · quality 75 · srcset/sizes로 서빙된다. */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={800}
                    quality={75}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 767px) 30vw, 200px"
                    className="aspect-square h-auto w-full rounded-xl object-cover"
                  />
                </div>
                <div className="col-span-8 sm:col-span-9 md:col-span-7">
                  <h3 className="font-serif text-h3 font-semibold text-ink">
                    {item.name}
                  </h3>
                  {"note" in item && item.note ? (
                    <p className="mt-3 text-support font-medium text-state">
                      {item.note}
                    </p>
                  ) : null}
                  <p className="mt-3 text-support text-ink/80">
                    {item.description}
                  </p>
                </div>
                <p className="price col-span-12 text-right text-body font-semibold text-ink sm:col-span-12 md:col-span-3">
                  {STORE.price}
                </p>
              </li>
            ))}
          </ul>
          <p
            role="note"
            className="mt-6 rounded-xl border border-state/30 px-4 py-3 text-support text-ink/90"
          >
            견과류 알레르기가 있으신 경우 주문 시 꼭 알려주세요.
          </p>
          <p className="mt-8">
            <a
              href="#visit"
              data-slot="menu-location"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-7 text-body font-semibold text-white"
            >
              매장 위치 보기
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
