import GroupBox from "../components/GroupBox.jsx";
import { aboutData } from "../data/portfolioData.js";

const CATEGORY_LABELS = { BACKEND: "Backend", FRONTEND: "Frontend", DB: "Database", TOOL: "Tool", CICD: "CI / CD" };
const CATEGORY_ORDER = ["BACKEND", "FRONTEND", "DB", "TOOL", "CICD"];

// 기술스택 체크리스트
export default function SkillsSection() {
  const categories = CATEGORY_ORDER
    .filter((key) => aboutData.techStacks[key]?.length)
    .map((key) => [key, aboutData.techStacks[key]]);

  return (
    <section id="skills" className="px-4 py-6">
      <GroupBox title="Skills">
        <div className="space-y-4">
          {categories.map(([key, stacks]) => (
            <div key={key}>
              <p className="mb-1.5 text-xs font-bold">{CATEGORY_LABELS[key] ?? key}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {stacks.map((name) => (
                  <span key={name} className="flex items-center gap-1.5 text-xs">
                    <span className="win-checkbox">✓</span>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GroupBox>
    </section>
  );
}
