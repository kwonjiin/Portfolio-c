// 그룹 박스. 제목이 테두리 위에 파묻힌 것처럼 보이게

export default function GroupBox({ title, children, className = "" }) {
  return (
    <div className={`win-groupbox px-4 pb-4 pt-3 ${className}`}>
      {title && <span className="win-groupbox-legend text-xs font-bold">{title}</span>}
      {children}
    </div>
  );
}
