import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TitleBar from "./TitleBar.jsx";
import MenuBar from "./MenuBar.jsx";
import Toolbar from "./Toolbar.jsx";
import StatusBar from "./StatusBar.jsx";
import Taskbar from "./Taskbar.jsx";
import ShutdownOverlay from "./ShutdownOverlay.jsx";

// 화면 전체를 바탕화면 위에 떠 있는 창 하나처럼 
// 타이틀 바/메뉴 바/툴바/작업표시줄은 그대로 있고, 실제 내용만 안쪽에서 스크롤되게
export default function Layout() {
  const [shutDown, setShutDown] = useState(false);
  const location = useLocation();

  // 주소가 바뀔 때마다 창 안의 스크롤을 맨 위로 되돌림

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
