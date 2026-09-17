# Portfolio-c

권지민 개발자 포트폴리오입니다. 
윈도우2000을 주제로 디자인했습니다.

- `backend/` — Spring Boot + JPA 
- `frontend/` — React + Tailwind CSS

## 로컬에서 실행하기

두 서버를 각각 켜야 합니다.

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
