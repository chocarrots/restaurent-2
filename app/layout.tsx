import type { Metadata, Viewport } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

// 헤드라인 서리프 웹폰트(라틴/숫자용 600·700, 2종)만 내려받는다.
// next/font의 내장 Google Fonts 데이터는 한글 세리프의 한국어 서브셋을
// 제공하지 않으므로, 한글 글리프는 아래 font-serif 스택의 시스템 한글
// 세리프(AppleMyungjo·NanumMyeongjo·Batang 계열)로 렌더링한다.
// 본문은 Pretendard Variable 서브셋 계열을 시스템 폰트 스택으로 참조해
// 웹폰트 총 전송 용량을 300KB 이하로 유지한다.
// 전체 웨이트: 400 / 500 / 600 / 700 (300 사용 금지).
const serif = Noto_Serif_KR({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-serif",
});

const SITE_URL = "https://apple-gelato.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "애플 젤라또 | 서울 성동구 마장동 젤라또",
  description:
    "서울 성동구 마장로에 위치한 작은 젤라또 가게 애플 젤라또. 구운 피스타치오, 애플 시나몬, 리조, 제철과일 소르베를 만나보세요.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "애플 젤라또",
    title: "애플 젤라또 | 서울 성동구 마장동 젤라또",
    description:
      "서울 성동구 마장로에 위치한 작은 젤라또 가게 애플 젤라또. 구운 피스타치오, 애플 시나몬, 리조, 제철과일 소르베를 만나보세요.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR" className={serif.variable}>
      {/* 히어로만 preload (모바일/데스크톱 분기는 picture + media, 중복 다운로드 없음) */}
      <link
        rel="preload"
        as="image"
        href="/images/hero.svg"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-mobile.svg"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <body className="bg-background font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-support focus:font-semibold focus:text-white"
        >
          본문으로 바로가기
        </a>
        <Header />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
