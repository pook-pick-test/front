import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/Header";

const TestListPage = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ type -> 시작 경로 매핑
  const getStartPath = (test) => {
    switch (test.type) {
      case "DRAMA":
        return "/category/drama";
      case "MUSIC":
        return "/category/music";
      case "HORO":
        return "/category/horo";
      default:
        return null;
    }
  };

  const handleClickTest = (test) => {
    const path = getStartPath(test);
    if (!path) return;

    // 필요하면 query string으로 testId 전달도 가능
    // navigate(`${path}?testId=${test.id}`);
    navigate(path);
  };

  useEffect(() => {
    const run = async () => {
      if (!query.trim()) {
        setTests([]);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const url = `/api/tests/search?query=${encodeURIComponent(query)}&lang=${encodeURIComponent(
          lang
        )}`;

        const res = await fetch(url, { headers: { accept: "*/*" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setTests(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        setError("목록을 불러오지 못했어요.");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [query, lang]);

  return (
    <div>
      <Header />

      <div style={{ padding: "16px" }}>
        <h2>검색 결과</h2>
        {loading && <p>불러오는 중...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && tests.length === 0 && <p>결과가 없어요.</p>}

        <ul style={{ padding: 0, listStyle: "none" }}>
          {tests.map((t) => (
            <li
              key={t.id}
              onClick={() => handleClickTest(t)}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 12,
                borderRadius: 8,
                border: "1px solid #2222",
                paddingRight: 10,
                cursor: "pointer",
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleClickTest(t);
              }}
            >
              <img src={t.thumbnailUrl} alt={t.title} width={120} />
              <div style={{ padding: "8px 0" }}>
                <div>{t.title}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {t.type} · {t.userCount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestListPage;
