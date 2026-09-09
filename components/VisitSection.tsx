import Image from "next/image";
import SectionHeading from "./SectionHeading";
import CopyAddressButton from "./CopyAddressButton";
import { MAP_LINKS, STORE } from "@/lib/site";

// 섹션 6 — 방문: 언제, 어디로 오면 되는지 한눈에 확인.
// 지도는 iframe·API key 없이 외관 사진 + 공식 지도 검색 링크로 처리한다.
// 가짜 지도 그래픽 금지.
export default function VisitSection() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-44">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          id="visit-title"
          title="방문"
          description="언제, 어디로 오면 되는지 한눈에 확인"
        />
        <div className="mt-10 grid grid-cols-12 gap-6 md:mt-16">
          <div className="col-span-12 md:col-span-5">
            <dl className="divide-y divide-state/20 border-y border-state/20">
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">주소</dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.address}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">전화</dt>
                <dd className="col-span-2 text-support">
                  <a href={STORE.phoneHref} className="a11y-link text-ink">
                    {STORE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">영업시간</dt>
                <dd className="hours col-span-2 text-support text-ink/90">
                  {STORE.hours}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">휴무</dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.closed}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">
                  피크타임
                </dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.peak}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">좌석</dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.seats}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">주차</dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.parking}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">포장</dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.takeout} · 배달 {STORE.delivery}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">단체</dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.group}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                <dt className="text-support font-semibold text-ink">
                  라스트오더
                </dt>
                <dd className="col-span-2 text-support text-ink/90">
                  {STORE.lastOrder}
                </dd>
              </div>
            </dl>
            <p role="note" className="mt-4 text-support text-ink/80">
              견과류 알레르기가 있으신 경우 주문 시 꼭 알려주세요.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <figure className="overflow-hidden rounded-2xl">
              {/* 래스터 교체 시 AVIF/WebP · quality 75 · srcset/sizes로 서빙된다. */}
              <Image
                src="/images/visit-exterior.svg"
                alt="서울 성동구에 위치한 작은 젤라또 가게 외관"
                width={1600}
                height={1200}
                quality={75}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) 100vw, 50vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-caption text-ink/75">
                처음 오시는 분은 이 외관을 찾아주세요
              </figcaption>
            </figure>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={MAP_LINKS.naver}
                target="_blank"
                rel="noopener noreferrer"
                data-slot="visit-location"
                aria-label="매장 위치 보기 - 네이버지도로 열기"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-7 text-body font-semibold text-white"
              >
                매장 위치 보기
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={MAP_LINKS.naver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-state/40 px-4 text-support font-semibold text-ink"
                >
                  네이버지도로 가기
                </a>
                <a
                  href={MAP_LINKS.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-state/40 px-4 text-support font-semibold text-ink"
                >
                  카카오맵으로 가기
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <CopyAddressButton />
                <a
                  href={STORE.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-state/40 px-5 text-support font-medium text-ink"
                >
                  전화하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
