import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../data/translations';

export default function Navbar({ title }) {
  const { 
    language, 
    setLanguage, 
    fontScale, 
    setFontScale, 
    stars, 
    playSound, 
    stopSpeaking,
    speakText,
    voiceAssistantEnabled,
    setVoiceAssistantEnabled
  } = useApp();
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleFontChange = (change) => {
    playSound('click');
    setFontScale(prev => {
      const next = prev + change;
      return Math.min(Math.max(next, 1.0), 1.8);
    });
  };

  const handleLangChange = (e) => {
    const nextLang = e.target.value;
    playSound('click');
    stopSpeaking();
    setLanguage(nextLang);
    
    // Welcome message in the new language
    const welcomeMsgs = {
      en: "Language set to English.",
      hi: "भाषा बदलकर हिंदी कर दी गई है।",
      kn: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ."
    };
    
    setTimeout(() => {
      speakText(welcomeMsgs[nextLang]);
    }, 150);
  };

  const handleBack = () => {
    playSound('click');
    stopSpeaking();
    if (location.pathname === '/' || location.pathname === '/welcome') {
      // no-op
    } else {
      navigate(-1);
    }
  };

  const handleSos = () => {
    playSound('click');
    stopSpeaking();
    navigate('/sos');
  };

  const handleVoiceToggle = () => {
    playSound('click');
    if (voiceAssistantEnabled) {
      stopSpeaking();
    }
    setVoiceAssistantEnabled(!voiceAssistantEnabled);
  };

  const isHomeOrWelcome = location.pathname === '/' || location.pathname === '/welcome';
  const t = translations[language] || translations.en;

  return (
    <div className="header-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {!isHomeOrWelcome && (
          <button className="header-btn" onClick={handleBack} aria-label="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        )}
        <span 
          className="header-title" 
          style={{ cursor: isHomeOrWelcome ? 'default' : 'pointer' }}
          onClick={() => !isHomeOrWelcome && navigate('/')}
        >
          {title || t.appName}
        </span>
      </div>

      <div className="header-actions" style={{ gap: '8px' }}>
        
        {/* Voice Assistant Toggle */}
        <button
          className="header-btn"
          onClick={handleVoiceToggle}
          aria-label={voiceAssistantEnabled ? 'Disable Voice Assistant' : 'Enable Voice Assistant'}
          title={voiceAssistantEnabled ? 'Voice ON - Tap to turn off' : 'Voice OFF - Tap to turn on'}
          style={{
            backgroundColor: voiceAssistantEnabled ? 'rgba(42, 157, 143, 0.6)' : 'rgba(255, 255, 255, 0.15)',
            width: '36px',
            height: '36px',
            minWidth: '36px',
            minHeight: '36px',
            position: 'relative'
          }}
        >
          {voiceAssistantEnabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>

        {/* Language Picker Dropdown */}
        <select 
          value={language}
          onChange={handleLangChange}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.25)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '10px', 
            padding: '4px 6px', 
            fontWeight: 'bold', 
            outline: 'none',
            fontSize: '13px',
            cursor: 'pointer'
          }}
          aria-label="Select Language"
        >
          <option value="en" style={{ color: 'black' }}>EN</option>
          <option value="hi" style={{ color: 'black' }}>हिंदी</option>
          <option value="kn" style={{ color: 'black' }}>ಕನ್ನಡ</option>
        </select>

        {/* Font size selectors */}
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.12)', borderRadius: '10px', padding: '1px' }}>
          <button 
            className="header-btn" 
            style={{ width: '30px', height: '30px', minWidth: '30px', minHeight: '30px', background: 'none' }}
            onClick={() => handleFontChange(-0.1)}
            aria-label="Decrease text size"
          >
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>A-</span>
          </button>
          <button 
            className="header-btn" 
            style={{ width: '30px', height: '30px', minWidth: '30px', minHeight: '30px', background: 'none' }}
            onClick={() => handleFontChange(0.1)}
            aria-label="Increase text size"
          >
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>A+</span>
          </button>
        </div>

        {/* Emergency SOS Button */}
        <button 
          onClick={handleSos}
          style={{ 
            backgroundColor: '#d63031', 
            color: 'white', 
            border: '2px solid #ff7675', 
            padding: '6px 12px', 
            borderRadius: '14px', 
            fontWeight: '900', 
            fontSize: '13px',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(214, 48, 49, 0.5)',
            fontFamily: 'Fredoka',
            animation: 'pulse-ring-slow 1.5s infinite'
          }}
          title="Emergency SOS Help"
          aria-label="SOS Emergency Help"
        >
          🚨 SOS
        </button>

      </div>
    </div>
  );
}
