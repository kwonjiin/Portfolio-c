import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 지금 화면에 보이고 있는 섹션이 어디인지(about/projects/skills/contact) 추적하는 훅입니다.
// 툴바 주소창 · 작업표시줄에서 현재 위치를 강조 표시하는 데 사용합니다.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const location = useLocation();

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    // 화면 세로 중간 지점을 지나는 섹션을 "현재 섹션"으로 판단합니다.
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
    // location.pathname이 바뀔 때마다 다시 실행해야 합니다. 다른 페이지(예: 프로젝트 상세)에 갔다가
    // 돌아오면 예전 섹션 엘리먼트는 이미 사라졌고 새로 마운트된 엘리먼트를 다시 관찰해야 하기 때문입니다.
    // (이걸 빼먹으면 작업표시줄 버튼이 눌린 상태로 멈춰버립니다)
  }, [ids, location.pathname]);

  return active;
}
