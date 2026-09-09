# 애플 젤라또 — 단일 매장 소개 페이지

2025년 서울 성동구 마장동에 문을 연 작은 젤라또 가게 **애플 젤라또**의
단일 페이지 소개 사이트. 목표는 “예약”이 아니라 **매장 방문 유도**다.

## 스택

- Next.js App Router + TypeScript + Tailwind CSS
- 외부 API·결제 기능 없음

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
```

3000번 포트가 이미 사용 중이면 다른 포트로 실행한다.

```bash
npm run dev -- -p 3001   # http://localhost:3001
```

## 검증

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## 구조

- `app/page.tsx` — 히어로 → 이야기 → 메뉴 → 공간 → 갤러리 → 방문
- `app/layout.tsx` — 메타데이터·폰트·헤더/푸터·모바일 고정 바
- `app/sitemap.ts` · `app/robots.ts` — SEO
- `components/` — 섹션별 컴포넌트
- `lib/site.ts` — 매장 정보 단일 소스 (주소·전화·영업시간 등)
- `public/images/` — 이미지 슬롯 (실사·생성 래스터 교체 예정, 필요 장변은 코드 TODO 참조)
