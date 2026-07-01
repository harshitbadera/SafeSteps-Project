import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import SpeechSpeaker from '../components/SpeechSpeaker';
import { translations } from '../data/translations';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Profile() {
  const { 
    language,
    setLanguage,
    userName, 
    setUserName, 
    fontScale, 
    setFontScale, 
    voiceSpeed, 
    setVoiceSpeed, 
    stars, 
    badges, 
    streak, 
    familyContact,
    setFamilyContact,
    playSound,
    speakText,
    darkMode,
    setDarkMode,
    voiceAssistantEnabled,
    setVoiceAssistantEnabled,
    setIsAuthenticated
  } = useApp();

  const navigate = useNavigate();
  const [tempName, setTempName] = useState(userName);
  const [tempSos, setTempSos] = useState(familyContact);

  const t = translations[language] || translations.en;

  const handleNameSave = () => {
    playSound('click');
    const final = tempName.trim();
    if (final) {
      setUserName(final);
      const saveSpeech = {
        en: `Your name has been updated to ${final}.`,
        hi: `आपका नाम बदलकर ${final} कर दिया गया है।`,
        kn: `ನಿಮ್ಮ ಹೆಸರನ್ನು ${final} ಗೆ ನವೀಕರಿಸಲಾಗಿದೆ.`
      };
      speakText(saveSpeech[language] || saveSpeech.en);
    }
  };

  const handleSosSave = () => {
    playSound('click');
    const finalSos = tempSos.trim();
    if (finalSos) {
      setFamilyContact(finalSos);
      const sosSpeech = {
        en: `Emergency family contact number updated to ${finalSos}.`,
        hi: `आपातकालीन पारिवारिक संपर्क नंबर बदलकर ${finalSos} कर दिया गया है।`,
        kn: `ತುರ್ತು ಕುಟುಂಬ ಸಂಪರ್ಕ ಸಂಖ್ಯೆಯನ್ನು ${finalSos} ಗೆ ನವೀಕರಿಸಲಾಗಿದೆ.`
      };
      speakText(sosSpeech[language] || sosSpeech.en);
    }
  };

  const handleFontSelect = (scale) => {
    setFontScale(scale);
    playSound('click');
  };

  const handleSpeedSelect = (speed) => {
    setVoiceSpeed(speed);
    playSound('click');
  };

  const handleLangSelect = (nextLang) => {
    playSound('click');
    setLanguage(nextLang);
    const welcomeMsgs = {
      en: "Language set to English.",
      hi: "भाषा बदलकर हिंदी कर दी गई है।",
      kn: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ."
    };
    setTimeout(() => {
      speakText(welcomeMsgs[nextLang]);
    }, 150);
  };

  const handleReset = async () => {
    playSound('incorrect');
    const confirmClear = window.confirm(t.resetConfirm);
    if (confirmClear) {
      localStorage.clear();
      playSound('click');
      try { await signOut(auth); } catch (e) { /* ignore */ }
      setIsAuthenticated(false);
      window.location.href = '#/login';
    }
  };

  const handleLogout = async () => {
    playSound('click');
    try { await signOut(auth); } catch (e) { /* ignore */ }
    setIsAuthenticated(false);
    navigate('/login');
  };

  const allBadgesList = [
    { 
      id: 'Smart Touch Master', 
      icon: '👆', 
      name: { en: 'Smart Touch Master', hi: 'स्मार्ट टच मास्टर', kn: 'ಸ್ಮಾರ್ಟ್ ಟಚ್ ಮಾಸ್ಟರ್' },
      desc: { en: 'Popped all target bubbles in the screen gesture sandbox', hi: 'स्क्रीन टच अभ्यास में सभी बुलबुले फोड़े', kn: 'ಸ್ಕ್ರೀನ್ ಟಚ್ ಅಭ್ಯಾಸದಲ್ಲಿ ಎಲ್ಲಾ ಗುಳ್ಳೆಗಳನ್ನು ಒಡೆದಿದ್ದಾರೆ' }
    },
    { 
      id: 'Scam Spotter', 
      icon: '🔍', 
      name: { en: 'Scam Spotter', hi: 'स्कैम स्पॉटर', kn: 'ಸ್ಕ್ಯಾಮ್ ಸ್ಪಾಟರ್' },
      desc: { en: 'Identified all red flag phishing SMS traps', hi: 'धोखाधड़ी वाले SMS में सभी खतरों को खोजा', kn: 'ನಕಲಿ ಸಂದೇಶದಲ್ಲಿನ ಎಲ್ಲಾ ಅಪಾಯಗಳನ್ನು ಪತ್ತೆ ಹಚ್ಚಿದ್ದಾರೆ' }
    },
    { 
      id: 'UPI Safe Payer', 
      icon: '💳', 
      name: { en: 'UPI Safe Payer', hi: 'यूपीआई सेफ़ पेयर', kn: 'ಯುಪಿಐ ಸೇಫ್ ಪೇಯರ್' },
      desc: { en: 'Safely executed the mock UPI transaction', hi: 'प्रमाणित भुगतान अभ्यास को सुरक्षित पूरा किया', kn: 'ಯುಪಿಐ ಪಾವತಿ ಅಭ್ಯಾಸವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಸಿದ್ದಾರೆ' }
    },
    { 
      id: 'Smart Food Orderer', 
      icon: '🍔', 
      name: { en: 'Smart Food Orderer', hi: 'स्मार्ट फूड ऑर्डर्डर', kn: 'ಸ್ಮಾರ್ಟ್ ಫುಡ್ ಆರ್ಡರರ್' },
      desc: { en: 'Successfully completed the online food ordering sandbox', hi: 'ऑनलाइन खाना ऑर्डर करने का अभ्यास पूरा किया', kn: 'ಆನ್‌ಲೈನ್ ಆಹಾರ ಆರ್ಡರ್ ಅಭ್ಯಾಸ ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಸಿದ್ದಾರೆ' }
    },
    { 
      id: 'Safe Medicine Buyer', 
      icon: '💊', 
      name: { en: 'Safe Medicine Buyer', hi: 'सेफ़ मेडिसिन बायर', kn: 'ಸೇಫ್ ಮೆಡಿಸಿನ್ ಬೈಯರ್' },
      desc: { en: 'Safely completed online medicine order and uploaded prescription', hi: 'प्रिस्क्रिप्शन अपलोड करके सुरक्षित दवा मंगाना सीखा', kn: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಔಷಧ ಆರ್ಡರ್ ಪೂರ್ಣಗೊಳಿಸಿದ್ದಾರೆ' }
    },
    { 
      id: 'App Security Expert', 
      icon: '🔑', 
      name: { en: 'App Security Expert', hi: 'ऐप सुरक्षा विशेषज्ञ', kn: 'ಆಪ್ ಭದ್ರತಾ ತಜ್ಞ' },
      desc: { en: 'Learnt to create strong passwords and download secure apps', hi: 'सुरक्षित पासवर्ड बनाना और ऐप डाउनलोड करना सीखा', kn: 'ಸುರಕ್ಷಿತ ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಕಲಿತಿದ್ದಾರೆ' }
    },
    { 
      id: 'Digital Safety Champion', 
      icon: '🏆', 
      name: { en: 'Digital Safety Champion', hi: 'डिजिटल सुरक्षा चैंपियन', kn: 'ಡಿಜಿಟಲ್ ಸುರಕ್ಷತಾ ಚಾಂಪಿಯನ್' },
      desc: { en: 'Completed the ultimate WhatsApp privacy training', hi: 'व्हाट्सएप सुरक्षा और गोपनीयता का पाठ पूरा किया', kn: 'ವಾಟ್ಸಾಪ್ ಸುರಕ್ಷತೆ ಮತ್ತು ಗೌಪ್ಯತೆಯ ಕೊನೆಯ ಪಾಠ ಮುಗಿಸಿದ್ದಾರೆ' }
    }
  ];

  const profileSpeechText = {
    en: `Profile page. Username is ${userName}. Streak is ${streak} days. Stars count is ${stars}.`,
    hi: `प्रोफ़ाइल पेज। उपयोगकर्ता का नाम ${userName} है। लगातार पढ़ाई के ${streak} दिन हुए हैं। कुल तारे ${stars} हैं।`,
    kn: `ಪ್ರೊಫೈಲ್ ಪುಟ. ಬಳಕೆದಾರರ ಹೆಸರು ${userName}. ಕಲಿಕೆಯ ಸತತ ದಿನಗಳು ${streak}. ಒಟ್ಟು ನಕ್ಷತ್ರಗಳು ${stars}.`
  };

  const nameLabel = { en: "👤 Profile Settings", hi: "👤 प्रोफ़ाइल सेटिंग्स", kn: "👤 ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್ಸ್" };
  const sosLabel = { en: "👨‍👩‍👧‍👦 Family Emergency Contact (SOS)", hi: "👨‍👩‍👧‍👦 आपातकालीन परिवार संपर्क (SOS)", kn: "👨‍👩‍👧‍👦 ತುರ್ತು ಕುಟುಂಬ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ (SOS)" };
  const badgesLabel = { en: "🏆 Unlocked Medals", hi: "🏆 आपके जीते हुए मेडल", kn: "🏆 ನಿಮ್ಮ ಪದಕಗಳು" };
  const settingsLabel = { en: "⚙️ Audio & Display Settings", hi: "⚙️ आवाज और डिस्प्ले सेटिंग्स", kn: "⚙️ ಧ್ವನಿ ಮತ್ತು ಪ್ರದರ್ಶನ ಸೆಟ್ಟಿಂಗ್ಸ್" };
  
  const fontLabels = {
    en: { m: "Medium", l: "Large", xl: "Very Large" },
    hi: { m: "मध्यम", l: "बड़ा", xl: "बहुत बड़ा" },
    kn: { m: "ಮಧ್ಯಮ", l: "ದೊಡ್ಡದು", xl: "ಅತಿ ದೊಡ್ಡದು" }
  };
  
  const speedLabels = {
    en: { s: "Slow", n: "Normal", f: "Faster" },
    hi: { s: "धीमी", n: "सामान्य", f: "तेज़" },
    kn: { s: "ನಿಧಾನ", n: "ಸಾಮಾನ್ಯ", f: "ವೇಗ" }
  };

  const fl = fontLabels[language] || fontLabels.en;
  const sl = speedLabels[language] || speedLabels.en;

  return (
    <div className="app-container">
      <Navbar title={t.profileTitle} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Profile Stats Card */}
        <div className="card card-warm" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{nameLabel[language]}</h2>
            <SpeechSpeaker text={profileSpeechText[language] || profileSpeechText.en} />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <input 
              type="text" 
              className="chat-input"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Your name..."
              style={{ border: '3px solid var(--color-secondary)' }}
              aria-label="Edit name"
            />
            <button 
              className="btn-large btn-primary"
              style={{ minHeight: '56px', width: 'auto', padding: '0 20px', borderRadius: '12px' }}
              onClick={handleNameSave}
            >
              {t.saveBtn}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '12px' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '28px' }}>⭐</div>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{stars}</div>
              <div style={{ fontSize: '12px', color: 'var(--color-gray-dark)' }}>{t.starsLabel}</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(0,0,0,0.1)', height: '40px', margin: 'auto 0' }} />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '28px' }}>🔥</div>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{streak}</div>
              <div style={{ fontSize: '12px', color: 'var(--color-gray-dark)' }}>{t.streakLabel}</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(0,0,0,0.1)', height: '40px', margin: 'auto 0' }} />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '28px' }}>🏅</div>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{badges.length}</div>
              <div style={{ fontSize: '12px', color: 'var(--color-gray-dark)' }}>{language === 'hi' ? 'मेडल' : language === 'kn' ? 'ಪದಕಗಳು' : 'Badges'}</div>
            </div>
          </div>
        </div>

        {/* SOS Contact Setter Card */}
        <div className="card" style={{ borderColor: '#ffa8a8' }}>
          <h3 style={{ fontSize: '16px', color: '#c92a2a', marginBottom: '10px' }}>{sosLabel[language]}</h3>
          <p style={{ fontSize: '13px', color: 'var(--color-gray-dark)', marginBottom: '10px', textAlign: 'left' }}>
            {language === 'hi' 
              ? "SOS अलार्म चालू करने पर इस नंबर पर कॉल जाएगा (जैसे आपके पुत्र/पुत्री का नंबर)" 
              : language === 'kn' 
              ? "SOS ಒತ್ತಿದಾಗ ಈ ನಂಬರ್‌ಗೆ ತುರ್ತು ಕರೆ ಹೋಗುತ್ತದೆ (ನಿಮ್ಮ ಮಕ್ಕಳ ಸಂಖ್ಯೆ ಹಾಕಿ)" 
              : "This number is dialed when triggering the SOS screen (e.g. your child's number)."}
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="tel" 
              className="chat-input"
              value={tempSos}
              onChange={(e) => setTempSos(e.target.value)}
              placeholder="Emergency Contact Number..."
              style={{ border: '3px solid #ffc9c9', flex: 1 }}
              aria-label="Edit emergency contact"
            />
            <button 
              className="btn-large btn-primary"
              style={{ minHeight: '56px', width: 'auto', padding: '0 20px', borderRadius: '12px', backgroundColor: '#e03131', borderColor: '#c92a2a' }}
              onClick={handleSosSave}
            >
              {t.saveBtn}
            </button>
          </div>
        </div>

        {/* 🌐 New Switch Language Card inside Profile */}
        <div className="card" style={{ padding: '18px' }}>
          <h3 style={{ marginBottom: '14px', textAlign: 'left' }}>{t.selectLanguageLabel}</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className={`size-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLangSelect('en')}
              style={{ minHeight: '54px' }}
            >
              English
            </button>
            <button 
              className={`size-btn ${language === 'hi' ? 'active' : ''}`}
              onClick={() => handleLangSelect('hi')}
              style={{ minHeight: '54px' }}
            >
              हिंदी (Hindi)
            </button>
            <button 
              className={`size-btn ${language === 'kn' ? 'active' : ''}`}
              onClick={() => handleLangSelect('kn')}
              style={{ minHeight: '54px' }}
            >
              ಕನ್ನಡ (Kannada)
            </button>
          </div>
        </div>

        {/* 🌙 New Dark Mode Switch Card inside Profile */}
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px' }}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '17px' }}>{t.darkModeLabel}</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-gray-dark)', marginTop: '2px' }}>{t.darkModeDesc}</p>
          </div>
          <button 
            onClick={() => { playSound('click'); setDarkMode(!darkMode); }}
            style={{ 
              width: '80px', 
              height: '42px', 
              borderRadius: '21px', 
              backgroundColor: darkMode ? 'var(--color-success)' : 'var(--color-gray-light)',
              border: 'none',
              position: 'relative',
              cursor: 'pointer',
              transition: 'var(--transition)',
              flexShrink: 0
            }}
            aria-label="Toggle Dark Mode"
          >
            <div style={{ 
              width: '34px', 
              height: '34px', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              position: 'absolute', 
              top: '4px', 
              left: darkMode ? '42px' : '4px',
              transition: 'var(--transition)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }} />
          </button>
        </div>

        {/* Badges Display */}
        <div className="card" style={{ padding: '18px' }}>
          <h3 style={{ marginBottom: '14px' }}>{badgesLabel[language]}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {allBadgesList.map((b) => {
              const isUnlocked = badges.includes(b.id);
              const bName = b.name[language] || b.name.en;
              const bDesc = b.desc[language] || b.desc.en;

              return (
                <div 
                  key={b.id} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '14px', 
                    opacity: isUnlocked ? 1 : 0.45,
                    padding: '10px',
                    borderRadius: '12px',
                    border: '2px solid',
                    borderColor: isUnlocked ? 'var(--color-secondary)' : 'var(--color-gray-light)',
                    backgroundColor: isUnlocked ? 'var(--color-white)' : 'rgba(0,0,0,0.02)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ 
                    fontSize: '30px', 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    backgroundColor: isUnlocked ? 'var(--color-secondary)' : 'var(--color-gray-light)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isUnlocked ? b.icon : '🔒'}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: isUnlocked ? 'var(--color-primary-dark)' : 'var(--color-gray-dark)', fontSize: '15px' }}>
                      {bName}
                    </h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-gray-dark)', marginTop: '2px', lineHeight: '1.3' }}>
                      {bDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accessibility settings */}
        <div className="card" style={{ padding: '18px' }}>
          <h3 style={{ marginBottom: '14px' }}>{settingsLabel[language]}</h3>
          
          <div className="settings-group">
            <label className="settings-label" style={{ fontSize: '14px' }}>
              {language === 'hi' ? 'लिखावट का आकार' : language === 'kn' ? 'ಅಕ್ಷರಗಳ ಗಾತ್ರ' : 'Text Sizing scale'}
            </label>
            <div className="size-selector">
              <button className={`size-btn ${fontScale === 1.15 ? 'active' : ''}`} onClick={() => handleFontSelect(1.15)}>{fl.m}</button>
              <button className={`size-btn ${fontScale === 1.35 ? 'active' : ''}`} onClick={() => handleFontSelect(1.35)}>{fl.l}</button>
              <button className={`size-btn ${fontScale === 1.6 ? 'active' : ''}`} onClick={() => handleFontSelect(1.6)}>{fl.xl}</button>
            </div>
          </div>

          <div className="settings-group" style={{ marginBottom: 0 }}>
            <label className="settings-label" style={{ fontSize: '14px' }}>
              {language === 'hi' ? 'आवाज़ की गति' : language === 'kn' ? 'ಧ್ವನಿ ವೇಗ' : 'Narrator voice speed'}
            </label>
            <div className="size-selector">
              <button className={`size-btn ${voiceSpeed === 0.7 ? 'active' : ''}`} onClick={() => handleSpeedSelect(0.7)}>{sl.s}</button>
              <button className={`size-btn ${voiceSpeed === 0.85 ? 'active' : ''}`} onClick={() => handleSpeedSelect(0.85)}>{sl.n}</button>
              <button className={`size-btn ${voiceSpeed === 1.05 ? 'active' : ''}`} onClick={() => handleSpeedSelect(1.05)}>{sl.f}</button>
            </div>
          </div>
        </div>

        {/* Voice Assistant Toggle */}
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px' }}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '17px' }}>🔊 {language === 'hi' ? 'वॉइस सहायक' : language === 'kn' ? 'ಧ್ವನಿ ಸಹಾಯಕ' : 'Voice Assistant'}</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-gray-dark)', marginTop: '2px' }}>
              {language === 'hi' ? 'सुनने के लिए बटन चालू करें' : language === 'kn' ? 'ಕೇಳಲು ಈ ಸ್ವಿಚ್ ಆನ್ ಮಾಡಿ' : 'Toggle on to enable read-aloud & speech'}
            </p>
          </div>
          <button 
            onClick={() => { playSound('click'); setVoiceAssistantEnabled(!voiceAssistantEnabled); }}
            style={{ 
              width: '80px', 
              height: '42px', 
              borderRadius: '21px', 
              backgroundColor: voiceAssistantEnabled ? 'var(--color-success)' : 'var(--color-gray-light)',
              border: 'none',
              position: 'relative',
              cursor: 'pointer',
              transition: 'var(--transition)',
              flexShrink: 0
            }}
            aria-label="Toggle Voice Assistant"
          >
            <div style={{ 
              width: '34px', 
              height: '34px', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              position: 'absolute', 
              top: '4px', 
              left: voiceAssistantEnabled ? '42px' : '4px',
              transition: 'var(--transition)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }} />
          </button>
        </div>

        {/* Reset */}
        <button 
          className="btn-large btn-outline" 
          style={{ borderColor: 'var(--color-error)', color: 'var(--color-error)', minHeight: '52px', padding: '10px' }}
          onClick={handleReset}
        >
          {t.resetBtn}
        </button>

        {/* Logout */}
        <button 
          className="btn-large btn-accent"
          style={{ minHeight: '52px', padding: '10px', marginBottom: '10px' }}
          onClick={handleLogout}
        >
          {language === 'hi' ? '🚪 लॉगआउट करें' : language === 'kn' ? '🚪 ಲಾಗ್ ಔಟ್' : '🚪 Logout'}
        </button>

      </div>

      <BottomNav activeTab="profile" />
    </div>
  );
}
