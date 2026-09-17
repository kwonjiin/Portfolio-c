package com.kwonjimin.portfolio.project;

import com.kwonjimin.portfolio.project.dto.ProjectResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Project 페이지에서 필요한 데이터를 내려주는 API
 * GET /api/projects 를 호출하면 프로젝트 5개가 배열로
 */
@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectRepository projectRepository;

    @GetMapping
    public List<ProjectResponse> getProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAsc().stream()
                .map(this::toResponse)
                .toList();
    }

    // DB용 객체인 Project 엔티티를 API 응답용 객체인 ProjectResponse로 변환
    // DB 구조를 그대로 API로 노출하지 않고, 필요한 형태로 한 번 가공해서 내려주는것
    private ProjectResponse toResponse(Project project) {
        List<ProjectResponse.TroubleshootingDto> troubleshootings = project.getTroubleshootings().stream()
                .map(t -> new ProjectResponse.TroubleshootingDto(t.getIssue(), t.getSolution()))
                .toList();

        return new ProjectResponse(
                project.getId(),
                project.getTitle(),
                project.getSummary(),
                project.getPeriod(),
                project.getTeamType().name(),
                project.getTeamSize(),
                project.getMyRole(),
                project.getGithubUrl(),
                project.getDeployUrl(),
                project.getTechStacks(),
                project.getImageUrls(),
                troubleshootings
        );
    }
}
