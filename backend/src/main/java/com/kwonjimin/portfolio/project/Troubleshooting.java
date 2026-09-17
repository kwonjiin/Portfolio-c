package com.kwonjimin.portfolio.project;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 트러블슈팅(문제 + 해결) 한 건을 나타냅니다.
 * @Embeddable 은 "이 자체로는 독립된 테이블이 아니고, Project에 속한 부품"이라는 뜻입니다.
 * (Project.java 의 troubleshootings 리스트 안에 이 타입이 여러 개 들어갑니다)
 */
@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Troubleshooting {

    @Column(length = 300)
    private String issue;    // 어떤 문제가 있었는지

    @Column(length = 2000)
    private String solution; // 어떻게 해결했는지
}
