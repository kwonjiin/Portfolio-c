# Portfolio-c

권지민 개발자 포트폴리오입니다. 백엔드(Java/Spring Boot)와 프론트엔드(React)로 구성되어 있습니다.

- `backend/` — Spring Boot + JPA 로 만든 API 서버 (자세한 설명: `backend/README.md`)
- `frontend/` — React + Tailwind CSS 로 만든 화면 (자세한 설명: `frontend/README.md`)

## 로컬에서 실행하기

두 서버를 각각 켜야 합니다 (터미널 2개 필요).

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

## 배포

- 프론트엔드: Vercel
- 백엔드: Render
