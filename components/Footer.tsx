import { STORE } from "@/lib/site";

// 하단 푸터: 상호·주소·전화·영업시간·휴무. 투명도 0.72 이상 유지.
export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-content px-5 py-10">
        <p className="font-serif text-h3 font-semibold text-ink">
          {STORE.name}
        </p>
        <address className="mt-3 text-support not-italic text-ink/80">
          {STORE.address}
          <br />
          <a href={STORE.phoneHref} className="a11y-link text-ink/80">
            {STORE.phoneDisplay}
          </a>
        </address>
        <p className="hours mt-3 text-support text-ink/80">
          {STORE.hours} · {STORE.closed}
        </p>
        <p className="mt-6 text-caption text-ink/75">
          © 2026 {STORE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
