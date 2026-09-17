import { Minus, Square, X } from "lucide-react";

// 창 맨 위의 파란 타이틀 바
export default function TitleBar() {
  return (
    <div className="win-titlebar flex h-7 items-center justify-between px-1.5">
      <div className="flex items-center gap-1.5 text-white">
        <span className="text-xs">📁</span>
        <span className="text-xs font-bold">Portfolio - 권지민 [실행 중]</span>
      </div>
      <div className="flex gap-0.5">
        <button type="button" className="win-raised-thin flex h-4 w-4 items-center justify-center" aria-label="최소화">
          <Minus size={10} />
        </button>
        <button type="button" className="win-raised-thin flex h-4 w-4 items-center justify-center" aria-label="최대화">
          <Square size={9} />
        </button>
        <button type="button" className="win-raised-thin flex h-4 w-4 items-center justify-center" aria-label="닫기">
          <X size={10} />
        </button>
      </div>
    </div>
  );
}
