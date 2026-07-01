import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { lessonsData } from '../data/lessonsData';
import { translations } from '../data/translations';
import Navbar from '../components/Navbar';
import SpeechSpeaker from './SpeechSpeaker';

export default function Simulator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, playSound, speakText, stopSpeaking } = useApp();
  
  const lesson = lessonsData.find(l => l.id === parseInt(id));
  const simData = lesson?.simulator;

  const t = translations[language] || translations.en;

  // General Simulation State
  const [isFinished, setIsFinished] = useState(false);

  // Touch Sandbox State
  const [bubblesTapped, setBubblesTapped] = useState(0);
  const [bubblePos, setBubblePos] = useState({ top: '30%', left: '40%' });

  // Scam Sandbox State
  const [spottedFlags, setSpottedFlags] = useState([]);
  const [activeHint, setActiveHint] = useState("");

  // UPI Payment Sandbox State
  const [paymentStep, setPaymentStep] = useState(1); // 1: verify receiver name, 2: verify amount, 3: read alert, 4: input pin & finish

  // Food Ordering State
  const [foodStep, setFoodStep] = useState(1); // 1: Add Burger, 2: Cart page, 3: Order completed
  const [selectedFoodPayment, setSelectedFoodPayment] = useState(""); // "", "card", "cod"

  // Medicine Ordering State
  const [medStep, setMedStep] = useState(1); // 1: Add Meds, 2: upload prescription, 3: cart page, 4: order completed
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);
  const [selectedMedPayment, setSelectedMedPayment] = useState(""); // "", "card", "cod"

  const simInstruction = simData?.instruction[language] || simData?.instruction.en || "";

  useEffect(() => {
    if (!lesson || !simData) {
      navigate('/');
      return;
    }
    stopSpeaking();
    speakText(`${language === 'hi' ? 'अभ्यास स्क्रीन में आपका स्वागत है! आपका काम है:' : language === 'kn' ? 'ಅಭ್ಯಾಸ ಹಂತಕ್ಕೆ ಸ್ವಾಗತ! ನಿಮ್ಮ ಕೆಲಸ:' : 'Welcome to the Practice Sandbox! Here is your task:'} ${simInstruction}`);
  }, [id, lesson, simData, navigate, language]);

  if (!lesson || !simData) return null;

  const handleTouchBubble = () => {
    playSound('click');
    const nextTaps = bubblesTapped + 1;
    setBubblesTapped(nextTaps);
    
    if (nextTaps >= simData.bubblesCount) {
      setIsFinished(true);
      playSound('unlock');
      
      const touchVictory = {
        en: "Fantastic job! You have completed the touch sandbox. Let's take the quiz to finish this lesson!",
        hi: "बहुत बढ़िया! आपने स्पर्श अभ्यास पूरा कर लिया है। आइए इस पाठ को पूरा करने के लिए क्विज़ लें!",
        kn: "ಅತ್ಯುತ್ತಮ ಕೆಲಸ! ನೀವು ಗಂಟೆಗಳ ಅಭ್ಯಾಸ ಮುಗಿಸಿದ್ದೀರಿ. ಈ ಪಾಠ ಮುಗಿಸಲು ಕ್ವಿಜ್ ತೆಗೆದುಕೊಳ್ಳೋಣ!"
      };
      speakText(touchVictory[language] || touchVictory.en);
    } else {
      const top = Math.floor(Math.random() * 50) + 20;
      const left = Math.floor(Math.random() * 50) + 20;
      setBubblePos({ top: `${top}%`, left: `${left}%` });
      speakText(`${nextTaps}`);
    }
  };

  const handleFlagClick = (flagId, hintObj) => {
    if (spottedFlags.includes(flagId)) return;
    
    playSound('click');
    const updatedFlags = [...spottedFlags, flagId];
    setSpottedFlags(updatedFlags);
    
    const hintText = hintObj[language] || hintObj.en;
    setActiveHint(hintText);
    speakText(hintText);

    if (updatedFlags.length === simData.flags.length) {
      setIsFinished(true);
      playSound('unlock');
      
      const scamVictory = {
        en: "Excellent search! You spotted all the phishing traps. Let's take the quiz now!",
        hi: "उत्कृष्ट खोज! आपने संदेश के सभी खतरों को पहचान लिया। आइए अब क्विज़ लें!",
        kn: "ಅದ್ಭುತ ಶೋಧನೆ! ನೀವು ಸಂದೇಶದಲ್ಲಿದ್ದ ಎಲ್ಲಾ ಅಪಾಯಗಳನ್ನು ಗುರುತಿಸಿದ್ದೀರಿ. ಈಗ ಕ್ವಿಜ್ ತೆಗೆದುಕೊಳ್ಳೋಣ!"
      };
      setTimeout(() => {
        speakText(scamVictory[language] || scamVictory.en);
      }, 5000);
    }
  };

  const handlePaymentStep = (step) => {
    if (paymentStep !== step) return;
    playSound('click');

    if (step === 1) {
      setPaymentStep(2);
      
      const step2Speech = {
        en: "Receiver name verified! Now check the payment amount of Rupees 150. Tap the amount to confirm.",
        hi: "प्राप्तकर्ता का नाम जांच लिया गया है! अब भुगतान राशि 150 रुपये जांचें। इसकी पुष्टि करने के लिए राशि पर टैप करें।",
        kn: "ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು ಖಚಿತವಾಗಿದೆ! ಈಗ ಪಾವತಿ ಮೊತ್ತ 150 ರೂ ಪರಿಶೀಲಿಸಿ. ಖಚಿತಪಡಿಸಲು ಮೊತ್ತದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ."
      };
      speakText(step2Speech[language] || step2Speech.en);
    } else if (step === 2) {
      setPaymentStep(3);
      
      const step3Speech = {
        en: "Amount confirmed! Look at the yellow alert warning box at the bottom. Tap the alert to read and acknowledge the warning.",
        hi: "राशि की पुष्टि हो गई है! नीचे पीले रंग के चेतावनी अलर्ट बॉक्स को देखें। चेतावनी को स्वीकार करने के लिए अलर्ट पर टैप करें।",
        kn: "ಮೊತ್ತ ದೃಢೀಕರಿಸಲಾಗಿದೆ! ಕೆಳಗಿನ ಹಳದಿ ಎಚ್ಚರಿಕೆ ಅಲರ್ಟ್ ಬಾಕ್ಸ್ ನೋಡಿ. ಎಚ್ಚರಿಕೆಯನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಲು ಅಲರ್ಟ್ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ."
      };
      speakText(step3Speech[language] || step3Speech.en);
    } else if (step === 3) {
      setPaymentStep(4);
      
      const step4Speech = {
        en: "Acknowledged! Now tap the green Checkmark button at the bottom right to complete your transaction.",
        hi: "स्वीकार किया गया! अब अपने लेनदेन को पूरा करने के लिए नीचे दाईं ओर हरे सही के निशान वाले बटन को दबाएं।",
        kn: "ತಿಳಿದುಕೊಳ್ಳಲಾಗಿದೆ! ಈಗ ವಹಿವಾಟು ಮುಗಿಸಲು ಕೆಳಗೆ ಬಲಗಡೆ ಇರುವ ಗ್ರೀನ್ ಟಿಕ್ ಬಟನ್ ಒತ್ತಿ."
      };
      speakText(step4Speech[language] || step4Speech.en);
    } else if (step === 4) {
      setIsFinished(true);
      playSound('unlock');
      speakText(t.upiDone);
    }
  };

  const handleFoodStep = (step) => {
    if (foodStep !== step) return;
    playSound('click');

    if (step === 1) {
      setFoodStep(2);
      
      const step2Speech = {
        en: "Veg Burger added to cart! Now tap the green Cart Bar at the bottom to view your basket.",
        hi: "वेज बर्गर कार्ट में जुड़ गया है! अब अपनी टोकरी देखने के लिए नीचे दी गई हरी कार्ट पट्टी को दबाएं।",
        kn: "ವೆಜ್ ಬರ್ಗರ್ ಕಾರ್ಟ್‌ಗೆ ಸೇರಿದೆ! ಈಗ ನಿಮ್ಮ ಕಾರ್ಟ್ ನೋಡಲು ಕೆಳಗಿನ ಗ್ರೀನ್ ಬಾರ್ ಒತ್ತಿ."
      };
      speakText(step2Speech[language] || step2Speech.en);
    }
  };

  const handleFoodPaymentSelect = (method) => {
    playSound('click');
    setSelectedFoodPayment(method);
    if (method === 'cod') {
      const codSpeech = {
        en: "Cash on Delivery selected! This is the safest way for online ordering. Now click the green 'Place Order' button.",
        hi: "कैश ऑन डिलीवरी चुना गया! यह ऑनलाइन ऑर्डर करने का सबसे सुरक्षित तरीका है। अब नीचे 'Place Order' दबाएं।",
        kn: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ! ಇದು ಆನ್‌ಲೈನ್ ಆರ್ಡರ್ ಮಾಡಲು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ದಾರಿ. ಈಗ 'Place Order' ಒತ್ತಿ."
      };
      speakText(codSpeech[language] || codSpeech.en);
    } else {
      const cardSpeech = {
        en: "Online payment selected. Remember, online payment requires you to check amount details. Try selecting Cash on Delivery for absolute safety.",
        hi: "ऑनलाइन पेमेंट चुना गया। याद रखें, ऑनलाइन पेमेंट में बिल राशि दोबारा जांचना जरूरी है। पूर्ण सुरक्षा के लिए कैश ऑन डिलीवरी चुनें।",
        kn: "ಆನ್‌ಲೈನ್ ಪಾವತಿ ಆರಿಸಲಾಗಿದೆ. ನೆನಪಿಡಿ, ಆನ್‌ಲೈನ್ ಪಾವತಿಗೆ ಬಿಲ್ ಪರಿಶೀಲನೆ ಮುಖ್ಯ. ಸುರಕ್ಷತೆಗಾಗಿ ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಆಯ್ಕೆ ಮಾಡಿ."
      };
      speakText(cardSpeech[language] || cardSpeech.en);
    }
  };

  const handlePlaceFoodOrder = () => {
    if (selectedFoodPayment !== 'cod') {
      playSound('incorrect');
      const warningSpeech = {
        en: "For this exercise, please select 'Cash on Delivery' as the safest option before placing your order.",
        hi: "इस अभ्यास के लिए, कृपया ऑर्डर देने से पहले सबसे सुरक्षित विकल्प के रूप में 'कैश ऑन डिलीवरी' चुनें।",
        kn: "ಈ ಅಭ್ಯಾಸಕ್ಕಾಗಿ, ದಯವಿಟ್ಟು ಆರ್ಡರ್ ಮಾಡುವ ಮುನ್ನ ಸುರಕ್ಷಿತ ಪಾವತಿಯಾದ 'ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ' ಆಯ್ಕೆ ಮಾಡಿ."
      };
      speakText(warningSpeech[language] || warningSpeech.en);
      return;
    }

    playSound('unlock');
    setIsFinished(true);
    
    const foodVictory = {
      en: "Food order placed safely using Cash on Delivery! No online payment details were risked. Let's take the quiz now.",
      hi: "कैश ऑन डिलीवरी का उपयोग करके सुरक्षित भोजन ऑर्डर दिया गया! कोई ऑनलाइन धोखाधड़ी का खतरा नहीं रहा। अब क्विज़ लें।",
      kn: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಬಳಸಿ ಸುರಕ್ಷಿತವಾಗಿ ಆಹಾರ ಆರ್ಡರ್ ಪೂರ್ಣಗೊಂಡಿದೆ! ಯಾವುದೇ ವಂಚನೆಯ ಭಯವಿಲ್ಲ. ಈಗ ಕ್ವಿಜ್ ತೆಗೆದುಕೊಳ್ಳಿ."
    };
    speakText(foodVictory[language] || foodVictory.en);
  };

  const handleMedicineStep = (step) => {
    if (medStep !== step) return;
    playSound('click');

    if (step === 1) {
      setMedStep(2);
      
      const step2Speech = {
        en: "Vitamin C tablets added! Because it is a prescription medicine, you must upload a doctor's slip. Click the dotted 'Upload Prescription Slip' box.",
        hi: "विटामिन C दवा जुड़ गई है! क्योंकि यह प्रिस्क्रिप्शन दवा है, आपको डॉक्टर का पर्चा अपलोड करना होगा। 'Upload Prescription Slip' वाले बॉक्स को दबाएं।",
        kn: "ವಿಟಮಿನ್ ಸಿ ಮಾತ್ರೆ ಸೇರಿದೆ! ಇದು ವೈದ್ಯರ ಚೀಟಿ ಅಗತ್ಯವಿರುವ ಔಷಧಿಯಾದ್ದರಿಂದ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಬೇಕು. 'Upload Prescription Slip' ಬಾಕ್ಸ್ ಕ್ಲಿಕ್ ಮಾಡಿ."
      };
      speakText(step2Speech[language] || step2Speech.en);
    } else if (step === 2) {
      setPrescriptionUploaded(true);
      setMedStep(3);
      playSound('correct');
      
      const step3Speech = {
        en: "Doctor's prescription slip uploaded successfully! Now click the green 'Go to Checkout' bar at the bottom.",
        hi: "डॉक्टर का पर्चा सफलतापूर्वक अपलोड हो गया है! अब नीचे 'Go to Checkout' वाली हरी पट्टी को दबाएं।",
        kn: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ! ಈಗ ಕೆಳಗಿರುವ ಗ್ರೀನ್ 'Go to Checkout' ಬಾರ್ ಒತ್ತಿ."
      };
      speakText(step3Speech[language] || step3Speech.en);
    } else if (step === 3) {
      setMedStep(4);
      
      const step4Speech = {
        en: "You are on the Checkout page. Select 'Cash on Delivery' for safe checkout, and then click 'Order Medicine'.",
        hi: "आप चेकआउट पेज पर हैं। सुरक्षित ऑर्डर के लिए 'Cash on Delivery' चुनें, और फिर 'Order Medicine' दबाएं।",
        kn: "ನೀವು ಚೆಕೌಟ್ ಪುಟದಲ್ಲಿದ್ದೀರಿ. ಸುರಕ್ಷಿತವಾಗಿರಲು 'Cash on Delivery' ಆಯ್ಕೆಮಾಡಿ, ನಂತರ 'Order Medicine' ಒತ್ತಿ."
      };
      speakText(step4Speech[language] || step4Speech.en);
    }
  };

  const handleMedPaymentSelect = (method) => {
    playSound('click');
    setSelectedMedPayment(method);
    if (method === 'cod') {
      const codSpeech = {
        en: "Cash on Delivery selected! Now click the green 'Order Medicine' button below.",
        hi: "कैश ऑन डिलीवरी चुना गया! अब नीचे दिए गए हरे 'Order Medicine' बटन को दबाएं।",
        kn: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ! ಈಗ ಕೆಳಗಿನ ಗ್ರೀನ್ 'Order Medicine' ಬಟನ್ ಒತ್ತಿ."
      };
      speakText(codSpeech[language] || codSpeech.en);
    }
  };

  const handlePlaceMedOrder = () => {
    if (selectedMedPayment !== 'cod') {
      playSound('incorrect');
      const warningSpeech = {
        en: "Please select 'Cash on Delivery' for safe medicine purchase before ordering.",
        hi: "कृपया ऑर्डर करने से पहले सुरक्षित दवा खरीद के लिए 'कैश ऑन डिलीवरी' चुनें।",
        kn: "ದಯವಿಟ್ಟು ಸುರಕ್ಷಿತ ಖರೀದಿಗಾಗಿ 'ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ' ಆಯ್ಕೆ ಮಾಡಿ ಆರ್ಡರ್ ಮಾಡಿ."
      };
      speakText(warningSpeech[language] || warningSpeech.en);
      return;
    }

    playSound('unlock');
    setIsFinished(true);
    
    const medVictory = {
      en: "Medicine order completed safely! Your prescription was verified, and Cash on Delivery selected. Let's finish the lesson quiz.",
      hi: "दवा का ऑर्डर सुरक्षित रूप से पूरा हुआ! आपका पर्चा अपलोड हो गया और भुगतान के लिए सीओडी चुना गया। अब क्विज़ लें।",
      kn: "ಔಷಧ ಆರ್ಡರ್ ಸುರಕ್ಷಿತವಾಗಿ ಮುಗಿದಿದೆ! ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ ಮತ್ತು ಸಿಒಡಿ ಆಯ್ಕೆಯಾಗಿದೆ. ಈಗ ಕ್ವಿಜ್ ತೆಗೆದುಕೊಳ್ಳೋಣ."
    };
    speakText(medVictory[language] || medVictory.en);
  };

  const handleNext = () => {
    playSound('click');
    stopSpeaking();
    navigate(`/quiz/${lesson.id}`);
  };

  return (
    <div className="app-container">
      <Navbar title={`${lesson.title[language]} Sandbox`} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Instruction Banner */}
        <div className="card card-warm" style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '28px' }}>🎯</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '16px', color: 'var(--color-primary-dark)' }}>{t.practiceSandbox}</h3>
            <p style={{ fontSize: '14px', marginTop: '4px', lineHeight: '1.4' }}>{simInstruction}</p>
          </div>
          <SpeechSpeaker text={simInstruction} />
        </div>

        {/* Phone screen container */}
        <div className="sandbox-phone-screen">
          <div className="sandbox-phone-statusbar">
            <span>4G LTE</span>
            <span>12:00 PM</span>
            <span>🔋 85%</span>
          </div>

          <div className="sandbox-phone-body">
            
            {/* 1. Touch gestures */}
            {simData.type === 'touch' && !isFinished && (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div 
                  className="sandbox-bubble"
                  style={{ top: bubblePos.top, left: bubblePos.left }}
                  onClick={handleTouchBubble}
                >
                  TAP!
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: 0, right: 0, textAlign: 'center', fontWeight: 'bold', color: 'var(--color-gray-dark)' }}>
                  {t.bubblesTapped}: {bubblesTapped} / {simData.bubblesCount}
                </div>
              </div>
            )}

            {/* 2. Scam SMS */}
            {simData.type === 'scam' && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="sms-header">
                  <div className="sms-sender-avatar">👤</div>
                  <div>
                    <div 
                      className={`sms-highlight-zone ${spottedFlags.includes('sender') ? 'spotted' : ''}`}
                      style={{ fontWeight: 'bold', fontSize: '13px' }}
                      onClick={() => handleFlagClick('sender', simData.flags.find(f => f.id === 'sender').hint)}
                    >
                      {simData.sms.sender} {spottedFlags.includes('sender') ? '✔️' : '❓'}
                    </div>
                    <div style={{ fontSize: '10px', color: '#888' }}>5 mins ago</div>
                  </div>
                </div>

                <div className="sms-bubble">
                  <span 
                    className={`sms-highlight-zone ${spottedFlags.includes('urgency') ? 'spotted' : ''}`}
                    onClick={() => handleFlagClick('urgency', simData.flags.find(f => f.id === 'urgency').hint)}
                  >
                    URGENT NOTICE: Your bank account will be PERMANENTLY CLOSED by tonight {spottedFlags.includes('urgency') ? '✔️' : '❓'}
                  </span>{" "}
                  due to missing updates. Please click here immediately to verify:{" "}
                  <span 
                    className={`sms-highlight-zone ${spottedFlags.includes('link') ? 'spotted' : ''}`}
                    style={{ color: '#0984e3', textDecoration: 'underline' }}
                    onClick={() => handleFlagClick('link', simData.flags.find(f => f.id === 'link').hint)}
                  >
                    {simData.sms.link} {spottedFlags.includes('link') ? '✔️' : '❓'}
                  </span>
                </div>

                {activeHint && (
                  <div style={{ margin: 'auto 16px 16px 16px', padding: '12px', backgroundColor: 'var(--color-card)', border: '2px solid var(--color-accent)', borderRadius: '12px', fontSize: '13px' }}>
                    <strong>💡 Alert Explanations:</strong>
                    <div style={{ marginTop: '4px' }}>{activeHint}</div>
                  </div>
                )}
                
                <div style={{ textAlign: 'center', padding: '10px', fontSize: '12px', color: '#777', fontWeight: 'bold' }}>
                  {t.trapsFound}: {spottedFlags.length} / {simData.flags.length}
                </div>
              </div>
            )}

            {/* 3. Safe UPI Payment */}
            {simData.type === 'payment' && (
              <div style={{ height: '100%', position: 'relative' }}>
                <div className="upi-header">EasyPay UPI Portal</div>
                
                <div className="upi-amount-card">
                  <div className="upi-receiver-label">{t.upiReceiver}:</div>
                  <div 
                    className="upi-receiver-name"
                    style={{ 
                      border: paymentStep === 1 ? '3px dashed var(--color-accent)' : 'none',
                      backgroundColor: paymentStep === 1 ? 'rgba(226, 149, 120, 0.1)' : 'transparent',
                      padding: '4px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                    onClick={() => handlePaymentStep(1)}
                  >
                    🛒 {simData.receiver} {paymentStep > 1 && '✔️'}
                  </div>

                  <div 
                    className="upi-amount"
                    style={{ 
                      border: paymentStep === 2 ? '3px dashed var(--color-accent)' : 'none',
                      backgroundColor: paymentStep === 2 ? 'rgba(226, 149, 120, 0.1)' : 'transparent',
                      padding: '4px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                    onClick={() => handlePaymentStep(2)}
                  >
                    ₹{simData.amount} {paymentStep > 2 && '✔️'}
                  </div>
                </div>

                <div 
                  className="upi-warning-prompt"
                  style={{ 
                    border: paymentStep === 3 ? '3px dashed var(--color-accent)' : '2px solid #FDCB6E',
                    cursor: 'pointer',
                    opacity: paymentStep >= 3 ? 1 : 0.4
                  }}
                  onClick={() => handlePaymentStep(3)}
                >
                  <strong>⚠️ {t.upiAlert}:</strong>
                  <div>{simData.securityAlert} {paymentStep > 3 && '✔️'}</div>
                </div>

                <div className="upi-keypad">
                  <button className="upi-key">1</button>
                  <button className="upi-key">2</button>
                  <button className="upi-key">3</button>
                  <button className="upi-key">4</button>
                  <button className="upi-key">5</button>
                  <button className="upi-key">6</button>
                  <button className="upi-key">7</button>
                  <button className="upi-key">8</button>
                  <button className="upi-key">9</button>
                  <button className="upi-key" style={{ backgroundColor: '#dfe6e9' }}>✕</button>
                  <button className="upi-key">0</button>
                  <button 
                    className="upi-key" 
                    style={{ 
                      backgroundColor: paymentStep === 4 ? 'var(--color-success)' : '#dfe6e9',
                      color: paymentStep === 4 ? 'white' : '#333'
                    }}
                    onClick={() => handlePaymentStep(4)}
                  >
                    ✔️
                  </button>
                </div>
              </div>
            )}

            {/* 4. Food Ordering (Swiggy mock style) */}
            {simData.type === 'food' && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                
                {/* Header Swiggy */}
                <div style={{ backgroundColor: '#FC8019', color: 'white', padding: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>🍔 Swiggy Express</span>
                  <span style={{ fontSize: '12px' }}>📍 Home</span>
                </div>

                {/* Step 1: Restaurant Menu */}
                {foodStep === 1 && (
                  <div style={{ padding: '12px' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold' }}>Burger Junction 🌟 4.2</h4>
                      <p style={{ fontSize: '11px', color: '#666' }}>Burgers, Fast Food</p>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{simData.item}</div>
                          <div style={{ fontSize: '13px', color: '#444' }}>₹{simData.price}</div>
                        </div>
                        <button 
                          onClick={() => handleFoodStep(1)}
                          style={{ 
                            backgroundColor: 'white', 
                            color: '#60B246', 
                            border: '2px solid #60B246', 
                            padding: '6px 16px', 
                            borderRadius: '8px', 
                            fontWeight: 'bold', 
                            cursor: 'pointer' 
                          }}
                        >
                          + ADD
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Cart page */}
                {foodStep === 2 && (
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', paddingBottom: '90px' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#444', marginBottom: '8px' }}>Bill Details</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>{simData.item} x 1</span>
                        <span>₹{simData.price}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '14px', marginTop: '8px', borderTop: '1px solid #eee', paddingTop: '8px' }}>
                        <span>Total Pay</span>
                        <span>₹{simData.price}</span>
                      </div>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#444', marginBottom: '8px' }}>Delivery Address</h4>
                      <p style={{ fontSize: '13px', color: '#555' }}>🏠 123 Senior Citizens Colony, Bengaluru</p>
                    </div>

                    {/* Payment methods */}
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#c92a2a', marginBottom: '8px' }}>Select Safe Payment Method:</h4>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button 
                          onClick={() => handleFoodPaymentSelect('card')}
                          style={{ 
                            padding: '10px', 
                            borderRadius: '8px', 
                            border: selectedFoodPayment === 'card' ? '2.5px solid var(--color-accent)' : '1px solid #ddd',
                            backgroundColor: selectedFoodPayment === 'card' ? 'rgba(226, 149, 120, 0.1)' : 'white',
                            textAlign: 'left',
                            fontWeight: selectedFoodPayment === 'card' ? 'bold' : 'normal',
                            cursor: 'pointer'
                          }}
                        >
                          💳 Pay Online (Card / UPI)
                        </button>
                        
                        <button 
                          onClick={() => handleFoodPaymentSelect('cod')}
                          style={{ 
                            padding: '10px', 
                            borderRadius: '8px', 
                            border: selectedFoodPayment === 'cod' ? '2.5px solid var(--color-success)' : '1px solid #ddd',
                            backgroundColor: selectedFoodPayment === 'cod' ? 'rgba(42, 157, 143, 0.1)' : 'white',
                            textAlign: 'left',
                            fontWeight: selectedFoodPayment === 'cod' ? 'bold' : 'normal',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>💵 Cash on Delivery (COD)</span>
                          {selectedFoodPayment === 'cod' && <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>⭐ SAFE CHOICE</span>}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom cart action row */}
                {foodStep === 1 && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', backgroundColor: 'white', borderTop: '1px solid #ddd', display: 'none' }} />
                )}
                {foodStep === 2 && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', backgroundColor: 'white', borderTop: '2px solid #ddd', display: 'flex', alignItems: 'center', padding: '10px', zIndex: 5 }}>
                    <button 
                      onClick={handlePlaceFoodOrder}
                      style={{ 
                        width: '100%', 
                        height: '50px', 
                        backgroundColor: selectedFoodPayment === 'cod' ? '#60B246' : '#bbb', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        fontWeight: 'bold', 
                        fontSize: '15px',
                        cursor: 'pointer' 
                      }}
                    >
                      Place Order (₹{simData.price}) ➡️
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 5. Medicine Ordering (Netmeds mock style) */}
            {simData.type === 'medicine' && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                
                {/* Header Netmeds */}
                <div style={{ backgroundColor: '#0F8480', color: 'white', padding: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>💊 Netmeds Express</span>
                  <span style={{ fontSize: '12px' }}>🛒 Cart: {medStep > 1 ? "1" : "0"}</span>
                </div>

                {/* Step 1: Add Meds */}
                {medStep === 1 && (
                  <div style={{ padding: '12px' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--color-primary-dark)' }}>{simData.item}</h4>
                      <p style={{ fontSize: '12px', color: '#e74c3c', fontWeight: 'bold', marginTop: '2px' }}>⚠️ Prescription Slip Required</p>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '12px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>₹{simData.price}</span>
                        <button 
                          onClick={() => handleMedicineStep(1)}
                          style={{ 
                            backgroundColor: '#0F8480', 
                            color: 'white', 
                            border: 'none', 
                            padding: '8px 16px', 
                            borderRadius: '8px', 
                            fontWeight: 'bold', 
                            cursor: 'pointer' 
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Upload Prescription */}
                {medStep === 2 && (
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#c92a2a' }}>Prescription Needed</h4>
                      <p style={{ fontSize: '13px', color: '#555', marginTop: '4px' }}>
                        This medicine requires a doctor's signature slip. Click below to mock upload a prescription slip.
                      </p>
                    </div>

                    <div 
                      onClick={() => handleMedicineStep(2)}
                      style={{ 
                        border: '3px dashed var(--color-accent)', 
                        borderRadius: '12px', 
                        padding: '30px 10px', 
                        backgroundColor: prescriptionUploaded ? 'rgba(42, 157, 143, 0.1)' : 'white',
                        color: prescriptionUploaded ? 'var(--color-success)' : 'var(--color-accent)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontWeight: 'bold'
                      }}
                    >
                      {prescriptionUploaded ? "✅ PrescriptionSlip.jpg Uploaded!" : "📁 Click to Upload Doctor's Prescription"}
                    </div>
                  </div>
                )}

                {/* Step 3: Checkout Overview */}
                {medStep === 3 && (
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--color-success)', marginBottom: '4px' }}>✓ Prescription Verified</h4>
                      <p style={{ fontSize: '12px', color: '#555' }}>Your uploaded slip is approved by our online pharmacist.</p>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#444', marginBottom: '4px' }}>Item List</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>{simData.item} x 1</span>
                        <span>₹{simData.price}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleMedicineStep(3)}
                      style={{ 
                        width: '100%', 
                        height: '48px', 
                        backgroundColor: '#0F8480', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer' 
                      }}
                    >
                      Go to Checkout (₹{simData.price}) ➡️
                    </button>
                  </div>
                )}

                {/* Step 4: Checkout page */}
                {medStep === 4 && (
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', paddingBottom: '90px' }}>
                    
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#444', marginBottom: '8px' }}>Delivery Address</h4>
                      <p style={{ fontSize: '13px', color: '#555' }}>🏠 123 Senior Citizens Colony, Bengaluru</p>
                    </div>

                    {/* Payment methods */}
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
                      <h4 style={{ fontWeight: 'bold', color: '#c92a2a', marginBottom: '8px' }}>Select Safe Payment Method:</h4>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button 
                          onClick={() => handleMedPaymentSelect('card')}
                          style={{ 
                            padding: '10px', 
                            borderRadius: '8px', 
                            border: selectedMedPayment === 'card' ? '2.5px solid var(--color-accent)' : '1px solid #ddd',
                            backgroundColor: selectedMedPayment === 'card' ? 'rgba(226, 149, 120, 0.1)' : 'white',
                            textAlign: 'left',
                            fontWeight: selectedMedPayment === 'card' ? 'bold' : 'normal',
                            cursor: 'pointer'
                          }}
                        >
                          💳 Pay Online (Card / UPI)
                        </button>
                        
                        <button 
                          onClick={() => handleMedPaymentSelect('cod')}
                          style={{ 
                            padding: '10px', 
                            borderRadius: '8px', 
                            border: selectedMedPayment === 'cod' ? '2.5px solid var(--color-success)' : '1px solid #ddd',
                            backgroundColor: selectedMedPayment === 'cod' ? 'rgba(42, 157, 143, 0.1)' : 'white',
                            textAlign: 'left',
                            fontWeight: selectedMedPayment === 'cod' ? 'bold' : 'normal',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>💵 Cash on Delivery (COD)</span>
                          {selectedMedPayment === 'cod' && <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>⭐ SAFE CHOICE</span>}
                        </button>
                      </div>
                    </div>

                    {/* Order action button */}
                    <button 
                      onClick={handlePlaceMedOrder}
                      style={{ 
                        width: '100%', 
                        height: '50px', 
                        backgroundColor: selectedMedPayment === 'cod' ? '#0F8480' : '#bbb', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '8px', 
                        fontWeight: 'bold', 
                        fontSize: '15px',
                        cursor: 'pointer',
                        marginTop: '10px'
                      }}
                    >
                      Order Medicine (₹{simData.price})
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Victory overlay screen */}
            {isFinished && (
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, left: 0, right: 0, bottom: 0, 
                  backgroundColor: 'rgba(0, 109, 119, 0.95)', 
                  color: 'white', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '24px',
                  textAlign: 'center',
                  zIndex: 10
                }}
              >
                <div style={{ fontSize: '72px', animation: 'hover-shake 2s infinite' }}>🏆</div>
                <h2 style={{ color: 'white', fontFamily: 'Fredoka', marginTop: '16px' }}>{t.taskCompletedTitle}</h2>
                <p style={{ color: 'var(--color-card)', marginTop: '8px', fontSize: '16px' }}>
                  {t.taskCompletedDesc}
                </p>
                <button 
                  className="btn-large btn-accent" 
                  onClick={handleNext}
                  style={{ marginTop: '24px', color: 'white' }}
                >
                  {t.btnNextQuiz}
                </button>
              </div>
            )}

          </div>
        </div>

        {!isFinished && (
          <p style={{ textAlign: 'center', color: 'var(--color-gray-dark)', fontSize: '13px', fontStyle: 'italic' }}>
            {t.followPrompt}
          </p>
        )}

      </div>
    </div>
  );
}
