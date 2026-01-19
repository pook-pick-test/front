import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import html2canvas from "html2canvas";
import musicPlayer from "../../../../assets/music-player.png";
import ShareMethods from "../../../../components/ShareMethods";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";

const Reply1988_Result = () => {
  const { answers /*, resultCache, saveResultCache */ } = useOutletContext();
  const { lang } = useLanguage();

  const [resultKey, setResultKey] = useState(""); // "ESFJ"
  const [result, setResult] = useState(null);     // 최종 결과 JSON
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const testId = 2;

  // answers는 언어와 무관하지만, 최종 결과/문구는 lang에 따라 달라지므로 payload에 lang 반영
  const payload = useMemo(() => {
    const answerArray = Array.isArray(answers)
      ? answers
      : Object.keys(answers || {})
          .sort((a, b) => Number(a) - Number(b))
          .map((k) => answers[k]);

    return {
      testId,
      language: lang,          // ✅ 여기 중요
      answers: answerArray,
    };
  }, [answers, lang]);

  useEffect(() => {
    if (!payload.answers?.length) return;

    const controller = new AbortController();

    const run = async () => {
      try {
        setLoading(true);
        setError("");
        setResult(null);

        // (옵션) lang별 캐시가 있다면 여기서 먼저 꺼내 쓰는 것도 가능
        // const cached = resultCache?.[lang];
        // if (cached) { setResult(cached); setResultKey(cached?.resultKey ?? ""); setLoading(false); return; }

        // 1) answers -> resultKey (이 엔드포인트가 lang을 payload로 받는다고 가정)
        const keyRes = await fetch("/api/drama-results/reply1988-result", {
          method: "POST",
          headers: { "Content-Type": "application/json", accept: "*/*" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        if (!keyRes.ok) throw new Error("resultKey 요청 실패");

        const keyText = await keyRes.text();
        const key = keyText.replaceAll('"', "").trim();
        setResultKey(key);

        // 2) resultKey -> 최종 결과 (lang 반영)
        const detailUrl = `/api/drama-results?testId=${testId}&resultKey=${encodeURIComponent(
          key
        )}&language=${encodeURIComponent(lang)}`;

        const detailRes = await fetch(detailUrl, {
          headers: { accept: "*/*" },
          signal: controller.signal,
        });

        if (!detailRes.ok) throw new Error("drama-results 요청 실패");

        const detailJson = await detailRes.json();
        setResult(detailJson);

        // (옵션) 저장
        // saveResultCache(detailJson, lang);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error(e);
          setError("결과를 불러오지 못했어요. 다시 시도해주세요.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    run();
    return () => controller.abort();
  }, [payload, lang]);

  // 캡처 다운로드
  const handleDownloadImage = async () => {
    const element = document.querySelector(".result-wrapper");
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "reply1988_result.png";
      link.click();
      URL.revokeObjectURL(link.href);
    });
  };

  // 유튜브 새창 열기
  const openYoutube = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="Reply1988-Result">
        <div className="result-wrapper">
          <p>결과 계산 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Reply1988-Result">
        <div className="result-wrapper">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // ✅ 응답 구조에 맞춘 매핑
  const name = result?.resultCharacterName ?? "";
  const title = result?.resultTitle ?? "";
  const desc = Array.isArray(result?.resultDesc)
    ? result.resultDesc[0]
    : (result?.resultDesc ?? "");
  const songIntro = result?.songIntro ?? "";

  const song = Array.isArray(result?.resultSongs) ? result.resultSongs[0] : null;
  const songTitle = song?.title ?? "";
  const songArtist = song?.artist ?? "";
  const songImgUrl = song?.imageUrl ?? "";
  const youtubeUrl = song?.youtubeUrl ?? "";

  const clean = (s = "") => s.replace(/\s*\([^)]*\)/g, "").trim();

  const characterImgUrl = result?.resultCelebrities?.[0]?.imageUrl;

  return (
    <div className="Reply1988-Result">
      <div className="result-wrapper">
        <h3 className="result-desc">{title}</h3>
        <h1 className="result-name">{name}</h1>

        <img
          className="result-img"
          src={characterImgUrl || undefined}
          alt="result-img"
        />

        <p className="result-explain">{desc}</p>

        <p className="music-desc">{songIntro} --&gt;</p>

        <div className="result-music">
          <div className="music-item">
            <img
              src={songImgUrl || undefined}
              alt="song-img"
              role="button"
              tabIndex={0}
              style={{
                objectFit: "cover",
                borderRadius: "18px",
                marginTop: "10px",
                cursor: youtubeUrl ? "pointer" : "default",
              }}
              onClick={() => openYoutube(youtubeUrl)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openYoutube(youtubeUrl);
              }}
            />

            <div className="song-meta">
              <p className="song">
                {clean(songTitle)} - {clean(songArtist)}
              </p>
            </div>
          </div>

          <img src={musicPlayer} alt="music-player-img" />
        </div>
      </div>

      <ShareMethods onDownload={handleDownloadImage} />
    </div>
  );
};

export default Reply1988_Result;
