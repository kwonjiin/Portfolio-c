import { Download } from "lucide-react";
import { useFetch } from "../hooks/useFetch.js";
import { API_BASE_URL } from "../api/client.js";
import StatusMessage from "../components/StatusMessage.jsx";
import GroupBox from "../components/GroupBox.jsx";
import FieldRow from "../components/FieldRow.jsx";
import Win2kButton from "../components/Win2kButton.jsx";

export default function ContactSection() {
  // 백엔드의 GET /api/contact 를 호출해서 이메일/깃허브/블로그/전화번호를 받아옵니다.
  const { data, loading, error } = useFetch("/api/contact");

  return (
    <section id="contact" className="px-4 py-6">
      <GroupBox title="Contact">
        {(loading || error) && <StatusMessage loading={loading} error={error} />}

        {data && (
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
              <Win2kButton href={`${API_BASE_URL}/api/contact/vcard`}>
                <Download size={12} />
                vCard
              </Win2kButton>
            </div>
          </div>
        )}
      </GroupBox>
    </section>
  );
}
