// 창 맨 아래의 상태 바입니다. 클래식 상태 바처럼 sunken 구획으로 나뉩니다.
export default function StatusBar() {
  return (
    <div className="flex h-6 items-center gap-2 bg-winFace px-2">
      <span className="win-field flex-1 py-0.5 text-xs text-winShadow">Ready</span>
      <span className="win-field px-3 py-0.5 text-xs text-winShadow">Internet</span>
    </div>
  );
}
