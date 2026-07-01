import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import SpeechSpeaker from '../components/SpeechSpeaker';

export default function StoryGame() {
  const { language, completedLessons, setStars, playSound, speakText, stopSpeaking } = useApp();
  const t = translations[language] || translations.en;

  const isUnlocked = completedLessons.length >= 3;

  // Story Stages
  const [currentStage, setCurrentStage] = useState(0); // 0: intro, 1: stage 1, 2: stage 2, 3: stage 3, 4: victory
  const [selectedOption, setSelectedOption] = useState(null); // null, 'A', 'B'
  const [hasChecked, setHasChecked] = useState(false);
  const [score, setScore] = useState(0);

  const storyData = {
    intro: {
      text: {
        en: "Meet Dadi. Today, she is going to use her smartphone for various tasks. Help her make the right choices to protect her safety and complete her digital journey successfully!",
        hi: "मिलिए दादी से। आज वे अपने स्मार्टफोन से कई ज़रूरी काम करने जा रही हैं। उनकी सुरक्षा सुनिश्चित करने और उनकी डिजिटल यात्रा को सफलतापूर्वक पूरा करने में उनकी मदद करें!",
        kn: "ಅಜ್ಜಿಯವರನ್ನು ಭೇಟಿ ಮಾಡಿ. ಇಂದು ಅವರು ತಮ್ಮ ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಮೂಲಕ ವಿವಿಧ ಕೆಲಸಗಳನ್ನು ಮಾಡಲಿದ್ದಾರೆ. ಅವರ ಸುರಕ್ಷತೆಯನ್ನು ಕಾಪಾಡಲು ಮತ್ತು ಡಿಜಿಟಲ್ ಪ್ರಯಾಣವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಸಲು ಅವರಿಗೆ ಸಹಾಯ ಮಾಡಿ!"
      }
    },
    stages: [
      {
        id: 1,
        situation: {
          en: "Stage 1: Dadi receives a WhatsApp message from an unknown number: 'Congratulations! You won a lottery of Rs 1 Lakh! Click this link to claim: http://lakh-lottery-claims.temp'",
          hi: "चरण 1: दादी को एक अनजान नंबर से व्हाट्सएप संदेश मिलता है: 'बधाई हो! आपने 1 लाख रुपये की लॉटरी जीती है! दावा करने के लिए इस लिंक पर क्लिक करें: http://lakh-lottery-claims.temp'",
          kn: "ಹಂತ 1: ಅಜ್ಜಿಯವರಿಗೆ ಅಪರಿಚಿತ ಸಂಖ್ಯೆಯಿಂದ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಬರುತ್ತದೆ: 'ಅಭಿನಂದನೆಗಳು! ನೀವು 1 ಲಕ್ಷ ರೂ ಲಾಟರಿ ಗೆದ್ದಿದ್ದೀರಿ! ಹಣ ಪಡೆಯಲು ಈ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ: http://lakh-lottery-claims.temp'"
        },
        optionA: {
          text: {
            en: "Click the link and fill in personal details to verify if it is true.",
            hi: "लिंक पर क्लिक करें और सच जानने के लिए अपनी व्यक्तिगत जानकारी दर्ज करें।",
            kn: "ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಅದು ನಿಜವೇ ಎಂದು ತಿಳಿಯಲು ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ."
          },
          isCorrect: false,
          feedback: {
            en: "Unsafe! Clicking random links can install viruses or steal your personal bank details. Never believe viral lottery wins.",
            hi: "असुरक्षित! अज्ञात लिंक पर क्लिक करने से वायरस आ सकता है या बैंक की जानकारी चोरी हो सकती है। लॉटरी जीतने वाले दावों पर कभी भरोसा न करें।",
            kn: "ಅಪಾಯಕಾರಿ! ಇಂತಹ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ವೈರಸ್ ಬರಬಹುದು ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳು ಕದಿಯಲ್ಪಡಬಹುದು. ಲಾಟರಿ ನಂಬಬೇಡಿ."
          }
        },
        optionB: {
          text: {
            en: "Ignore the message, delete it, and block the unknown sender.",
            hi: "संदेश को अनदेखा करें, उसे मिटा दें, और भेजने वाले नंबर को ब्लॉक करें।",
            kn: "ಸಂದೇಶವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ, ಅದನ್ನು ಅಳಿಸಿ ಮತ್ತು ಕಳುಹಿಸಿದ ನಂಬರ್ ಅನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿ."
          },
          isCorrect: true,
          feedback: {
            en: "Safe! Blocking and ignoring suspicious numbers stops fraud before it starts. Well done!",
            hi: "सुरक्षित! संदेहास्पद नंबरों को ब्लॉक करने से धोखाधड़ी पहले ही रुक जाती है। बहुत बढ़िया!",
            kn: "ಸುರಕ್ಷಿತ! ಅಪರಿಚಿತ ನಂಬರ್‌ಗಳನ್ನು ಬ್ಲಾಕ್ ಮಾಡುವುದರಿಂದ ವಂಚನೆಯನ್ನು ತಡೆಯಬಹುದು. ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ!"
          }
        }
      },
      {
        id: 2,
        situation: {
          en: "Stage 2: Dadi wants to order fresh tomatoes online. She finds a website offering 90% discount on vegetables, but it asks her to enter her Credit Card number and UPI PIN directly to search.",
          hi: "चरण 2: दादी ऑनलाइन ताज़े टमाटर ऑर्डर करना चाहती हैं। उन्हें एक नई वेबसाइट मिलती है जो सब्जियों पर 90% छूट दे रही है, लेकिन सर्च करने के लिए उनका क्रेडिट कार्ड नंबर और UPI PIN मांग रही है।",
          kn: "ಹಂತ 2: ಅಜ್ಜಿಯವರು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಟೊಮೆಟೊ ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತಾರೆ. ತರಕಾರಿಗಳ ಮೇಲೆ 90% ರಿಯಾಯಿತಿ ನೀಡುವ ವೆಬ್‌ಸೈಟ್ ಸಿಗುತ್ತದೆ, ಆದರೆ ಹುಡುಕಾಟ ಮಾಡಲು ಅವರ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಮತ್ತು ಯುಪಿಐ ಪಿನ್ ಕೇಳುತ್ತದೆ."
        },
        optionA: {
          text: {
            en: "Type her card number and UPI PIN, since 90% discount is a huge saving.",
            hi: "कार्ड नंबर और UPI PIN दर्ज करें, क्योंकि 90% छूट बहुत बड़ी बचत है।",
            kn: "ಕಾರ್ಡ್ ವಿವರ ಮತ್ತು ಯುಪಿಐ ಪಿನ್ ದಾಖಲಿಸಿ ಪಾವತಿಸಿ, ಏಕೆಂದರೆ 90% ರಿಯಾಯಿತಿ ದೊಡ್ಡ ಉಳಿತಾಯ."
          },
          isCorrect: false,
          feedback: {
            en: "Unsafe! Entering your UPI PIN is only for sending money. Unverified sites asking for PIN to search are trying to drain your account.",
            hi: "असुरक्षित! UPI PIN केवल पैसे भेजने के लिए होता है। किसी भी साइट पर सर्च करने के लिए PIN डालना बेहद खतरनाक है, वे आपके खाते को खाली कर सकते हैं।",
            kn: "ಅಪಾಯಕಾರಿ! ಯುಪಿಐ ಪಿನ್ ಕೇವಲ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ಹುಡುಕಾಟ ಮಾಡಲು ಪಿನ್ ಕೇಳುವ ಸೈಟ್‌ಗಳು ವಂಚನೆಯಾಗಿರುತ್ತವೆ."
          }
        },
        optionB: {
          text: {
            en: "Close the site. Use a verified app (like Blinkit or Swiggy) or choose Cash on Delivery.",
            hi: "वेबसाइट बंद करें। हमेशा किसी प्रमाणित ऐप का उपयोग करें या कैश ऑन डिलीवरी चुनें।",
            kn: "ವೆಬ್‌ಸೈಟ್ ಮುಚ್ಚಿ. ಅಧಿಕೃತ ಆಪ್ ಬಳಸಿ ಅಥವಾ ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಆಯ್ಕೆ ಮಾಡಿ."
          },
          isCorrect: true,
          feedback: {
            en: "Safe! Cash on Delivery and verified apps keep your bank details private. Excellent decision!",
            hi: "सुरक्षित! कैश ऑन डिलीवरी और प्रमाणित ऐप्स आपकी बैंक जानकारी सुरक्षित रखते हैं। सही निर्णय!",
            kn: "ಸುರಕ್ಷಿತ! ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಮತ್ತು ಅಧಿಕೃತ ಆಪ್‌ಗಳು ನಿಮ್ಮ ಹಣಕಾಸಿನ ವಿವರಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡುತ್ತವೆ. ಸೂಕ್ತ ನಿರ್ಧಾರ!"
          }
        }
      },
      {
        id: 3,
        situation: {
          en: "Stage 3: A caller claiming to be a Bank Officer tells Dadi: 'Your bank card has a temporary issue. I sent you a 6-digit OTP. Please read it to me immediately to solve the block.'",
          hi: "चरण 3: एक व्यक्ति बैंक अधिकारी बनकर दादी को फोन करता है: 'आपके बैंक कार्ड में तकनीकी खराबी है। मैंने आपके फोन पर 6 अंकों का OTP भेजा है। ब्लॉक हटाने के लिए मुझे तुरंत बताएं।'",
          kn: "ಹಂತ 3: ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿ ಎಂದು ಹೇಳಿಕೊಳ್ಳುವ ವ್ಯಕ್ತಿ ಅಜ್ಜಿಯವರಿಗೆ ಕರೆ ಮಾಡಿ: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಕಾರ್ಡ್ ತಾತ್ಕಾಲಿಕವಾಗಿ ಬ್ಲಾಕ್ ಆಗಿದೆ. ನಿಮ್ಮ ಮೊಬೈಲ್‌ಗೆ ಬಂದಿರುವ 6 ಅಂಕಿಯ ಒಟಿಪಿ ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸಿ' ಎನ್ನುತ್ತಾನೆ."
        },
        optionA: {
          text: {
            en: "Read the OTP code to him so the card does not get blocked.",
            hi: "उसे तुरंत OTP कोड बता दें ताकि कार्ड ब्लॉक न हो।",
            kn: "ಕಾರ್ಡ್ ಬ್ಲಾಕ್ ಆಗದಿರಲು ತಕ್ಷಣ ಒಟಿಪಿ ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸುವರು."
          },
          isCorrect: false,
          feedback: {
            en: "Unsafe! Real banks will NEVER ask for your OTP. Sharing an OTP allows scammers to steal money from your account instantly.",
            hi: "असुरक्षित! असली बैंक कभी भी फोन पर OTP नहीं मांगते। OTP बताने से धोखेबाज आपके खाते से तुरंत पैसे निकाल सकते हैं।",
            kn: "ಅಪಾಯಕಾರಿ! ನಿಜವಾದ ಬ್ಯಾಂಕುಗಳು ಎಂದಿಗೂ ಒಟಿಪಿ ಕೇಳುವುದಿಲ್ಲ. ಒಟಿಪಿ ಹಂಚಿಕೊಂಡರೆ ಖಾತೆಯಿಂದ ತಕ್ಷಣ ಹಣ ಕಳುವಾಗುತ್ತದೆ."
          }
        },
        optionB: {
          text: {
            en: "Refuse to share the OTP, hang up the phone, and call the bank helpline directly.",
            hi: "OTP बताने से मना करें, तुरंत फोन काटें और स्वयं बैंक शाखा से संपर्क करें।",
            kn: "ಒಟಿಪಿ ನೀಡಲು ನಿರಾಕರಿಸಿ, ಫೋನ್ ಕಡಿತಗೊಳಿಸಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ಹೆಲ್ಪ್‌ಲೈನ್‌ಗೆ ಕರೆ ಮಾಡಿ."
          },
          isCorrect: true,
          feedback: {
            en: "Safe! Hanging up on OTP callers is the absolute best way to stay safe. Outstanding work!",
            hi: "सुरक्षित! फोन काटना और अपना OTP गुप्त रखना ही सबसे बड़ी सुरक्षा है। बधाई हो!",
            kn: "ಸುರಕ್ಷಿತ! ಒಟಿಪಿ ಕೇಳುವ ಕರೆಗಳನ್ನು ಕಡಿತಗೊಳಿಸುವುದು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮಾರ್ಗವಾಗಿದೆ. ಅಭಿನಂದನೆಗಳು!"
          }
        }
      }
    ]
  };

  useEffect(() => {
    if (!isUnlocked) return;
    
    // Speak intro/stage texts
    stopSpeaking();
    if (currentStage === 0) {
      speakText(storyData.intro.text[language]);
    } else if (currentStage <= 3) {
      speakText(storyData.stages[currentStage - 1].situation[language]);
    } else if (currentStage === 4) {
      speakText("Story completed! You successfully helped Dadi complete her journey safely. You earned 25 stars!");
    }
  }, [currentStage, language, isUnlocked]);

  if (!isUnlocked) {
    return (
      <div className="app-container">
        <Navbar title={t.storyTitle} />
        <div className="scrollable-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '24px' }}>
          <div style={{ fontSize: '72px', animation: 'hover-shake 3s infinite' }}>🔒🎮</div>
          <h2 style={{ fontFamily: 'Fredoka', color: 'var(--color-primary)', marginTop: '20px' }}>{t.storyHeading}</h2>
          <div className="card card-warm" style={{ marginTop: '20px', padding: '20px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
              {t.storyLockedMessage}
            </p>
          </div>
        </div>
        <BottomNav activeTab="story" />
      </div>
    );
  }

  const handleOptionSelect = (option) => {
    if (hasChecked) return;
    playSound('click');
    setSelectedOption(option);
  };

  const handleCheck = () => {
    if (selectedOption === null || hasChecked) return;
    setHasChecked(true);

    const stage = storyData.stages[currentStage - 1];
    const optionObj = selectedOption === 'A' ? stage.optionA : stage.optionB;

    if (optionObj.isCorrect) {
      playSound('correct');
      setScore(prev => prev + 10);
      speakText(optionObj.feedback[language]);
    } else {
      playSound('incorrect');
      speakText(optionObj.feedback[language]);
    }
  };

  const handleNext = () => {
    playSound('click');
    setHasChecked(false);
    setSelectedOption(null);

    if (currentStage === 0) {
      setCurrentStage(1);
    } else if (currentStage < 3) {
      setCurrentStage(prev => prev + 1);
    } else {
      // Completed all stages!
      setCurrentStage(4);
      setStars(prev => prev + 25);
      playSound('unlock');
    }
  };

  const handleReset = () => {
    playSound('click');
    setCurrentStage(0);
    setScore(0);
    setSelectedOption(null);
    setHasChecked(false);
  };

  const activeStageObj = storyData.stages[currentStage - 1];

  return (
    <div className="app-container">
      <Navbar title={t.storyTitle} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Progress HUD */}
        {currentStage > 0 && currentStage <= 3 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', color: 'var(--color-primary-dark)', fontSize: '14px' }}>
            <span>Stage {currentStage} of 3</span>
            <span>⭐ {score} Pts</span>
          </div>
        )}

        {/* 1. Intro Screen */}
        {currentStage === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '80px', animation: 'hover-shake 4s infinite' }}>👵📱</div>
            <h2 style={{ fontFamily: 'Fredoka' }}>{storyData.intro.text[language] ? t.storyHelpDadiTitle : "Story Simulator"}</h2>
            
            <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
              <p style={{ flex: 1, fontSize: '16px', textAlign: 'left' }}>
                {storyData.intro.text[language]}
              </p>
              <SpeechSpeaker text={storyData.intro.text[language]} />
            </div>

            <button className="btn-large btn-primary" onClick={handleNext}>
              {t.btnStartStory} 🎬
            </button>
          </div>
        )}

        {/* 2. Interactive Stages */}
        {currentStage > 0 && currentStage <= 3 && activeStageObj && (
          <>
            {/* Situation Card */}
            <div className="card card-warm" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
              <p style={{ flex: 1, fontSize: '16px', fontWeight: 'bold' }}>
                {activeStageObj.situation[language]}
              </p>
              <SpeechSpeaker text={activeStageObj.situation[language]} />
            </div>

            {/* Choices list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* Option A */}
              <button 
                className={`choice-btn ${
                  hasChecked 
                    ? activeStageObj.optionA.isCorrect ? 'correct' : selectedOption === 'A' ? 'incorrect' : ''
                    : selectedOption === 'A' ? 'selected' : ''
                }`}
                onClick={() => handleOptionSelect('A')}
                disabled={hasChecked}
                style={{ textAlign: 'left' }}
              >
                <div className="choice-letter">A</div>
                <div style={{ flex: 1 }}>{activeStageObj.optionA.text[language]}</div>
              </button>

              {/* Option B */}
              <button 
                className={`choice-btn ${
                  hasChecked 
                    ? activeStageObj.optionB.isCorrect ? 'correct' : selectedOption === 'B' ? 'incorrect' : ''
                    : selectedOption === 'B' ? 'selected' : ''
                }`}
                onClick={() => handleOptionSelect('B')}
                disabled={hasChecked}
                style={{ textAlign: 'left' }}
              >
                <div className="choice-letter">B</div>
                <div style={{ flex: 1 }}>{activeStageObj.optionB.text[language]}</div>
              </button>

            </div>

            {/* Feedback and Check buttons */}
            {hasChecked ? (
              <div 
                className="card" 
                style={{ 
                  borderColor: (selectedOption === 'A' ? activeStageObj.optionA.isCorrect : activeStageObj.optionB.isCorrect) ? 'var(--color-success)' : 'var(--color-error)',
                  backgroundColor: 'var(--color-white)',
                  padding: '16px'
                }}
              >
                <h3 style={{ 
                  fontSize: '16px', 
                  color: (selectedOption === 'A' ? activeStageObj.optionA.isCorrect : activeStageObj.optionB.isCorrect) ? 'var(--color-success)' : 'var(--color-error)'
                }}>
                  {(selectedOption === 'A' ? activeStageObj.optionA.isCorrect : activeStageObj.optionB.isCorrect) ? "🎉 Correct!" : "❌ Try Again!"}
                </h3>
                
                <p style={{ fontSize: '14px', marginTop: '6px', lineHeight: '1.4' }}>
                  {selectedOption === 'A' ? activeStageObj.optionA.feedback[language] : activeStageObj.optionB.feedback[language]}
                </p>

                {(selectedOption === 'A' ? activeStageObj.optionA.isCorrect : activeStageObj.optionB.isCorrect) ? (
                  <button className="btn-large btn-primary" onClick={handleNext} style={{ marginTop: '16px' }}>
                    {currentStage === 3 ? "Complete Story! 🏁" : "Next Stage ➡️"}
                  </button>
                ) : (
                  <button 
                    className="btn-large btn-outline" 
                    onClick={() => { setHasChecked(false); setSelectedOption(null); }}
                    style={{ marginTop: '16px', borderColor: 'var(--color-error)', color: 'var(--color-error)' }}
                  >
                    Retry Choice 🔄
                  </button>
                )}
              </div>
            ) : (
              <button 
                className="btn-large btn-primary"
                onClick={handleCheck}
                disabled={selectedOption === null}
                style={{ opacity: selectedOption === null ? 0.6 : 1 }}
              >
                Verify Decision ✔️
              </button>
            )}
          </>
        )}

        {/* 3. Victory Screen */}
        {currentStage === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ fontSize: '80px', animation: 'hover-shake 2s infinite' }}>👑🏆👩</div>
            
            <h1 style={{ fontFamily: 'Fredoka', color: 'var(--color-primary)' }}>{t.taskCompletedTitle}</h1>
            <p style={{ fontSize: '16px', color: 'var(--color-gray-dark)' }}>
              You successfully guided Dadi through all mobile phone scam checks!
            </p>

            <div className="card card-warm" style={{ width: '100%', padding: '20px' }}>
              <div style={{ fontSize: '28px' }}>⭐⭐⭐</div>
              <h3 style={{ fontSize: '22px', color: 'var(--color-primary-dark)', marginTop: '6px' }}>+25 Bonus Stars!</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-gray-dark)', marginTop: '4px' }}>
                {t.quizStarsAdded}
              </p>
            </div>

            <button className="btn-large btn-primary" onClick={handleReset} style={{ width: '100%' }}>
              {t.btnResetStory} 🔄
            </button>
          </div>
        )}

      </div>

      <BottomNav activeTab="story" />
    </div>
  );
}
