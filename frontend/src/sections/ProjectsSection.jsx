import GroupBox from "../components/GroupBox.jsx";
import ProjectListItem from "../components/ProjectListItem.jsx";
import { projectsData } from "../data/portfolioData.js";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-6">
      <GroupBox title="Projects">
        <div className="win-sunken">
          <div className="hidden grid-cols-[1fr_120px_1fr] gap-2 border-b border-winShadow bg-winFace px-2 py-1 text-xs font-bold sm:grid">
            <span>이름</span>
            <span>수정한 날짜</span>
            <span>스택</span>
          </div>
          <div>
            {projectsData.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </GroupBox>
    </section>
  );
}
