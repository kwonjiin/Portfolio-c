import { Link } from "react-router-dom";
import { FileCode2 } from "lucide-react";

// 프로젝트 하나를 탐색기의 "자세히" 보기 목록 한 줄처럼 보이게
export default function ProjectListItem({ project }) {
  const { id, title, period, techStacks } = project;

  return (
    <Link
      to={`/projects/${id}`}
      className="win-list-row flex flex-col gap-1 border-b border-[#e0e0e0] px-2 py-2 text-xs last:border-0 sm:grid sm:grid-cols-[1fr_120px_1fr] sm:items-center sm:gap-2"
    >
      <span className="flex items-center gap-2 font-bold">
        <FileCode2 size={14} className="win-list-icon shrink-0 text-winSelect" />
        {title}
      </span>
      <span className="win-list-meta pl-6 text-winShadow sm:pl-0">{period}</span>
      <span className="win-list-meta truncate pl-6 text-winShadow sm:pl-0">{techStacks.join(", ")}</span>
    </Link>
  );
}
