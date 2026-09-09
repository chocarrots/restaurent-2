// 매장 실제 정보 단일 소스. 확인되지 않은 값은 절대 여기에 창작하지 않는다.
export const STORE = {
  name: "애플 젤라또",
  address: "서울 성동구 마장로 39길 36, 1층",
  phoneDisplay: "02-111-2222",
  phoneHref: "tel:021112222",
  hours: "12:00~21:00",
  closed: "매주 월요일 휴무",
  seats: "테이블 5개 / 총 10석",
  parking: "불가",
  takeout: "가능",
  delivery: "없음",
  group: "별도 기준 없음",
  lastOrder: "별도 없음",
  peak: "평일 15:00~17:00 및 주말 오후",
  opened: "2025년",
  price: "7,000원",
} as const;

const addressQuery = encodeURIComponent(STORE.address);

export const MAP_LINKS = {
  naver: `https://map.naver.com/p/search/${addressQuery}`,
  kakao: `https://map.kakao.com/?q=${addressQuery}`,
} as const;

// TODO: 대표 경력 확인 후 문구 검토 (화면 노출 금지)
// TODO: 유기농 원재료 및 인증 여부 확인 후 표현 검토
// TODO: 주요 원산지 확인
// TODO: 메뉴별 전체 알레르기 정보 확인
// TODO: 보유 사진 6장의 원본 장변 픽셀 확인
// TODO: 실제 위도/경도 확인 후 JSON-LD geo 추가
// TODO: 보유 사진이 각 이미지 슬롯의 필요 해상도를 충족하는지 확인.
//       필요 장변보다 작으면 해당 슬롯은 "재촬영·원본 교체 필요" 상태로 교체한다. (화면 노출 금지)
