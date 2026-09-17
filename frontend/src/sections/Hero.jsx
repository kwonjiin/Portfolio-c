import Win2kButton from "../components/Win2kButton.jsx";

function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// 창을 열었을 때 맨 처음 보이는 짧은 인사말입니다.
export default function Hero() {
  return (
    <section className="px-4 pb-2 pt-6">
      <h1 className="text-base font-bold">권지민</h1>
      <p className="text-xs text-winShadow">Full-Stack Developer</p>

      <p className="mt-3 max-w-md text-xs leading-relaxed">
        Java, Spring Boot, React, AWS로 아이디어를 실제 서비스로 만듭니다.
      </p>

      <div className="mt-3">
        <Win2kButton onClick={scrollToProjects}>View Projects</Win2kButton>
      </div>
    </section>
  );
}
