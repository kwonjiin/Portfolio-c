import GroupBox from "../components/GroupBox.jsx";
import FieldRow from "../components/FieldRow.jsx";
import { aboutData } from "../data/portfolioData.js";

// 자기소개
export default function AboutSection() {
  const data = aboutData;

  return (
    <section id="about" className="px-4 py-6">
      <GroupBox title="About">
        <div className="space-y-4">
          <div>
            <FieldRow label="Name">권지민</FieldRow>
            <FieldRow label="Role">Full-Stack Developer</FieldRow>
          </div>

          <GroupBox title="Education">
            {data.educations.map((edu) => (
              <p key={edu.schoolName} className="mb-1 text-xs last:mb-0">
                <span className="text-winShadow">{edu.period}</span> — {edu.schoolName} ({edu.description})
              </p>
            ))}
          </GroupBox>

          <GroupBox title="Certificates">
            <p className="text-xs">
              {data.certificates.map((cert) => `${cert.name} (${cert.acquiredDate})`).join(" · ")}
            </p>
          </GroupBox>

          <GroupBox title="Introduction">
            <p className="whitespace-pre-line text-xs leading-relaxed">{data.introduction}</p>
          </GroupBox>
        </div>
      </GroupBox>
    </section>
  );
}
