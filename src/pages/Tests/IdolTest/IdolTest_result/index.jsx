import './index.css';
import html2canvas from 'html2canvas';
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

    const testId = 1;

    console.log("✅ final answers:", answers);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                setLoading(true);
                setError(null);

                const answerArray = Object.keys(answers)
                    .sort((a, b) => Number(a) - Number(b))
                    .map(key => answers[key]);

                const requestBody = {
                    testId: testId,
                    language: lang,
                    answers: answerArray
                };

                console.log('📡 API URL:', '/api/music-results/idol-position-result');
                console.log('📤 Request body:', JSON.stringify(requestBody));

                const response = await fetch('/api/music-results/idol-position-result', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody)
                });

                console.log('📥 Response status:', response.status);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('❌ Error response:', errorText);
                    throw new Error(`API 오류 (${response.status}): ${errorText}`);
                }

                const data = await response.json();
                console.log('✅ Result data:', data);
                setResultData(data);
            } catch (err) {
                setError(err?.message || '알 수 없는 오류가 발생했습니다.');
                console.error('❌ Error fetching result:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchResult();
    }, [answers, lang]);

    const handleDownloadImage = async() => {
        const element = document.querySelector('.result-wrapper');
        if (!element) return;
        try {
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

    const firstSong = resultData?.resultSongs?.[0];

    return(
        <div className="IdolTest-Result">
            <div className="result-wrapper">
                {/* 타이틀 섹션 */}
                <h3 className="result-title">
                    {memo || 'User'}'s position in<br />idol group is
                </h3>
                
                {/* 포지션 이름 */}
                <h1 className='result-position'>"{resultData?.resultTitle}"</h1>
                
                {/* 설명 - resultIntro */}
                <p className='result-intro'>{resultData?.resultIntro}</p>
                
                {/* 추가 설명 - resultDesc 배열 */}
                <div className='result-desc-list'>
                    {resultData?.resultDesc?.map((desc, index) => (
                        <p key={index} className='result-desc-item'>• {desc}</p>
                    ))}
                </div>

                {/* 추천 노래 섹션 */}
                <div className='song-section'>
                    <p className='song-title'>{resultData?.songIntro || 'An idol song that suits you'}</p>
                    {firstSong && (
                        <a 
                            href={firstSong.youtubeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='song-card'
                        >
                            <div className='song-album'>
                                {firstSong.imageUrl ? (
                                    <img src={firstSong.imageUrl} alt='album' />
                                ) : (
                                    <div className='album-placeholder'></div>
                                )}
                            </div>
                            <div className='song-info'>
                                <p className='song-name'>{firstSong.title}</p>
                                <p className='song-artist'>by {firstSong.artist}</p>
                            </div>
                        </a>
                    )}
                </div>

                {/* 대표 아이돌 섹션 */}
                <div className='idol-section'>
                    <p className='idol-section-title'>{resultData?.artistIntro || 'Representative idols'}</p>
                    <div className='idol-list'>
                        {resultData?.resultCelebrities?.map((celeb) => (
                            <div className='idol-item' key={celeb.celebId}>
                                <div className='idol-image'>
                                    {celeb.imageUrl && <img src={celeb.imageUrl} alt={celeb.name} />}
                                </div>
                                <p className='idol-group'>{celeb.idol_group}'s</p>
                                <p className='idol-name'>{celeb.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <ShareMethods />
        </div>
    );
}

export default IdolTest_Result;