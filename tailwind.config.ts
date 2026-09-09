import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F4EF",
        ink: "#2A231F",
        accent: "#B52B31",
        state: "#8A6547",
      },
      maxWidth: {
        content: "1152px",
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          '"Noto Serif KR"',
          '"AppleMyungjo"',
          '"NanumMyeongjo"',
          "Batang",
          "Georgia",
          "serif",
        ],
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          "sans-serif",
        ],
      },
      // fontSize 토큰은 반드시 [크기, { lineHeight, letterSpacing }] 쌍으로 지정한다.
      // 임의값 사용 금지. 본문 최소 15px, 캡션 최소 13px.
      fontSize: {
        display: ["48px", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        "h1-mobile": ["36px", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        h2: ["32px", { lineHeight: "1.32", letterSpacing: "-0.02em" }],
        h3: ["22px", { lineHeight: "1.36", letterSpacing: "-0.02em" }],
        lead: ["18px", { lineHeight: "1.70", letterSpacing: "0" }],
        body: ["16px", { lineHeight: "1.70", letterSpacing: "0" }],
        support: ["15px", { lineHeight: "1.70", letterSpacing: "0" }],
        caption: ["13px", { lineHeight: "1.55", letterSpacing: "0" }],
      },
    },
  },
  plugins: [],
};

export default config;
