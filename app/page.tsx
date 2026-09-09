import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MenuSection from "@/components/MenuSection";
import SpaceSection from "@/components/SpaceSection";
import Gallery from "@/components/Gallery";
import VisitSection from "@/components/VisitSection";
import { STORE } from "@/lib/site";

// Restaurant JSON-LD: 확인된 값만 포함한다.
// - acceptsReservations: false (예약 없음)
// - 별점·리뷰수·좌표·예약URL·유기농 property 없음
// TODO: 실제 위도/경도 확인 후 JSON-LD geo 추가
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: STORE.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: "마장로 39길 36, 1층",
    addressLocality: "성동구",
    addressRegion: "서울",
    addressCountry: "KR",
  },
  telephone: STORE.phoneDisplay,
  priceRange: "₩7,000",
  servesCuisine: ["젤라또", "아이스크림"],
  acceptsReservations: false,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "21:00",
    },
  ],
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Story />
      <MenuSection />
      <SpaceSection />
      <Gallery />
      <VisitSection />
    </main>
  );
}
