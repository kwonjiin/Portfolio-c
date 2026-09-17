// 클래식 메뉴 바. 실제 드롭다운은 없고, 뭔가 그 시절 창처럼
const MENUS = ["File", "Edit", "View", "Favorites", "Tools", "Help"];

export default function MenuBar() {
  return (
    <div className="flex h-6 items-center gap-1 border-b border-winShadow bg-winFace px-2 text-xs">
      {MENUS.map((label) => (
        <span key={label} className="cursor-default px-1.5 py-0.5 hover:bg-winSelect hover:text-white">
          {label}
        </span>
      ))}
    </div>
  );
}
