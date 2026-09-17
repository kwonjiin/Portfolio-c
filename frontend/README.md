# 권지민 포트폴리오 프론트엔드

React + Vite + Tailwind CSS 로 만든 포트폴리오 화면입니다.
백엔드(Spring Boot) API에서 데이터를 받아와 화면에 보여줍니다.

"Windows 2000" 데스크톱을 오마주한 디자인입니다. 화면 전체가 바탕화면(청록색) 위에
떠 있는 창 하나처럼 구성되어 있고, 타이틀 바 · 메뉴 바 · 툴바(주소창) · 작업표시줄까지 갖췄습니다.

메인 화면(Home)은 창 안에서 스크롤만 내리면 About → Projects → Skills → Experience → Contact를
순서대로 볼 수 있는 원페이지 구조이고, 각 프로젝트는 `/projects/:id` 상세 페이지를 따로 가집니다.
작업표시줄의 Start 메뉴 → Shut Down... 을 눌러보면 작은 이스터에그가 있습니다.

## 실행 방법

먼저 백엔드가 http://localhost:8080 에서 켜져 있어야 합니다. (`backend/README.md` 참고)

```bash
cd frontend
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속.

## 폴더 구조

```
src/
├─ main.jsx              ← 앱의 시작점. 라우터(BrowserRouter) 설정
├─ App.jsx               ← 라우팅 설정 ("/" 은 홈, "/projects/:id" 는 프로젝트 상세. 예전 주소(/about 등)는 홈의 해당 섹션으로 리다이렉트)
├─ index.css             ← 전역 CSS (Windows 2000 입체 테두리 등은 tailwind.config.js 의 winFace/winShadow/winSelect 등 참고)
├─ api/
│   └─ client.js         ← 백엔드 주소를 담은 axios 인스턴스
├─ hooks/
│   ├─ useFetch.js         ← "API 불러오기 + 로딩중 + 에러" 를 대신 처리해주는 재사용 훅
│   └─ useActiveSection.js ← 지금 보고 있는 섹션을 추적 (툴바 주소창 · 작업표시줄 강조 표시용)
├─ components/
│   ├─ Layout.jsx           ← 바탕화면 + 창(타이틀 바/메뉴 바/툴바/내용/상태 바) + 작업표시줄을 조립하는 틀
│   ├─ TitleBar.jsx         ← 파란 그라데이션 타이틀 바 (최소화/최대화/닫기는 장식용)
│   ├─ MenuBar.jsx          ← File/Edit/View/... 메뉴 바 (장식용)
│   ├─ Toolbar.jsx          ← 뒤로/앞으로/홈 버튼(실제 브라우저 히스토리 사용) + 주소창
│   ├─ StatusBar.jsx        ← 창 맨 아래 상태 바
│   ├─ Taskbar.jsx          ← 화면 맨 아래 고정된 작업표시줄 (Start 메뉴 + 섹션 바로가기 + 시계)
│   ├─ ShutdownOverlay.jsx  ← Start → Shut Down... 을 눌렀을 때 나오는 이스터에그
│   ├─ GroupBox.jsx         ← 클래식 다이얼로그의 "그룹 박스" (제목이 테두리에 파묻힌 모양)
│   ├─ Win2kButton.jsx      ← 3D 입체 버튼 (button/링크/외부링크 겸용)
│   ├─ FieldRow.jsx         ← "라벨 + 읽기전용 입력창" 한 줄 (About/Contact에서 재사용)
│   ├─ ProjectListItem.jsx  ← 프로젝트 1개를 탐색기 "자세히 보기" 목록의 한 줄로 보여줌
│   ├─ ProjectImage.jsx     ← 프로젝트 사진 (없으면 "no image" 표시)
│   └─ StatusMessage.jsx    ← 로딩중/에러 텍스트
├─ sections/               ← Home 페이지를 이루는 섹션들 (창 안에서 스크롤로 이어짐)
│   ├─ Hero.jsx             ← 이름 + 한 줄 소개 + [View Projects] 버튼
│   ├─ AboutSection.jsx     ← 학력/자격증/자기소개 (id="about")
│   ├─ ProjectsSection.jsx  ← 프로젝트를 탐색기 목록처럼 나열 (id="projects")
│   ├─ SkillsSection.jsx    ← 기술스택을 체크리스트처럼 나열 (id="skills")
│   ├─ ExperienceSection.jsx← 교육사항 + 수상내역을 목록 상자로 나열 (id="experience")
│   └─ ContactSection.jsx   ← 이메일/깃허브/블로그/전화번호 (id="contact")
└─ pages/
    ├─ Home.jsx            ← 위 섹션들을 순서대로 이어붙이는 페이지
    └─ ProjectDetail.jsx   ← 프로젝트 상세 페이지 (/projects/:id). 단건 조회 API가 없어 목록에서 id로 찾아 보여줍니다.
```

프로젝트 상세 페이지는 Overview → My Role → Tech Stack → Screenshots → Problem & Solution → Deployment
순서로 구성됩니다. 백엔드 데이터에 없는 "Key Features"·"Result" 항목은 임의로 지어내지 않고 생략했습니다.

## 데이터는 어디서 오나요?

화면에 보이는 글자(학력, 프로젝트 설명 등)는 프론트엔드 코드에 없습니다.
전부 백엔드 API(`/api/about`, `/api/projects`, `/api/contact`)에서 받아옵니다.

**내용을 수정하려면 프론트엔드가 아니라 `backend/.../DataInitializer.java` 파일을 수정해야 합니다.**

## 프로젝트 사진 넣는 법

`public/images/projects/` 폴더에, 백엔드 `DataInitializer.java`에 적힌 파일 이름과
정확히 똑같은 이름으로 이미지를 넣으면 자동으로 화면에 나타납니다. (`public/images/projects/README.md` 참고)

## 배포 시 백엔드 주소 연결하기

Vercel에 배포할 때, 프로젝트 설정 > Environment Variables 에서 아래 값을 등록해주세요.

```
VITE_API_BASE_URL=https://실제-render-백엔드-주소
```

(로컬 개발 중에는 등록하지 않아도 자동으로 http://localhost:8080 을 사용합니다)
