// 클래식 Windows 다이얼로그의 "그룹 박스"입니다. 제목이 테두리 위에 파묻힌 것처럼 보입니다.
export default function GroupBox({ title, children, className = "" }) {
  return (
    <div className={`win-groupbox px-4 pb-4 pt-3 ${className}`}>
      {title && <span className="win-groupbox-legend text-xs font-bold">{title}</span>}
      {children}
    </div>
  );
}
