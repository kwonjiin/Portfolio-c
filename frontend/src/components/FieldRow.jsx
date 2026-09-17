// About/Contact 등에서 재사용
export default function FieldRow({ label, children }) {
  return (
    <div className="mb-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
      <span className="w-full shrink-0 text-xs font-bold sm:w-28">{label}</span>
      <span className="win-field block flex-1 truncate text-xs">{children}</span>
    </div>
  );
}
