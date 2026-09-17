package com.kwonjimin.portfolio.about;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 자기소개 문단을 담는 엔티티
 * 딱 1개의 row만 존재한다고 가정 - 자기소개는 하나니까.
 * 실제 자기소개 내용은 DataInitializer.java 파일에서
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Introduction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob // 긴 글도 저장할 수 있게 해주는 설정
    @Column(length = 4000)
    private String content;
}
