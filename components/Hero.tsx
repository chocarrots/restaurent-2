// 히어로: 풀블리드 이미지 + 앵커 CTA. 동작하지 않는 button을 두지 않는다.
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="hero-media relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-state">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-mobile.svg"
          />
          <img
            src="/images/hero.svg"
            alt="우드 테이블 위에 놓인 애플 젤라또 컵"
            width={2400}
            height={1500}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div aria-hidden="true" className="hero-scrim absolute inset-0" />
        <div className="hero-focus absolute inset-0">
          <div className="mx-auto flex h-full max-w-content flex-col justify-end px-5 pb-24 md:justify-center md:pb-0">
            <div className="max-w-xl">
              <p className="label-latin text-caption font-semibold uppercase text-white">
                <span className="hero-text-shadow-soft">
                  Majang-dong · Since 2025
                </span>
              </p>
              <h1
                id="hero-title"
                className="hero-text-shadow mt-3 font-serif text-h1-mobile font-bold text-white md:text-display"
              >
                동네에서 천천히 즐기는 한 컵의 젤라또
              </h1>
              <p className="hero-text-shadow-soft mt-3 max-w-md text-body font-medium text-white">
                애플 젤라또는 2025년 문을 연 작은 젤라또 가게입니다. 좋아하는
                젤라또를 가까운 동네에서 나누고 싶어 시작했습니다.
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  id="hero-cta"
                  href="#visit"
                  data-slot="hero-location"
                  className="inline-flex min-h-[52px] min-w-[152px] items-center justify-center rounded-full bg-accent px-7 text-body font-semibold text-white"
                >
                  매장 위치 보기
                </a>
                <a
                  href="tel:021112222"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/70 px-6 text-body font-medium text-white"
                >
                  전화하기
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
