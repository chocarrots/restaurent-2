import { STORE } from "@/lib/site";

const NAV = [
  { href: "#story", label: "이야기" },
  { href: "#menu", label: "메뉴" },
  { href: "#space", label: "공간" },
  { href: "#visit", label: "방문" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-content px-5">
        <div className="flex items-center justify-between gap-3 py-3">
          <a
            href="#top"
            className="a11y-link whitespace-nowrap font-serif text-body font-bold text-ink"
            aria-label="애플 젤라또 처음으로"
          >
            애플 젤라또
          </a>
          <a
            href="#visit"
            data-slot="header-location"
            className="inline-flex min-h-[44px] min-w-[152px] items-center justify-center rounded-full bg-accent px-5 text-support font-semibold text-white"
          >
            매장 위치 보기
          </a>
        </div>
        <nav aria-label="매장 안내" className="pb-2">
          <ul className="flex items-center gap-1 overflow-x-auto">
            {NAV.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="a11y-link rounded-full px-4 text-support font-medium text-ink/85 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-auto hidden shrink-0 sm:block">
              <a
                href={STORE.phoneHref}
                className="a11y-link rounded-full px-4 text-support font-medium text-ink/85"
              >
                {STORE.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
