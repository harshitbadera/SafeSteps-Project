import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { lessonsData } from '../data/lessonsData';
import { translations } from '../data/translations';
import Navbar from '../components/Navbar';
import SpeechSpeaker from '../components/SpeechSpeaker';

export default function LessonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, speakText, stopSpeaking, playSound } = useApp();
  
  const lesson = lessonsData.find(l => l.id === parseInt(id));
  const [slideIndex, setSlideIndex] = useState(0);

  const t = translations[language] || translations.en;

  useEffect(() => {
    if (!lesson) {
      navigate('/');
      return;
    }
    const currentSlide = lesson.slides[slideIndex];
    if (currentSlide) {
      stopSpeaking();
      const slideTitle = currentSlide.title[language] || currentSlide.title.en;
      const slideText = currentSlide.text[language] || currentSlide.text.en;
      const timeoutId = setTimeout(() => {
        speakText(`${slideTitle}. ${slideText}`);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [slideIndex, lesson, navigate, language]);

  if (!lesson) return null;

  const currentSlide = lesson.slides[slideIndex];
  const progressPercent = ((slideIndex + 1) / lesson.slides.length) * 100;

  const handleNext = () => {
    playSound('click');
    if (slideIndex < lesson.slides.length - 1) {
      setSlideIndex(prev => prev + 1);
    } else {
      stopSpeaking();
      if (lesson.simulator) {
        navigate(`/simulator/${lesson.id}`);
      } else {
        navigate(`/quiz/${lesson.id}`);
      }
    }
  };

  const handlePrev = () => {
    playSound('click');
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  };

  const currentSlideTitle = currentSlide.title[language] || currentSlide.title.en;
  const currentSlideText = currentSlide.text[language] || currentSlide.text.en;

  return (
    <div className="app-container">
      <Navbar title={lesson.title[language]} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Progress bar */}
        <div style={{ width: '100%', backgroundColor: 'var(--color-gray-light)', height: '14px', borderRadius: '7px', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${progressPercent}%`, 
              backgroundColor: 'var(--color-primary)', 
              height: '100%', 
              borderRadius: '7px',
              transition: 'width 0.4s ease'
            }} 
          />
        </div>
        
        <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-primary-dark)', fontSize: '14px' }}>
          {t.slideProgress.replace('{current}', slideIndex + 1).replace('{total}', lesson.slides.length)}
        </div>

        {/* Slide Card */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '320px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ fontFamily: 'Fredoka', color: 'var(--color-primary)', fontSize: '24px' }}>{currentSlideTitle}</h2>
            <SpeechSpeaker text={`${currentSlideTitle}. ${currentSlideText}`} />
          </div>

          <div style={{ fontSize: '100px', textAlign: 'center', margin: '20px 0', animation: 'hover-shake 5s infinite' }} role="img" aria-hidden="true">
            {currentSlide.illustration}
          </div>

          <p style={{ fontSize: '18px', textAlign: 'center', lineHeight: '1.6', color: 'var(--color-dark)' }}>
            {currentSlideText}
          </p>

        </div>

        {/* Slide Navigation Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {slideIndex > 0 && (
            <button 
              className="btn-large btn-outline" 
              onClick={handlePrev}
              style={{ flex: 1 }}
            >
              {t.btnBack}
            </button>
          )}
          <button 
            className="btn-large btn-primary" 
            onClick={handleNext}
            style={{ flex: 2 }}
          >
            {slideIndex === lesson.slides.length - 1 
              ? (lesson.simulator ? t.btnStartPractice : t.btnTakeQuiz) 
              : t.btnContinue
            }
          </button>
        </div>

      </div>
    </div>
  );
}
