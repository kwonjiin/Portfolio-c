import { Download } from "lucide-react";
import GroupBox from "../components/GroupBox.jsx";
import FieldRow from "../components/FieldRow.jsx";
import Win2kButton from "../components/Win2kButton.jsx";
import { contactData } from "../data/portfolioData.js";

// 브라우저에서 바로 .vcf 파일을 만들어 다운로드 (백엔드 호출 없음)
function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:권;지민;;;",
    "FN:권지민",
    `EMAIL:${contactData.email}`,
    `TEL:${contactData.phoneNumber}`,
    `URL:${contactData.githubUrl}`,
    "END:VCARD",
    "",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "kwonjimin.vcf";
  link.click();

  URL.revokeObjectURL(url);
}

export default function ContactSection() {
  const data = contactData;

  return (
    <section id="contact" className="px-4 py-6">
      <GroupBox title="Contact">
        <div>
          <FieldRow label="Email">{data.email}</FieldRow>
          <FieldRow label="GitHub">{data.githubUrl}</FieldRow>
          <FieldRow label="Blog">{data.blogUrl}</FieldRow>
          <FieldRow label="Phone">{data.phoneNumber}</FieldRow>

          <div className="mt-4 flex flex-wrap gap-2">
            <Win2kButton href={`mailto:${data.email}`}>Send Mail</Win2kButton>
            <Win2kButton href={data.githubUrl} external>
              Visit GitHub
            </Win2kButton>
            <Win2kButton href={data.blogUrl} external>
              Visit Blog
            </Win2kButton>
            <Win2kButton onClick={downloadVCard}>
              <Download size={12} />
              vCard
            </Win2kButton>
          </div>
        </div>
      </GroupBox>
    </section>
  );
}
