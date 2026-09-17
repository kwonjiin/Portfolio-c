import { useEffect, useState } from "react";
import { apiClient } from "../api/client.js";

// "API 호출, 로딩중, 에러 상태를 한 번에 관리
export function useFetch(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    apiClient
      .get(path)
      .then((response) => {
        if (active) setData(response.data);
      })
      .catch(() => {
        if (active) setError("데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    // path 바뀌기 전에 컴포넌트가 사라진다? 이미 끝난 요청 결과를 state에 반영하지 않도록 막어라
    return () => {
      active = false;
    };
  }, [path]);

  return { data, loading, error };
}
