/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Windows 2000 클래식 테마 색상입니다.
      colors: {
        winFace: "#C0C0C0", // 버튼/창 기본 회색
        winLight: "#FFFFFF", // 3D 입체의 밝은 쪽
        winShadow: "#808080", // 보조 텍스트, 3D 입체의 어두운 쪽
        winDark: "#000000",
        winSelect: "#0A246A", // 선택/hover 시 파란색
        winDesktop: "#3A6EA5", // 클래식 바탕화면 색
        winField: "#FFFFFF", // 입력창 배경
      },
    },
  },
  plugins: [],
};
