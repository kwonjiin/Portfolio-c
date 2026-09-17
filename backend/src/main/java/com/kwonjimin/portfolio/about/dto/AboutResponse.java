package com.kwonjimin.portfolio.about.dto;

import java.util.List;
import java.util.Map;


public record AboutResponse(
        String introduction,
        List<EducationDto> educations,
        List<CertificateDto> certificates,
        List<TrainingDto> trainings,
        List<AwardDto> awards,
        Map<String, List<String>> techStacks
) {
    public record EducationDto(String schoolName, String period, String description) {}

    public record CertificateDto(String name, String acquiredDate) {}

    public record TrainingDto(String name, String organization, String period) {}

    public record AwardDto(String title, String period, String description) {}
}
