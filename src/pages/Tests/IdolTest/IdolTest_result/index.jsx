import './index.css';
import html2canvas from 'html2canvas';
import musicPlayer from '../../../../assets/music-player.png';
import ShareMethods from '../../../../components/ShareMethods';
import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const IdolTest_Result = () => {
    const { lang } = useLanguage();
    const { memo, answers } = useOutletContext();

    const [resultData, setResultData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const testId = "1";

    console.log("✅ final answers:", answers);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                setLoading(true);
                setError(null);

                const answerList = Object.entries(answers).map(([questionOrder, optionId]) => ({
                    questionOrder: Number(questionOrder),
                    optionId: optionId
                }));

                const response = await fetch(`/api/tests/${testId}/result?lang=${lang}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: memo,
                        answers: answerList
                    })
                });

                if (!response.ok) {
                    throw new Error('결과를 불러오는데 실패했습니다.');
                }

                const data = await response.json();
                setResultData(data);
            } catch (err) {
                setError(err?.message || '알 수 없는 오류가 발생했습니다.');
                console.error('Error fetching result:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchResult();
    }, [answers, memo, lang]);

    const shareWithX = () => {
        var sendText = "내 결과도 알아보기";
        var sendUrl = "https://example.com";
        var xURL = "https://twitter.com/intent/tweet?text="
            + encodeURIComponent(sendText)
            + "&url=" + encodeURIComponent(sendUrl);
        window.open(xURL, "_blank");
    }

    const handleDownloadImage = async() => {
        const element = document.querySelector('.result-wrapper');
        if (!element) return;
        try{
            const canvas = await html2canvas(element);
            
            canvas.toBlob((blob) => {
                if(blob){
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'idol_test_result.png';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }
            });
        } catch(error) {
            console.error('이미지 저장 중 오류 발생:', error);
        }
    }

    if (loading) {
        return (
            <div className="IdolTest-Result">
                <div className="loading-container">
                    <p>결과를 분석 중입니다...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="IdolTest-Result">
                <div className="error-container">
                    <p className="error-message">{error}</p>
                </div>
            </div>
        );
    }

    return(
        <div className="IdolTest-Result">
            <div className="result-wrapper">
                <h3 className="result-desc">{memo || '사용자'}님의<br />아이돌 포지션은</h3>
                <h1 className='result-name'>{resultData?.positionName || '메인보컬'}</h1>
                {resultData?.imageUrl && (
                    <img className='result-img' src={resultData.imageUrl} alt='result-img' />
                )}
                <p className='result-explain'>{resultData?.description || '당신은 그룹의 메인 보컬입니다!'}</p>
                
                {resultData?.music && (
                    <>
                        <p className='music-desc'>당신에게 어울리는 노래 --&gt;</p>
                        <div className='result-music'>
                            <div className='music-item'>
                                {resultData.music.imageUrl && (
                                    <img src={resultData.music.imageUrl} alt='song-img'/>
                                )}
                                <p>{resultData.music.title} - {resultData.music.artist}</p>
                            </div>
                            <img src={musicPlayer} alt='music-player-img' />
                        </div>
                    </>
                )}
            </div>
            <ShareMethods />
        </div>
    );
}

export default IdolTest_Result;