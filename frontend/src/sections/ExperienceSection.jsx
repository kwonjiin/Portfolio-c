import GroupBox from "../components/GroupBox.jsx";
import { aboutData } from "../data/portfolioData.js";

// 교육사항, 수상내역 하나의 목록 상자로
export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-6">
      <GroupBox title="Experience / Awards">
        <div className="win-sunken win-scrollbar max-h-56 overflow-y-auto p-1">
          {aboutData.trainings.map((training) => (
            <div
              key={training.name}
              className="flex flex-wrap gap-x-2 border-b border-[#e0e0e0] px-2 py-1.5 text-xs last:border-0"
            >
              <span className="w-20 shrink-0 text-winShadow">{training.period}</span>
              <span>
                {training.name}
                {training.organization ? ` — ${training.organization}` : ""}
              </span>
            </div>
          ))}
          {aboutData.awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-wrap gap-x-2 border-b border-[#e0e0e0] px-2 py-1.5 text-xs last:border-0"
            >
              <span className="w-20 shrink-0 text-winShadow">{award.period}</span>
              <span>
                {award.title} — {award.description}
              </span>
            </div>
          ))}
        </div>
      </GroupBox>
    </section>
  );
}
