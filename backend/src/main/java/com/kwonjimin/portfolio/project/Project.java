package com.kwonjimin.portfolio.project;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OrderColumn;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 프로젝트 한 개를 나타내는 엔티티
 *
 * techStacks / imageUrls / troubleshootings 는 리스트(여러 개)인 필드
 * @ElementCollection : Project 하나당 여러 값을 저장할 수 있는 별도의 테이블을 만들어주는 jpa어노테이션
 * (project_tech_stacks, project_images, project_troubleshootings)
 * Java 리스트처럼 다루기
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;   // 프로젝트 이름 

    @Column(length = 1000)
    private String summary; //  설명

    private String period;  // 진행 기간

    @Enumerated(EnumType.STRING)
    private TeamType teamType; // SOLO 또는 TEAM

    private Integer teamSize; // 팀 인원수 (개인 프로젝트면 null)

    @Column(length = 1500)
    private String myRole; // 내가 맡은 역할

    private String githubUrl; // 깃허브 레포 주소
    private String deployUrl; // 배포 주소 (없으면 null)

    private Integer displayOrder; // 프로젝트 목록에서 보여줄 순서

    // fetch = EAGER: Project를 조회하는 즉시 이 리스트들도 함께 조회
    // LAZY로 두면, Controller에서 값을 꺼내 쓰려는 시점에는
    //  DB세션이 이미 끝나버려서 "LazyInitializationException" 오류
    //  프로젝트 개수가 몇 개 안 되는 포트폴리오 사이트라 EAGER로도 성능 문제없음
    @Builder.Default
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_tech_stacks", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "tech_stack")
    @OrderColumn(name = "list_order") // 저장한 순서 그대로 다시 읽어올 수 있게
    private List<String> techStacks = new ArrayList<>();

    @Builder.Default
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_images", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "image_url")
    @OrderColumn(name = "list_order")
    private List<String> imageUrls = new ArrayList<>();

    @Builder.Default
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_troubleshootings", joinColumns = @JoinColumn(name = "project_id"))
    @OrderColumn(name = "list_order")
    private List<Troubleshooting> troubleshootings = new ArrayList<>();
}
