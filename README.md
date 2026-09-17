# Portfolio.exe — 권지민 포트폴리오

Windows 2000을 테마로 만든 개발자 권지민의 포트폴리오 웹사이트입니다.
바탕화면 위에 창(Window) 하나가 떠 있는 형태로, 타이틀 바 · 메뉴 바 · 툴바 · 작업표시줄까지 그 시절 UI를 그대로 재현했습니다.

- **Frontend**: React + Tailwind CSS
- **Backend**: Spring Boot + JPA

## 주요 기능

- **Windows 2000 UI 재구현**: 타이틀 바, 메뉴 바, 툴바, 시스템 트레이 시계가 있는 작업표시줄
- **섹션 네비게이션**: About / Projects / Skills / Contact 를 작업표시줄 버튼으로 전환
- **프로젝트 상세보기**: 프로젝트별 요약, 담당 역할, 트러블슈팅 경험, 기술 스택을 별도 창으로 확인
- **연락처 vCard 다운로드**: 연락처 정보를 `.vcf` 파일로 바로 저장 가능
- **시스템 종료 이스터에그**: 시작 메뉴의 Shut Down을 누르면 그 시절 종료 화면이 뜨고, 클릭하면 다시 켜짐

## 기술 스택

| 분야 | 스택 |
|---|---|
| Backend | Java, Spring Boot, Spring Data JPA, MySQL |
| Frontend | React, JavaScript, Tailwind CSS |
| 배포 | Vercel(프론트엔드), Render(백엔드) |

## 프로젝트 구조

```
Portfolio-c/
├── backend/   # Spring Boot + JPA API 서버 (자세한 설명: backend/README.md)
└── frontend/  # React + Tailwind CSS 화면
```

## 로컬에서 실행하기

두 서버를 각각 켜야 합니다 (터미널 2개 필요). 백엔드는 로컬 MySQL(또는 MariaDB)이 필요합니다 — 최초 1회 설정은 `backend/README.md`를 참고하세요.

```bash
# 1) 백엔드 (http://localhost:8080)
cd backend
mvn spring-boot:run

# 2) 프론트엔드 (http://localhost:5173)
cd frontend
npm install
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속하면 됩니다.

## 배포(할예정)

- 프론트엔드: [Vercel](https://vercel.com)
- 백엔드: [Render](https://render.com)

## Contact

- Email: jimin001006@naver.com
- GitHub: [@kwonjiin](https://github.com/kwonjiin)
- Blog: [secretdiary-by-princessjimin.tistory.com](https://secretdiary-by-princessjimin.tistory.com/)
