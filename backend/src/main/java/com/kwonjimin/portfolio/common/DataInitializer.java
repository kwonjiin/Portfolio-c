package com.kwonjimin.portfolio.common;

import com.kwonjimin.portfolio.about.Award;
import com.kwonjimin.portfolio.about.AwardRepository;
import com.kwonjimin.portfolio.about.Certificate;
import com.kwonjimin.portfolio.about.CertificateRepository;
import com.kwonjimin.portfolio.about.Education;
import com.kwonjimin.portfolio.about.EducationRepository;
import com.kwonjimin.portfolio.about.Introduction;
import com.kwonjimin.portfolio.about.IntroductionRepository;
import com.kwonjimin.portfolio.about.TechStack;
import com.kwonjimin.portfolio.about.TechStackCategory;
import com.kwonjimin.portfolio.about.TechStackRepository;
import com.kwonjimin.portfolio.about.Training;
import com.kwonjimin.portfolio.about.TrainingRepository;
import com.kwonjimin.portfolio.contact.ContactInfo;
import com.kwonjimin.portfolio.contact.ContactRepository;
import com.kwonjimin.portfolio.project.Project;
import com.kwonjimin.portfolio.project.ProjectRepository;
import com.kwonjimin.portfolio.project.TeamType;
import com.kwonjimin.portfolio.project.Troubleshooting;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final EducationRepository educationRepository;
    private final CertificateRepository certificateRepository;
    private final TrainingRepository trainingRepository;
    private final AwardRepository awardRepository;
    private final TechStackRepository techStackRepository;
    private final IntroductionRepository introductionRepository;
    private final ProjectRepository projectRepository;
    private final ContactRepository contactRepository;

    @Override
    public void run(String... args) {
        seedEducations();
        seedCertificates();
        seedTrainings();
        seedAwards();
        seedTechStacks();
        seedIntroduction();
        seedProjects();
        seedContact();
    }

    //  학력
    private void seedEducations() {
        if (educationRepository.count() > 0) return;

        educationRepository.saveAll(List.of(
                Education.builder()
                        .schoolName("단국대학교")
                        .period("2024.08")
                        .description("졸업")
                        .displayOrder(1)
                        .build(),
                Education.builder()
                        .schoolName("경복대학교")
                        .period("2021.02")
                        .description("졸업")
                        .displayOrder(2)
                        .build()
        ));
    }

    // 2. 자격증
    private void seedCertificates() {
        if (certificateRepository.count() > 0) return;

        certificateRepository.saveAll(List.of(
                Certificate.builder().name("정보처리기사").acquiredDate("2026.09").displayOrder(1).build(),
                Certificate.builder().name("SQLD").acquiredDate("2025.09").displayOrder(2).build(),
                Certificate.builder().name("ADsP").acquiredDate("2024.11").displayOrder(3).build()
        ));
    }

    // 3. 교육사항
    private void seedTrainings() {
        if (trainingRepository.count() > 0) return;

        trainingRepository.save(
                Training.builder()
                        .name("한화 Beyond SW Camp 수료")
                        .period("2025.06")
                        .displayOrder(1)
                        .build()
        );
    }

    // 4. 수상내역
    private void seedAwards() {
        if (awardRepository.count() > 0) return;

        awardRepository.saveAll(List.of(
                Award.builder()
                        .title("교내 학술제 최우수상")
                        .period("2023.11")
                        .description("최적 알고리즘을 이용한 자동제어시스템")
                        .displayOrder(1)
                        .build(),
                Award.builder()
                        .title("기업분석경진대회 우수상")
                        .period("2022.12")
                        .description("삼성디스플레이 기업분석")
                        .displayOrder(2)
                        .build()
        ));
    }

    // 5. 기술스택
    private void seedTechStacks() {
        if (techStackRepository.count() > 0) return;

        List<TechStack> techStacks = new java.util.ArrayList<>();
        int order = 1;

        for (String name : List.of("Java", "Spring Boot", "JPA")) {
            techStacks.add(TechStack.builder().category(TechStackCategory.BACKEND).name(name).displayOrder(order++).build());
        }
        for (String name : List.of("JavaScript", "TypeScript", "React", "Vue")) {
            techStacks.add(TechStack.builder().category(TechStackCategory.FRONTEND).name(name).displayOrder(order++).build());
        }
        for (String name : List.of("Figma", "Swagger", "Postman")) {
            techStacks.add(TechStack.builder().category(TechStackCategory.TOOL).name(name).displayOrder(order++).build());
        }
        for (String name : List.of("MySQL", "Redis")) {
            techStacks.add(TechStack.builder().category(TechStackCategory.DB).name(name).displayOrder(order++).build());
        }
        for (String name : List.of(
                "AWS (EC2, S3, CloudFront, CodeDeploy)", "GitHub Actions", "Jenkins", "Docker", "Kubernetes"
        )) {
            techStacks.add(TechStack.builder().category(TechStackCategory.CICD).name(name).displayOrder(order++).build());
        }

        techStackRepository.saveAll(techStacks);
    }

    // 6. 자기소개 (자리만 만들어둔 placeholder 입니다)
    private void seedIntroduction() {
        if (introductionRepository.count() > 0) return;

        introductionRepository.save(
                Introduction.builder()
                        .content("안녕하세요, 문제의 본질을 파악하는 개발자 권지민입니다. "
                                + "")
                        .build()
        );
    }

    // 7. 프로젝트 5개
    private void seedProjects() {
        if (projectRepository.count() > 0) return;

        // --- 1) 아자아자 (Azaaza) ---
        Project azaaza = Project.builder()
                .title("아자아자 (Azaaza)")
                .summary("목표를 등록하고 매일 인증하며 서로 응원하는 습관 형성 SNS 서비스입니다. "
                        + "사용자가 목표를 세우고 매일 인증샷을 올리면, 팔로워들이 '아자아자' 버튼으로 응원을 보낼 수 있습니다.")
                .period("2026.09 - 진행중")
                .teamType(TeamType.SOLO)
                .teamSize(null)
                .myRole("기획부터 백엔드/프론트엔드 개발, 배포까지 전 과정을 개인적으로 진행했습니다. "
                        + "Claude(AI 코딩 어시스턴트)와 페어 프로그래밍하며 개발 속도를 높였습니다.")
                .githubUrl("https://github.com/kwonjiin/Azaaza")
                .deployUrl(null)
                .displayOrder(1)
                .build();
        azaaza.setTechStacks(List.of("Java", "Spring Boot", "JPA", "MySQL", "React", "JavaScript", "AWS S3"));
        azaaza.setImageUrls(List.of("/images/projects/azaaza-1.jpg", "/images/projects/azaaza-2.jpg"));
        
        projectRepository.save(azaaza);

        // --- 2) 다구독다구독 ---
        Project dagudok = Project.builder()
                .title("다구독다구독")
                .summary("OTT 구독 서비스를 운영하는 기업을 위한 구독자 관리 시스템입니다. "
                        + "고객사로부터 구독/결제 데이터를 받아 코호트(Cohort) 분석을 수행하고, "
                        + "AI를 활용해 구독 이탈 방지를 위한 인사이트를 제공합니다.")
                .period("2025.03 - 2025.06")
                .teamType(TeamType.TEAM)
                .teamSize(6)
                .myRole("CI/CD 총괄로 전체 배포 파이프라인을 구축했습니다 (CI: GitHub Actions, CD: AWS EC2/S3/CloudFront/CodeDeploy). "
                        + "그 외에 백엔드 알림 기능과 프론트엔드 로그인/회원가입 기능을 개발했습니다. "
                        + "애자일(스크럼) 방식으로 스프린트를 운영해 마일스톤을 일정에 맞춰 지켰고, "
                        + "API 명세는 Swagger로 문서화했습니다. 코드 리뷰에는 AI 리뷰 도구인 CodeRabbit을 도입해, "
                        + "PR 리뷰부터 머지까지 걸리는 평균 시간을 2일에서 약 0.5일로(약 70% 단축) 줄였습니다.")
                .githubUrl("https://github.com/kwonjiin/be13-fin-aesopwow-subsub_clipclop-BE")
                .deployUrl(null)
                .displayOrder(2)
                .build();
        dagudok.setTechStacks(List.of(
                "Java", "Spring Boot", "JPA", "MySQL", "React", "TypeScript",
                "GitHub Actions", "AWS EC2", "AWS S3", "AWS CloudFront", "AWS CodeDeploy", "Swagger"
        ));
        dagudok.setImageUrls(List.of("/images/projects/dagudok-1.png", "/images/projects/dagudok-2.png"));
        dagudok.setTroubleshootings(List.of(
                Troubleshooting.builder()
                        .issue("배포 스크립트(appspec.yml)의 헬스체크 경로와 대기 시간 설정이 미흡해 CodeDeploy 배포가 자주 실패함")
                        .solution("배포 문제를 찾기 위해 약 70회 가량의 배포 테스트를 반복 진행했고, 헬스체크 경로와 대기 시간을 조정하고 배포 훅(hook) 순서를 재정비해 배포 성공률을 크게 끌어올림")
                        .build()                
        ));
        projectRepository.save(dagudok);

        // --- 3) 이솝의 메아리 ---
        Project aesop = Project.builder()
                .title("이솝의 메아리")
                .summary("다른 팀이 개발한 서비스에 CI/CD 파이프라인을 구축해준 프로젝트입니다. "
                        + "저희 팀은 애플리케이션 기능 개발이 아니라 배포 자동화만 전담했습니다.")
                .period("2025.02 - 2025.03")
                .teamType(TeamType.TEAM)
                .teamSize(5)
                .myRole("백엔드 서비스의 CI/CD를 담당했습니다. Jenkins로 빌드/테스트 파이프라인을 구성하고, "
                        + "ArgoCD로 Kubernetes 클러스터에 자동 배포되도록 구축했습니다. 테스트는 팀 내에서 자체적으로 진행했습니다.")
                .githubUrl("https://github.com/kwonjiin/be13-EchoesOfAesop-AesopWow")
                .deployUrl(null)
                .displayOrder(3)
                .build();
        aesop.setTechStacks(List.of("Jenkins", "ArgoCD", "Docker", "Kubernetes", "GitHub"));
        aesop.setImageUrls(List.of("/images/projects/aesop-architecture.png"));
        aesop.setTroubleshootings(List.of(
                Troubleshooting.builder()
                        .issue("Jenkins가 빌드한 새 Docker 이미지가 ArgoCD가 보는 매니페스트 저장소에 반영되지 않아 배포가 지연됨")
                        .solution("Jenkinsfile에서 이미지 태그를 커밋 해시로 자동 갱신하고, 매니페스트 저장소에 자동으로 Git Push하는 단계를 추가해 두 저장소가 항상 동기화되도록 해결")
                        .build(),
                Troubleshooting.builder()
                        .issue("Kubernetes 파드를 새 버전으로 교체하는 과정에서 짧은 서비스 중단(순단) 발생")
                        .solution("Rolling Update 전략과 Readiness Probe를 세밀하게 설정해, 새 파드가 완전히 준비된 뒤에만 트래픽을 받도록 하여 무중단 배포를 구현")
                        .build()
        ));
        projectRepository.save(aesop);

        // --- 4) Mappride ---
        Project mappride = Project.builder()
                .title("Mappride")
                .summary("나만의 장소를 지도에 기록하는 지도 블로그 서비스입니다. 카페, 주유소 등 원하는 카테고리를 직접 만들고 "
                        + "지도 위에 핀을 찍어 장소를 등록한 뒤, 블로그처럼 글을 쓰고 다른 사용자와 댓글로 소통할 수 있습니다.")
                .period("2025.01 - 2025.02")
                .teamType(TeamType.TEAM)
                .teamSize(5)
                .myRole("풀스택으로 참여했고, 카테고리 생성/조회/수정/삭제(CRUD) 기능을 전담해서 개발했습니다. API 테스트는 Postman으로 진행했습니다.")
                .githubUrl("https://github.com/kwonjiin/be13-2nd-Maptist-Mappride")
                .deployUrl(null)
                .displayOrder(4)
                .build();
        mappride.setTechStacks(List.of("Java", "Spring Boot", "JPA", "MySQL", "Vue.js", "JavaScript", "네이버 지도 API", "Postman"));
        mappride.setImageUrls(List.of("/images/projects/mappride-1.png", "/images/projects/mappride-2.png"));
        mappride.setTroubleshootings(List.of(
                Troubleshooting.builder()
                        .issue("카테고리를 삭제할 때, 그 카테고리로 등록된 장소와 게시글까지 함께 삭제되어 데이터가 유실되는 문제")
                        .solution("카테고리에 속한 장소가 남아있으면 삭제를 막고, 대신 해당 장소들을 '기본 카테고리'로 옮기도록 정책을 수정해 데이터 유실을 방지")
                        .build()
        ));
        projectRepository.save(mappride);

        // --- 5) 이 포트폴리오 ---
        Project portfolio = Project.builder()
                .title("권지민 포트폴리오")
                .summary("지금 보고 있는 이 포트폴리오 웹사이트입니다. Claude(AI 코딩 어시스턴트)와 페어 프로그래밍하며 개발 속도를 높였습니다.")
                .period("2026.09 - 진행중")
                .teamType(TeamType.SOLO)
                .teamSize(null)
                .myRole("기획, 백엔드/프론트엔드 개발, 배포까지 전 과정을 1인으로 진행했습니다. "
                        + "프론트엔드는 Vercel, 백엔드는 Render에 배포했습니다.")
                .githubUrl("https://github.com/kwonjiin/Portfolio-c")
                .displayOrder(5)
                .build();
        portfolio.setTechStacks(List.of("Java", "Spring Boot", "JPA", "React", "Tailwind CSS", "Vercel", "Render"));
        portfolio.setImageUrls(List.of());
        portfolio.setTroubleshootings(List.of(
                Troubleshooting.builder()
                        .issue("프론트엔드(Vercel)와 백엔드(Render)가 서로 다른 도메인에서 동작해, 브라우저의 CORS 정책에 막혀 API 호출이 차단됨")
                        .solution("백엔드에 CORS 설정(CorsConfig)을 추가해 프론트엔드 도메인에서의 요청을 허용하도록 해결")
                        .build(),
                Troubleshooting.builder()
                        .issue("Render 무료 요금제는 일정 시간 요청이 없으면 서버가 잠들어(sleep), 잠든 뒤 첫 요청의 응답이 몇십 초씩 느려짐")
                        .solution("헬스체크(/api/health) API로 주기적인 핑을 보내 서버가 잠들지 않도록 개선")
                        .build()
        ));
        projectRepository.save(portfolio);
    }

    // 8. 연락처
    private void seedContact() {
        if (contactRepository.count() > 0) return;

        contactRepository.save(
                ContactInfo.builder()
                        .email("jimin001006@naver.com")
                        .githubUrl("https://github.com/kwonjiin")
                        .blogUrl("https://secretdiary-by-princessjimin.tistory.com/")
                        .phoneNumber("010-6437-3191")
                        .build()
        );
    }
}
