import { useFetch } from "../hooks/useFetch.js";
import StatusMessage from "../components/StatusMessage.jsx";
import GroupBox from "../components/GroupBox.jsx";

// 교육사항, 수상내역 하나의 목록 상자로
export default function ExperienceSection() {
  const { data, loading, error } = useFetch("/api/about");

  return (
    <section id="experience" className="px-4 py-6">
      <GroupBox title="Experience / Awards">
        {(loading || error) && <StatusMessage loading={loading} error={error} />}

        {data && (
          <div className="win-sunken win-scrollbar max-h-56 overflow-y-auto p-1">
            {data.trainings.map((training) => (
              <div
                key={training.name}
                className="flex flex-wrap gap-x-2 border-b border-[#e0e0e0] px-2 py-1.5 text-xs last:border-0"
              >
                <span className="w-20 shrink-0 text-winShadow">{training.period}</span>
                <span>
                  {training.name} — {training.organization}
                </span>
              </div>
            ))}
            {data.awards.map((award) => (
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
        )}
      </GroupBox>
    </section>
  );
}
