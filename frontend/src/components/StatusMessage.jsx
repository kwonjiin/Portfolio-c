// 로딩중/에러 상태를 보여주는 공통 컴포넌트입니다.
export default function StatusMessage({ loading, error }) {
  if (loading) {
    return <p className="win-field my-2 inline-block px-3 py-1.5 text-xs">불러오는 중...</p>;
  }

  if (error) {
    return <p className="win-field my-2 inline-block px-3 py-1.5 text-xs text-red-700">[오류] {error}</p>;
  }

  return null;
}
