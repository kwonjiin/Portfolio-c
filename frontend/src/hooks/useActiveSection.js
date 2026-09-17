import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// about, projects, skills, contact중에 어딘지 추적하는 훅
// 툴바 주소창, 작업표시줄에서 사용
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const location = useLocation();

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    // 화면 세로 중간 지점을 지나는 섹션을 현재 섹션으로 판단
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // location.pathname 바뀔 때마다 다시 실행 - 작업표시줄 멈춰서 ㅋㅋ
  }, [ids, location.pathname]);

  return active;
}
