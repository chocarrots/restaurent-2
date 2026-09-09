import Image from "next/image";
import SectionHeading from "./SectionHeading";

// 섹션 4 — 공간과 사람: 누가 오나 (아이·부모·여행객이 편하게 들르는 사랑방)만 전달한다.
// 후기는 1건을 짧은 인용으로 한 번만 사용한다. 별점·추가 후기 창작 금지.
export default function SpaceSection() {
  return (
    <section id="space" aria-labelledby="space-title" className="py-28">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          id="space-title"
          title="공간"
          description="아이들의 하교 시간부터 부모와 여행객까지"
        />
        <div className="mt-10 grid grid-cols-12 items-center gap-6 md:mt-16">
          <figure className="col-span-12 overflow-hidden rounded-2xl md:col-span-7">
            {/* 래스터 교체 시 AVIF/WebP · quality 75 · srcset/sizes로 서빙된다. */}
            <Image
              src="/images/space-interior.svg"
              alt="화이트와 우드로 꾸민 애플 젤라또 매장 내부"
              width={1600}
              height={1200}
              quality={75}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 767px) 100vw, 58vw"
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <figcaption className="mt-3 text-caption text-ink/75">
              테이블 5개, 총 10석의 작은 매장
            </figcaption>
          </figure>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <h3 className="font-serif text-h3 font-semibold text-ink">
              편하게 들르는 동네 사랑방
            </h3>
            <p className="mt-3 text-body text-ink/90">
              학교가 끝난 오후에는 아이들이 들르고, 부모님과 함께 천천히
              젤라또를 즐기기도 합니다. 마장동을 둘러본 여행객이 쉬어가는 작은
              디저트 가게이기도 합니다.
            </p>
            <figure className="mt-6 border-l-2 border-state/50 pl-4">
              <blockquote className="text-support text-ink/90">
                “사장님이 너무 친절하고 쫀득한 젤라또가 너무 맛있어요!”
              </blockquote>
              <figcaption className="mt-3 text-caption text-ink/75">
                네이버 지도 리뷰 · 2026년 7월
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
