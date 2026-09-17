import { Link } from "react-router-dom";

// 클래식 Windows 버튼입니다. to를 주면 라우터 링크로, href를 주면 <a>로, 둘 다 없으면 <button>으로 렌더링합니다.
export default function Win2kButton({ children, onClick, href, to, external, className = "" }) {
  const classes = `win-raised-thin inline-flex items-center gap-1.5 px-4 py-1 text-xs active:translate-x-px active:translate-y-px ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
