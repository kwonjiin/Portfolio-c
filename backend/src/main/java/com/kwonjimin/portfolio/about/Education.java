package com.kwonjimin.portfolio.about;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 학력 한 줄
@Entity
@Getter
@Setter
@NoArgsConstructor   
@AllArgsConstructor
@Builder              // Education.builder().schoolName("...").build() 형태로 쉽게 객체를 만들 수 있게 해줌
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // id 값을 DB가 자동으로 1,2,3... 증가시켜줌
    private Long id;

    private String schoolName;   // 학교 이름 
    private String period;       // 날짜 표시 
    private String description;  // 졸업
    private Integer displayOrder; // 화면에 보여줄 순서 - 작을수록 위
}
