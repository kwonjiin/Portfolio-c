import { ArrowLeft, ArrowRight, Home as HomeIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../hooks/useActiveSection.js";

const SECTION_LABELS = { about: "About", projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact" };
const SECTION_IDS = Object.keys(SECTION_LABELS);

//  뒤로, 앞으로, 홈 버튼주소창
// 뒤로, 앞으로만 진짜
export default function Toolbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeId = useActiveSection(SECTION_IDS);

  const addressLabel = isHome
    ? `내 포트폴리오 > ${SECTION_LABELS[activeId] ?? "Home"}`
    : location.pathname.startsWith("/projects/")
      ? "내 포트폴리오 > Projects > 상세보기"
      : "내 포트폴리오";

  // 맨 위로 스크롤
  const handleHome = () => {
    if (isHome) {
      document.getElementById("app-viewport")?.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center gap-1.5 border-b border-winShadow bg-winFace px-1.5 py-1">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="win-raised-thin flex h-6 w-6 items-center justify-center"
        aria-label="뒤로"
      >
        <ArrowLeft size={13} />
      </button>
      <button
        type="button"
        onClick={() => navigate(1)}
        className="win-raised-thin flex h-6 w-6 items-center justify-center"
        aria-label="앞으로"
      >
        <ArrowRight size={13} />
      </button>
      <button
        type="button"
        onClick={handleHome}
        className="win-raised-thin flex h-6 w-6 items-center justify-center"
        aria-label="홈"
      >
        <HomeIcon size={13} />
      </button>
      <span className="ml-1 hidden text-xs text-winShadow sm:inline">주소:</span>
      <span className="win-field flex-1 truncate text-xs">{addressLabel}</span>
    </div>
  );
}
