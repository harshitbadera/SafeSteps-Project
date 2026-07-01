import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { lessonsData } from '../data/lessonsData';
import { translations } from '../data/translations';
import SpeechSpeaker from '../components/SpeechSpeaker';

export default function Home() {
  const { language, userName, completedLessons, streak, playSound, speakText } = useApp();
  const navigate = useNavigate();

  // Redirect to Welcome page if username is not configured yet
  useEffect(() => {
    if (!userName) {
      navigate('/welcome');
    }
  }, [userName, navigate]);

  const t = translations[language] || translations.en;

  const handleLessonClick = (lesson) => {
    const isCompleted = completedLessons.includes(lesson.id);
    const isFirstUncompleted = completedLessons.length + 1 === lesson.id;
    const isUnlocked = isCompleted || isFirstUncompleted;

    if (isUnlocked) {
      playSound('click');
      navigate(`/lesson/${lesson.id}`);
    } else {
      playSound('incorrect');
      
      const prevLessonTitle = lessonsData[lesson.id - 2]?.title[language] || "";
      const speakMsg = {
        en: `This lesson is locked. Please complete ${prevLessonTitle} first!`,
        hi: `यह पाठ बंद है। कृपया पहले ${prevLessonTitle} पूरा करें!`,
        kn: `ಈ ಪಾಠ ಲಾಕ್ ಆಗಿದೆ. ದಯವಿಟ್ಟು ಮೊದಲು ${prevLessonTitle} ಪೂರ್ಣಗೊಳಿಸಿ!`
      };
      
      speakText(speakMsg[language] || speakMsg.en);
    }
  };

  const dailyTips = {
    en: "Tip of the Day: Never press any buttons on your payment app if someone calls claiming they accidentally sent you money. Real payments reflect instantly without your approval!",
    hi: "आज की सुरक्षा सलाह: यदि कोई फोन करके दावा करे कि उसने गलती से आपको पैसे भेज दिए हैं, तो अपने पेमेंट ऐप में कोई भी बटन न दबाएं। असली भुगतान आपकी अनुमति के बिना तुरंत आ जाते हैं!",
    kn: "ದೈನಂದಿನ ಸುರಕ್ಷತಾ ಸಲಹೆ: ಯಾರಾದರೂ ಕರೆ ಮಾಡಿ ನಿಮಗೆ ತಪ್ಪಾಗಿ ಹಣ ಕಳುಹಿಸಿದ್ದೇವೆ ಎಂದು ಹೇಳಿದರೆ ಪಾವತಿ ಆಪ್‌ನಲ್ಲಿ ಯಾವುದೇ ಬಟನ್ ಒತ್ತಬೇಡಿ. ನಿಮ್ಮ ಅನುಮತಿ ಇಲ್ಲದೆ ಹಣ ನೇರವಾಗಿ ಜಮೆ ಆಗುತ್ತದೆ!"
  };
  const dailyTip = dailyTips[language] || dailyTips.en;

  const welcomeGreetings = {
    en: `Hello, ${userName}! Current streak: ${streak} days. Click on a circle below to start learning!`,
    hi: `नमस्ते, ${userName}! आपकी लगातार पढ़ाई के दिन: ${streak} दिन। सीखने के लिए नीचे दिए गए गोल बटन को दबाएं!`,
    kn: `ನಮಸ್ತೆ, ${userName}! ನಿಮ್ಮ ಸತತ ಕಲಿಕೆಯ ದಿನಗಳು: ${streak} ದಿನಗಳು. ಕಲಿಯಲು ಕೆಳಗಿನ ವೃತ್ತಾಕಾರದ ಬಟನ್ ಒತ್ತಿ!`
  };

  return (
    <div className="app-container">
      <Navbar title={t.mapTitle} />

      <div className="scrollable-content" style={{ padding: '16px' }}>
        
        {/* Welcome Banner */}
        <div className="card card-warm" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '20px' }}>
                {language === 'hi' ? `नमस्ते, ${userName}! 👋` : language === 'kn' ? `ನಮಸ್ತೆ, ${userName}! 👋` : `Hello, ${userName}! 👋`}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-primary-dark)', fontWeight: '600', marginTop: '4px' }}>
                🔥 {t.streakLabel}: {streak}
              </p>
            </div>
            <SpeechSpeaker text={welcomeGreetings[language] || welcomeGreetings.en} />
          </div>
        </div>

        {/* Daily Safety Tip */}
        <div className="card" style={{ borderLeft: '8px solid var(--color-accent)', padding: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '28px' }}>💡</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '16px', color: 'var(--color-accent-dark)' }}>{t.dailyTipHeader}</h3>
              <p style={{ fontSize: '14px', marginTop: '4px', lineHeight: '1.4' }}>{dailyTip}</p>
            </div>
            <SpeechSpeaker text={dailyTip} />
          </div>
        </div>

        <h3 style={{ textAlign: 'center', margin: '20px 0 10px 0', fontFamily: 'Fredoka' }}>{t.learningJourney}</h3>

        {/* Vertical Stepping Stones Map */}
        <div className="level-map-container" style={{ borderRadius: 'var(--border-radius-large)' }}>
          {lessonsData.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isCurrent = completedLessons.length + 1 === lesson.id || (index === 0 && completedLessons.length === 0);
            const isLocked = !isCompleted && !isCurrent;
            const hasNext = index < lessonsData.length - 1;

            let stoneClass = "locked";
            if (isCompleted) stoneClass = "completed";
            else if (isCurrent) stoneClass = "active";

            return (
              <div key={lesson.id} className="stone-wrapper">
                {/* Connecting Line to next level */}
                {hasNext && (
                  <div className={`stone-connector ${completedLessons.includes(lesson.id + 1) || isCompleted ? 'completed' : ''}`} />
                )}

                <button 
                  className={`stone-btn ${stoneClass}`}
                  onClick={() => handleLessonClick(lesson)}
                  aria-label={`${lesson.title[language]}. Status: ${stoneClass}`}
                >
                  {isCompleted ? "✔️" : lesson.icon}
                </button>

                <div className={`stone-label ${isCurrent ? 'active' : ''}`}>
                  <div style={{ fontWeight: '800' }}>{lesson.title[language]}</div>
                  <div style={{ fontSize: '11px', color: 'var(--color-gray-dark)', marginTop: '2px' }}>
                    {isCompleted ? t.completedStatus : isCurrent ? t.tapToStart : t.lockedStatus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <BottomNav activeTab="map" />
    </div>
  );
}
