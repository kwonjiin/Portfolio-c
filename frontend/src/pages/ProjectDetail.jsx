import { useParams } from "react-router-dom";
import ProjectImage from "../components/ProjectImage.jsx";
import GroupBox from "../components/GroupBox.jsx";
import Win2kButton from "../components/Win2kButton.jsx";
import { projectsData } from "../data/portfolioData.js";

// 프로젝트 상세 페이지
export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  return (
    <section className="px-4 py-6">
      <Win2kButton to="/projects">← All Projects</Win2kButton>

      {!project && <p className="mt-4 text-xs">프로젝트를 찾을 수 없습니다.</p>}

      {project && (
        <div className="mt-4">
          <GroupBox title={project.title}>
            <p className="mb-4 text-xs text-winShadow">
              {project.period} · {project.teamType === "TEAM" ? `Team · ${project.teamSize}` : "Solo"}
            </p>

            <div className="space-y-4">
              <GroupBox title="Project Overview">
                <p className="text-xs leading-relaxed">{project.summary}</p>
              </GroupBox>

              <GroupBox title="My Role">
                <p className="text-xs leading-relaxed">{project.myRole}</p>
              </GroupBox>

              <GroupBox title="Tech Stack">
                <p className="text-xs">{project.techStacks.join(" · ")}</p>
              </GroupBox>

              {project.imageUrls.length > 0 && (
                <GroupBox title="Screenshots">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {project.imageUrls.map((url) => (
                      <ProjectImage key={url} src={url} alt={`${project.title} 스크린샷`} />
                    ))}
                  </div>
                </GroupBox>
              )}

              {project.troubleshootings.length > 0 && (
                <GroupBox title="Problem & Solution">
                  <div className="space-y-3">
                    {project.troubleshootings.map((item, index) => (
                      <div key={index} className="text-xs leading-relaxed">
                        <p>
                          <span className="font-bold">PROBLEM</span> {item.issue}
                        </p>
                        <p className="mt-1">
                          <span className="font-bold">SOLUTION</span> {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </GroupBox>
              )}

              <GroupBox title="Deployment">
                <div className="flex flex-wrap gap-2">
                  <Win2kButton href={project.githubUrl} external>
                    GitHub
                  </Win2kButton>
                  {project.deployUrl && (
                    <Win2kButton href={project.deployUrl} external>
                      Live Site
                    </Win2kButton>
                  )}
                </div>
              </GroupBox>
            </div>
          </GroupBox>
        </div>
      )}
    </section>
  );
}
