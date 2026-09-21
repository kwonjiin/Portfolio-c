// 백엔드(Render) 콜드스타트로 인한 로딩 지연을 없애기 위해
// backend/.../common/DataInitializer.java 의 시드 데이터를 그대로 옮겨온 정적 데이터입니다.
// 내용을 바꾸려면 이 파일과 DataInitializer.java 둘 다 수정해주세요.

export const aboutData = {
  introduction: "안녕하세요, 문제의 본질을 파악하는 개발자 권지민입니다. ",
  educations: [
    { schoolName: "단국대학교", period: "2024.08", description: "졸업" },
    { schoolName: "경복대학교", period: "2021.02", description: "졸업" },
  ],
  certificates: [
    { name: "정보처리기사", acquiredDate: "2026.09" },
    { name: "SQLD", acquiredDate: "2025.09" },
    { name: "ADsP", acquiredDate: "2024.11" },
  ],
  trainings: [{ name: "한화 Beyond SW Camp 수료", organization: null, period: "2025.06" }],
  awards: [
    { title: "교내 학술제 최우수상", period: "2023.11", description: "최적 알고리즘을 이용한 자동제어시스템" },
    { title: "기업분석경진대회 우수상", period: "2022.12", description: "삼성디스플레이 기업분석" },
  ],
  techStacks: {
    BACKEND: ["Java", "Spring Boot", "JPA"],
    FRONTEND: ["JavaScript", "TypeScript", "React", "Vue"],
    TOOL: ["Figma", "Swagger", "Postman"],
    DB: ["MySQL", "Redis"],
    CICD: ["AWS (EC2, S3, CloudFront, CodeDeploy)", "GitHub Actions", "Jenkins", "Docker", "Kubernetes"],
  },
};

export const projectsData = [
  {
    id: 1,
    title: "아자아자 (Azaaza)",
    summary:
      "목표를 등록하고 매일 인증하며 서로 응원하는 습관 형성 SNS 서비스입니다. " +
      "사용자가 목표를 세우고 매일 인증샷을 올리면, 팔로워들이 '아자아자' 버튼으로 응원을 보낼 수 있습니다.",
    period: "2026.09 - 진행중",
    teamType: "SOLO",
    teamSize: null,
    myRole:
      "기획부터 백엔드/프론트엔드 개발, 배포까지 전 과정을 개인적으로 진행했습니다. " +
      "Claude와 페어 프로그래밍하며 개발 속도를 높였습니다.",
    githubUrl: "https://github.com/kwonjiin/Azaaza",
    deployUrl: null,
    techStacks: ["Java", "Spring Boot", "JPA", "MySQL", "React", "JavaScript", "AWS S3"],
    imageUrls: ["/images/projects/azaaza-1.jpg", "/images/projects/azaaza-2.jpg"],
    troubleshootings: [],
  },
  {
    id: 2,
    title: "다구독다구독",
    summary:
      "OTT 구독 서비스를 운영하는 기업을 위한 구독자 관리 시스템입니다. " +
      "고객사로부터 구독/결제 데이터를 받아 코호트(Cohort) 분석을 수행하고, " +
      "AI를 활용해 구독 이탈 방지를 위한 인사이트를 제공합니다.",
    period: "2025.03 - 2025.06",
    teamType: "TEAM",
    teamSize: 6,
    myRole:
      "CI/CD 총괄로 전체 배포 파이프라인을 구축했습니다 (CI: GitHub Actions, CD: AWS EC2/S3/CloudFront/CodeDeploy). " +
      "그 외에 백엔드 알림 기능과 프론트엔드 로그인/회원가입 기능을 개발했습니다. " +
      "애자일(스크럼) 방식으로 스프린트를 운영해 마일스톤을 일정에 맞춰 지켰고, " +
      "API 명세는 Swagger로 문서화했습니다. 코드 리뷰에는 AI 리뷰 도구인 CodeRabbit을 도입해, " +
      "PR 리뷰부터 머지까지 걸리는 평균 시간을 2일에서 약 0.5일로(약 70% 단축) 줄였습니다.",
    githubUrl: "https://github.com/kwonjiin/be13-fin-aesopwow-subsub_clipclop-BE",
    deployUrl: null,
    techStacks: [
      "Java", "Spring Boot", "JPA", "MySQL", "React", "TypeScript",
      "GitHub Actions", "AWS EC2", "AWS S3", "AWS CloudFront", "AWS CodeDeploy", "Swagger",
    ],
    imageUrls: ["/images/projects/dagudok-1.png", "/images/projects/dagudok-2.png"],
    troubleshootings: [
      {
        issue: "배포 스크립트(appspec.yml)의 헬스체크 경로와 대기 시간 설정이 미흡해 CodeDeploy 배포가 자주 실패함",
        solution:
          "배포 문제를 찾기 위해 약 70회 가량의 배포 테스트를 반복 진행했고, 헬스체크 경로와 대기 시간을 조정하고 배포 훅(hook) 순서를 재정비해 배포 성공률을 크게 끌어올림",
      },
    ],
  },
  {
    id: 3,
    title: "이솝의 메아리",
    summary:
      "다른 팀이 개발한 서비스에 CI/CD 파이프라인을 구축해준 프로젝트입니다. " +
      "저희 팀은 애플리케이션 기능 개발이 아니라 배포 자동화만 전담했습니다.",
    period: "2025.02 - 2025.03",
    teamType: "TEAM",
    teamSize: 5,
    myRole:
      "백엔드 서비스의 CI/CD를 담당했습니다. Jenkins로 빌드/테스트 파이프라인을 구성하고, " +
      "ArgoCD로 Kubernetes 클러스터에 자동 배포되도록 구축했습니다. 테스트는 팀 내에서 자체적으로 진행했습니다.",
    githubUrl: "https://github.com/kwonjiin/be13-EchoesOfAesop-AesopWow",
    deployUrl: null,
    techStacks: ["Jenkins", "ArgoCD", "Docker", "Kubernetes", "GitHub"],
    imageUrls: ["/images/projects/aesop-architecture.png"],
    troubleshootings: [
      {
        issue: "Jenkins가 빌드한 새 Docker 이미지가 ArgoCD가 보는 매니페스트 저장소에 반영되지 않아 배포가 지연됨",
        solution:
          "Jenkinsfile에서 이미지 태그를 커밋 해시로 자동 갱신하고, 매니페스트 저장소에 자동으로 Git Push하는 단계를 추가해 두 저장소가 항상 동기화되도록 해결",
      },
      {
        issue: "Kubernetes 파드를 새 버전으로 교체하는 과정에서 짧은 서비스 중단(순단) 발생",
        solution:
          "Rolling Update 전략과 Readiness Probe를 세밀하게 설정해, 새 파드가 완전히 준비된 뒤에만 트래픽을 받도록 하여 무중단 배포를 구현",
      },
    ],
  },
  {
    id: 4,
    title: "Mappride",
    summary:
      "나만의 장소를 지도에 기록하는 지도 블로그 서비스입니다. 카페, 주유소 등 원하는 카테고리를 직접 만들고 " +
      "지도 위에 핀을 찍어 장소를 등록한 뒤, 블로그처럼 글을 쓰고 다른 사용자와 댓글로 소통할 수 있습니다.",
    period: "2025.01 - 2025.02",
    teamType: "TEAM",
    teamSize: 5,
    myRole: "풀스택으로 참여했고, 카테고리 생성/조회/수정/삭제(CRUD) 기능을 전담해서 개발했습니다. API 테스트는 Postman으로 진행했습니다.",
    githubUrl: "https://github.com/kwonjiin/be13-2nd-Maptist-Mappride",
    deployUrl: null,
    techStacks: ["Java", "Spring Boot", "JPA", "MySQL", "Vue.js", "JavaScript", "네이버 지도 API", "Postman"],
    imageUrls: ["/images/projects/mappride-1.png", "/images/projects/mappride-2.png"],
    troubleshootings: [
      {
        issue: "카테고리를 삭제할 때, 그 카테고리로 등록된 장소와 게시글까지 함께 삭제되어 데이터가 유실되는 문제",
        solution:
          "카테고리에 속한 장소가 남아있으면 삭제를 막고, 대신 해당 장소들을 '기본 카테고리'로 옮기도록 정책을 수정해 데이터 유실을 방지",
      },
    ],
  },
  {
    id: 5,
    title: "권지민 포트폴리오",
    summary: "지금 보고 있는 이 포트폴리오 웹사이트입니다. Claude와 페어 프로그래밍하며 개발 속도를 높였습니다.",
    period: "2026.09",
    teamType: "SOLO",
    teamSize: null,
    myRole:
      "기획, 백엔드/프론트엔드 개발, 배포까지 전 과정을 1인으로 진행했습니다. " +
      "프론트엔드는 Vercel, 백엔드는 Render에 배포했습니다.",
    githubUrl: "https://github.com/kwonjiin/Portfolio-c",
    deployUrl: null,
    techStacks: ["Java", "Spring Boot", "JPA", "React", "Tailwind CSS", "Vercel", "Render"],
    imageUrls: [],
    troubleshootings: [
      {
        issue: "프론트엔드(Vercel)와 백엔드(Render)가 서로 다른 도메인에서 동작해, 브라우저의 CORS 정책에 막혀 API 호출이 차단됨",
        solution: "백엔드에 CORS 설정(CorsConfig)을 추가해 프론트엔드 도메인에서의 요청을 허용하도록 해결",
      },
      {
        issue: "Render 무료 요금제는 일정 시간 요청이 없으면 서버가 잠들어(sleep), 잠든 뒤 첫 요청의 응답이 몇십 초씩 느려짐",
        solution:
          "백엔드 호출 없이 프론트엔드가 데이터를 직접 들고 있도록 구조를 바꿔, 콜드스타트를 아예 겪지 않도록 개선",
      },
    ],
  },
];

export const contactData = {
  email: "jimin001006@naver.com",
  githubUrl: "https://github.com/kwonjiin",
  blogUrl: "https://secretdiary-by-princessjimin.tistory.com/",
  phoneNumber: "010-6437-3191",
};
