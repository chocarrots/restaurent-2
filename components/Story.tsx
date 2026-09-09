import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { STORE } from "@/lib/site";

// 섹션 2 — 이야기: 왜 다른가 (창업 이유 + 이름의 의미 + 2025 개업)만 전달한다.
export default function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="py-36">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          id="story-title"
          title="이야기"
          description="젤라또를 좋아해 시작한 작은 가게"
        />
        <div className="mt-10 grid grid-cols-12 gap-6 md:mt-16">
          <div className="col-span-12 md:col-span-5">
            <h3 className="font-serif text-h3 font-semibold text-ink">
              좋아하는 마음에서 시작한 동네 가게
            </h3>
            <p className="mt-3 text-body text-ink/90">
              젤라또를 좋아해서 동네에 작은 가게를 열었습니다. ‘애플’이라는
              이름은 사과를 좋아하는 마음에서 시작됐습니다.
            </p>
            <p className="mt-3 text-support text-ink/80">
              2025년에 문을 연 뒤, 하교 길 아이들과 부모님, 마장동을 둘러보던
              여행객이 자연스럽게 스며드는 자리를 지키고 있습니다.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-6 border-t border-state/25 pt-6">
              <div>
                <dt className="label-latin text-caption font-semibold uppercase text-state">
                  Opened
                </dt>
                <dd className="mt-3 text-support font-medium text-ink">
                  {STORE.opened}년 개업
                </dd>
              </div>
              <div>
                <dt className="label-latin text-caption font-semibold uppercase text-state">
                  Place
                </dt>
                <dd className="mt-3 text-support font-medium text-ink">
                  마장로 작은 가게
                </dd>
              </div>
            </dl>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <figure className="overflow-hidden rounded-2xl">
              {/* 래스터 교체 시 AVIF/WebP · quality 75 · srcset/sizes로 서빙된다. */}
              <Image
                src="/images/space-hands.svg"
                alt="젤라또를 정성스럽게 담는 모습"
                width={1600}
                height={1200}
                quality={75}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) 100vw, 50vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-caption text-ink/75">
                매장에서 젤라또를 담는 모습
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
