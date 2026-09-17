package com.kwonjimin.portfolio.contact.dto;

// GET /api/contact 응답 모양
public record ContactResponse(
        String email,
        String githubUrl,
        String blogUrl,
        String phoneNumber
) {
}
