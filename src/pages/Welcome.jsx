import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

export default function Welcome() {
  const { 
    language,
    setLanguage,
    userName, 
    setUserName, 
    fontScale, 
    setFontScale, 
    voiceSpeed, 
    setVoiceSpeed, 
    speakText, 
    playSound 
  } = useApp();
  
  const [tempName, setTempName] = useState(userName);
  const [step, setStep] = useState(1); // 1: Language selection, 2: Name and accessibility settings
  const navigate = useNavigate();

  const handleLangSelect = (langCode) => {
    playSound('click');
    setLanguage(langCode);
    setStep(2); // proceed to details
    
    // Greeting depending on selected language
    const greetings = {
      en: "Welcome! Please tell me your name.",
      hi: "स्वागत है! कृपया मुझे अपना नाम बताएं।",
      kn: "ಸ್ವಾಗತ! ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ತಿಳಿಸಿ."
    };
    
    setTimeout(() => {
      speakText(greetings[langCode]);
    }, 150);
  };

  const handleFontSelect = (scale) => {
    setFontScale(scale);
    playSound('click');
  };

  const handleSpeedSelect = (speed) => {
    setVoiceSpeed(speed);
    playSound('click');
    
    const speedTestText = {
      en: "This is my speaking voice speed.",
      hi: "यह मेरी आवाज़ बोलने की गति है।",
      kn: "ಇದು ನನ್ನ ಮಾತನಾಡುವ ಧ್ವನಿಯ ವೇಗ."
    };
    
    setTimeout(() => {
      speakText(speedTestText[language]);
    }, 150);
  };

  const handleStart = () => {
    playSound('click');
    const finalName = tempName.trim() || (language === 'hi' ? "मित्र" : language === 'kn' ? "ಸ್ನೇಹಿತರೇ" : "Friend");
    setUserName(finalName);
    
    const welcomeMsgs = {
      en: `Welcome, ${finalName}! Let's learn how to use your phone safely.`,
      hi: `स्वागत है, ${finalName}! आइए सीखें कि अपने फोन का सुरक्षित रूप से उपयोग कैसे करें।`,
      kn: `ಸ್ವಾಗತ, ${finalName}! ನಿಮ್ಮ ಫೋನ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಬಳಸುವುದು ಹೇಗೆ ಎಂದು ಕಲಿಯೋಣ.`
    };
    
    speakText(welcomeMsgs[language]);
    navigate('/');
  };

  const t = translations[language] || translations.en;

  return (
    <div className="app-container" style={{ paddingBottom: '20px' }}>
      <div className="scrollable-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
        
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <div style={{ fontSize: '70px', animation: 'hover-shake 4s infinite' }}>👵👴</div>
          <h1 style={{ fontFamily: 'Fredoka', color: 'var(--color-primary)', marginTop: '10px' }}>SafeSteps</h1>
          <p style={{ color: 'var(--color-gray-dark)', fontWeight: 'bold' }}>{t.subTitle}</p>
        </div>

        {/* Step 1: Language Picker */}
        {step === 1 && (
          <div className="card" style={{ borderColor: 'var(--color-primary)' }}>
            <h3 style={{ marginBottom: '16px', textAlign: 'center', fontSize: '20px' }}>
              🌐 Select Language / भाषा चुनें / ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                className="btn-large btn-primary"
                onClick={() => handleLangSelect('en')}
                style={{ fontSize: '18px' }}
              >
                English
              </button>
              <button 
                className="btn-large btn-secondary"
                onClick={() => handleLangSelect('hi')}
                style={{ fontSize: '18px' }}
              >
                हिंदी (Hindi)
              </button>
              <button 
                className="btn-large btn-outline"
                onClick={() => handleLangSelect('kn')}
                style={{ fontSize: '18px', borderWidth: '3px' }}
              >
                ಕನ್ನಡ (Kannada)
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Name and Preferences Setup */}
        {step === 2 && (
          <>
            {/* Input Name */}
            <div className="card" style={{ borderColor: 'var(--color-secondary)' }}>
              <h3 style={{ marginBottom: '12px' }}>{t.whatIsName}</h3>
              <input 
                type="text" 
                className="chat-input"
                style={{ width: '100%', border: '3px solid var(--color-secondary)' }}
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder={t.namePlaceholder}
                aria-label="Your name"
              />
            </div>

            {/* Font Size Selector */}
            <div className="card" style={{ borderColor: 'var(--color-secondary)' }}>
              <h3 style={{ marginBottom: '12px' }}>{t.howLargeText}</h3>
              <div className="size-selector">
                <button 
                  className={`size-btn ${fontScale === 1.15 ? 'active' : ''}`}
                  onClick={() => handleFontSelect(1.15)}
                >
                  Aa (Medium)
                </button>
                <button 
                  className={`size-btn ${fontScale === 1.35 ? 'active' : ''}`}
                  onClick={() => handleFontSelect(1.35)}
                >
                  Aa (Large)
                </button>
                <button 
                  className={`size-btn ${fontScale === 1.6 ? 'active' : ''}`}
                  onClick={() => handleFontSelect(1.6)}
                >
                  Aa (Very Large)
                </button>
              </div>
              <p style={{ marginTop: '12px', textAlign: 'center', fontSize: '14px', color: 'var(--color-gray-dark)' }}>
                {t.textPreview}
              </p>
            </div>

            {/* Voice Support Test */}
            <div className="card" style={{ borderColor: 'var(--color-secondary)' }}>
              <h3 style={{ marginBottom: '12px' }}>{t.voiceSpeedLabel}</h3>
              <div className="size-selector">
                <button 
                  className={`size-btn ${voiceSpeed === 0.7 ? 'active' : ''}`}
                  onClick={() => handleSpeedSelect(0.7)}
                >
                  Slow
                </button>
                <button 
                  className={`size-btn ${voiceSpeed === 0.85 ? 'active' : ''}`}
                  onClick={() => handleSpeedSelect(0.85)}
                >
                  Normal
                </button>
                <button 
                  className={`size-btn ${voiceSpeed === 1.05 ? 'active' : ''}`}
                  onClick={() => handleSpeedSelect(1.05)}
                >
                  Faster
                </button>
              </div>
              <button 
                className="btn-large btn-outline" 
                style={{ marginTop: '16px', minHeight: '52px', padding: '10px' }}
                onClick={() => speakText(t.testSpeechText)}
              >
                🔊 {t.testVoiceBtn}
              </button>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn-large btn-outline"
                style={{ flex: 1, minHeight: '60px' }}
                onClick={() => setStep(1)}
              >
                🌐 Language
              </button>
              <button 
                className="btn-large btn-primary" 
                onClick={handleStart}
                style={{ flex: 2, minHeight: '60px' }}
              >
                {t.beginBtn}
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
