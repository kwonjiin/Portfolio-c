package com.kwonjimin.portfolio.about;

import com.kwonjimin.portfolio.about.dto.AboutResponse;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/about")
@RequiredArgsConstructor 
public class AboutController {

    private final EducationRepository educationRepository;
    private final CertificateRepository certificateRepository;
    private final TrainingRepository trainingRepository;
    private final AwardRepository awardRepository;
    private final TechStackRepository techStackRepository;
    private final IntroductionRepository introductionRepository;

    @GetMapping
    public AboutResponse getAbout() {
        String introduction = introductionRepository.findAll().stream()
                .findFirst()
                .map(Introduction::getContent)
                .orElse("");

        List<AboutResponse.EducationDto> educations = educationRepository.findAllByOrderByDisplayOrderAsc().stream()
                .map(e -> new AboutResponse.EducationDto(e.getSchoolName(), e.getPeriod(), e.getDescription()))
                .toList();

        List<AboutResponse.CertificateDto> certificates = certificateRepository.findAllByOrderByDisplayOrderAsc().stream()
                .map(c -> new AboutResponse.CertificateDto(c.getName(), c.getAcquiredDate()))
                .toList();

        List<AboutResponse.TrainingDto> trainings = trainingRepository.findAllByOrderByDisplayOrderAsc().stream()
                .map(t -> new AboutResponse.TrainingDto(t.getName(), t.getOrganization(), t.getPeriod()))
                .toList();

        List<AboutResponse.AwardDto> awards = awardRepository.findAllByOrderByDisplayOrderAsc().stream()
                .map(a -> new AboutResponse.AwardDto(a.getTitle(), a.getPeriod(), a.getDescription()))
                .toList();

        
        Map<String, List<String>> techStacks = techStackRepository.findAllByOrderByDisplayOrderAsc().stream()
                .collect(Collectors.groupingBy(
                        t -> t.getCategory().name(),
                        LinkedHashMap::new, 
                        Collectors.mapping(TechStack::getName, Collectors.toList())
                ));

        return new AboutResponse(introduction, educations, certificates, trainings, awards, techStacks);
    }
}
