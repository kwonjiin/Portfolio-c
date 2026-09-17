package com.kwonjimin.portfolio.about;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AwardRepository extends JpaRepository<Award, Long> {
    List<Award> findAllByOrderByDisplayOrderAsc();
}
