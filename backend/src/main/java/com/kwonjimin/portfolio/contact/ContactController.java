package com.kwonjimin.portfolio.contact;

import com.kwonjimin.portfolio.contact.dto.ContactResponse;
import java.nio.charset.StandardCharsets;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Contact 페이지(그리고 About 페이지의 "이메일 내려받기" 버튼)에서 사용하는 API입니다.
 *
 * GET /api/contact       -> 이메일/깃허브/블로그/전화번호를 JSON으로 반환
 * GET /api/contact/vcard -> 연락처를 "vCard(.vcf)" 파일로 다운로드
 *
 * vCard(.vcf)는 대부분의 휴대폰/이메일 앱에서 "연락처 추가"로 바로 열리는 표준 파일 형식입니다.
 * 즉, 방문자가 버튼을 누르면 내 이메일/전화번호가 담긴 연락처 파일을 받아서
 * 자기 휴대폰 연락처에 원클릭으로 저장할 수 있게 해주는 기능입니다.
 * (만약 "그냥 이메일 텍스트 파일 하나만 받으면 됨" 을 원하신다면 이 부분은 쉽게 바꿀 수 있어요!)
 */
@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactRepository contactRepository;

    @GetMapping
    public ContactResponse getContact() {
        ContactInfo info = getContactInfoOrThrow();
        return new ContactResponse(info.getEmail(), info.getGithubUrl(), info.getBlogUrl(), info.getPhoneNumber());
    }

    @GetMapping("/vcard")
    public ResponseEntity<byte[]> downloadVCard() {
        ContactInfo info = getContactInfoOrThrow();

        // vCard 표준 형식의 텍스트를 직접 만듭니다. (특별한 라이브러리 없이도 충분히 쉬움)
        String vcard = """
                BEGIN:VCARD
                VERSION:3.0
                N:권;지민;;;
                FN:권지민
                EMAIL:%s
                TEL:%s
                URL:%s
                END:VCARD
                """.formatted(info.getEmail(), info.getPhoneNumber(), info.getGithubUrl());

        byte[] fileBytes = vcard.getBytes(StandardCharsets.UTF_8);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("text/vcard; charset=UTF-8"))
                // Content-Disposition: attachment 를 지정하면, 브라우저가 화면에 보여주지 않고
                // 바로 "다운로드"를 실행합니다.
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"kwonjimin.vcf\"")
                .body(fileBytes);
    }

    private ContactInfo getContactInfoOrThrow() {
        return contactRepository.findAll().stream()
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("연락처 정보가 아직 등록되지 않았습니다."));
    }
}
