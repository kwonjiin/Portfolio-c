package com.kwonjimin.portfolio.about;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingRepository extends JpaRepository<Training, Long> {
    List<Training> findAllByOrderByDisplayOrderAsc();
}
