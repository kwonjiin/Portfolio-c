import { useEffect } from "react";
import Hero from "../sections/Hero.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function Home() {
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
