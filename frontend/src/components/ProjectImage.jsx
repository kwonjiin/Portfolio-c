import { useState } from "react";

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
