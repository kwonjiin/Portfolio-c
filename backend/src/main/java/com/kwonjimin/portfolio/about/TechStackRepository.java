package com.kwonjimin.portfolio.about;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechStackRepository extends JpaRepository<TechStack, Long> {
    List<TechStack> findAllByOrderByDisplayOrderAsc();
}
