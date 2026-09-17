import { useState } from "react";

/**
 * 프로젝트 사진 한 장을 보여주는 컴포넌트입니다.
 * 아직 실제 이미지 파일을 넣지 않았거나 경로가 잘못된 경우, "no image" 텍스트만 보여줍니다.
 *
 * 실제 사진을 추가하려면 frontend/public/images/projects/ 폴더에
 * 백엔드 DataInitializer.java 에서 지정한 파일 이름 그대로 넣어주시면 됩니다.
 */
export default function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="win-sunken flex aspect-video w-full items-center justify-center p-0.5 text-xs text-winShadow">
        no image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="win-sunken aspect-video w-full object-cover p-0.5"
    />
  );
}
