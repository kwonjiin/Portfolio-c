import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TitleBar from "./TitleBar.jsx";
import MenuBar from "./MenuBar.jsx";
import Toolbar from "./Toolbar.jsx";
import StatusBar from "./StatusBar.jsx";
import Taskbar from "./Taskbar.jsx";
import ShutdownOverlay from "./ShutdownOverlay.jsx";

// 화면 전체를 "바탕화면 위에 떠 있는 창 하나"처럼 구성합니다.
// 타이틀 바/메뉴 바/툴바/작업표시줄은 항상 그대로 있고, 실제 내용만 안쪽에서 스크롤됩니다.
export default function Layout() {
  const [shutDown, setShutDown] = useState(false);
  const location = useLocation();

  // 주소(페이지)가 바뀔 때마다 창 안의 스크롤을 맨 위로 되돌립니다.
  // 이 컨테이너는 라우트가 바뀌어도 그대로 남아있기 때문에, 초기화하지 않으면
  // 뒤로/앞으로/홈 버튼을 눌러도 스크롤 위치가 그대로라 화면이 안 바뀐 것처럼 보입니다.
  useEffect(() => {
    document.getElementById("app-viewport")?.scrollTo(0, 0);
  }, [location.pathname]);

  if (shutDown) {
    return <ShutdownOverlay onWake={() => setShutDown(false)} />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-winDesktop px-2 py-4 pb-12 sm:px-4 sm:py-6">
      <div className="win-raised flex w-full max-w-5xl flex-col">
        <TitleBar />
        <MenuBar />
        <Toolbar />

        <div className="win-sunken m-2 overflow-hidden">
          <div id="app-viewport" className="win-scrollbar max-h-[60vh] overflow-y-auto sm:max-h-[65vh]">
            <Outlet />
          </div>
        </div>

        <StatusBar />
      </div>

      <Taskbar onShutDown={() => setShutDown(true)} />
    </div>
  );
}
