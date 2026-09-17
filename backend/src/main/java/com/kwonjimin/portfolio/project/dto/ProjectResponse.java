package com.kwonjimin.portfolio.project.dto;

import java.util.List;

/**
 * GET /api/projects 응답으로 내려주는 프로젝트 하나의 모양
 *
 * teamType 은 SOLO 또는 TEAM
 * 프론트엔드에서 teamType === "TEAM" 이면 N인 팀 프로젝트
 */
public record ProjectResponse(
        Long id,
        String title,
        String summary,
        String period,
        String teamType,
        Integer teamSize,
        String myRole,
        String githubUrl,
        String deployUrl,
        List<String> techStacks,
        List<String> imageUrls,
        List<TroubleshootingDto> troubleshootings
) {
    public record TroubleshootingDto(String issue, String solution) {}
}
