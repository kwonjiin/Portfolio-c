import { useFetch } from "../hooks/useFetch.js";
import StatusMessage from "../components/StatusMessage.jsx";
import GroupBox from "../components/GroupBox.jsx";
import ProjectListItem from "../components/ProjectListItem.jsx";

// 프로젝트 목록을 탐색기 "자세히 보기"처럼 보여줍니다.
export default function ProjectsSection() {
  const { data, loading, error } = useFetch("/api/projects");

  return (
    <section id="projects" className="px-4 py-6">
      <GroupBox title="Projects">
        {(loading || error) && <StatusMessage loading={loading} error={error} />}

        {data && (
          <div className="win-sunken">
            <div className="hidden grid-cols-[1fr_120px_1fr] gap-2 border-b border-winShadow bg-winFace px-2 py-1 text-xs font-bold sm:grid">
              <span>이름</span>
              <span>수정한 날짜</span>
              <span>스택</span>
            </div>
            <div>
              {data.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </GroupBox>
    </section>
  );
}
