import { useEffect } from "react";
import Hero from "../sections/Hero.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

// 창 안에서 스크롤만으로 About/Projects/Skills/Experience/Contact를 모두 볼 수 있도록 이어붙입니다.
export default function Home() {
  // /#about 같은 해시를 달고 들어온 경우, 그 섹션 위치로 스크롤해줍니다.
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  return (
    <div className="pb-4">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
