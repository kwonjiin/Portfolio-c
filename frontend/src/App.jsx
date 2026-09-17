import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

// 홈은 한 페이지 스크롤 구조(About/Projects/Skills/Experience/Contact)이고,
// 프로젝트는 각각 별도의 상세 페이지(/projects/:id)를 가집니다.
// 예전 주소(/about 등)로 들어오는 사람은 홈의 해당 섹션으로 보내줍니다.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
