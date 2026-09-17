// Start 메뉴의 "Shut Down..."을 누르면 나오는, 그 시절 종료 화면 오마주입니다.
// 아무 곳이나 클릭하면 다시 켜집니다.
export default function ShutdownOverlay({ onWake }) {
  return (
    <button
      type="button"
      onClick={onWake}
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black px-6 text-center text-sm text-[#c0c0c0]"
    >
      이제 컴퓨터를 꺼도 안전합니다.
      <br />
      (아무 곳이나 클릭하면 다시 켜집니다)
    </button>
  );
}
