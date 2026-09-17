import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../hooks/useActiveSection.js";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const SECTION_IDS = SECTIONS.map((section) => section.id);

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

// 화면 맨 아래 고정된 작업표시줄입니다. Start 메뉴, 섹션 바로가기, 시계로 구성됩니다.
export default function Taskbar({ onShutDown }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeId = useActiveSection(SECTION_IDS);
  const now = useClock();

  const goTo = (id) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const timeLabel = now.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-9 items-center gap-1.5 border-t border-winLight bg-winFace px-1.5">
      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`win-raised-thin flex items-center gap-1 px-2 py-1 text-xs font-bold italic ${menuOpen ? "win-pressed" : ""}`}
        >
          🏁 Start
        </button>

        {menuOpen && (
          <div className="win-raised absolute bottom-[calc(100%+2px)] left-0 flex w-60 p-0">
            <div className="flex w-7 items-end justify-center bg-[#0a246a] pb-2">
              <span className="text-[10px] font-bold tracking-widest text-white [writing-mode:vertical-rl]">
                PORTFOLIO
              </span>
            </div>
            <div className="flex-1 divide-y divide-[#e0e0e0] bg-white p-1">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goTo(section.id)}
                  className="win-list-row flex w-full items-center px-2 py-1.5 text-left text-xs"
                >
                  {section.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onShutDown();
                }}
                className="win-list-row flex w-full items-center px-2 py-1.5 text-left text-xs"
              >
                Shut Down...
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-6 w-px bg-winShadow" />

      <div className="flex flex-1 gap-1 overflow-x-auto">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => goTo(section.id)}
            className={`win-raised-thin shrink-0 px-3 py-1 text-xs ${isHome && activeId === section.id ? "win-pressed" : ""}`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="win-field shrink-0 px-3 py-1 text-xs">{timeLabel}</div>
    </div>
  );
}
