import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import SpeechSpeaker from '../components/SpeechSpeaker';
import { chatbotFAQ, fallbackFAQ } from '../data/lessonsData';
import { translations } from '../data/translations';

export default function Companion() {
  const { language, playSound, speakText, stopSpeaking } = useApp();
  const t = translations[language] || translations.en;

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: t.chatBotWelcome + "\n\n" + t.chatBotDayPrompt,
      time: new Date()
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Read out the first greeting automatically on language change or load
  useEffect(() => {
    const welcome = t.chatBotWelcome + " " + t.chatBotDayPrompt;
    speakText(welcome);
  }, [language]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    playSound('click');
    stopSpeaking();

    // 1. Add User Message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputVal("");

    // 2. Generate Bot Response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let matchedAnswer = "";

      const activeFAQ = chatbotFAQ[language] || chatbotFAQ.en;

      // Look up keywords in localized FAQ
      for (const faq of activeFAQ) {
        const found = faq.keywords.some(keyword => lowerText.includes(keyword));
        if (found) {
          matchedAnswer = faq.answer;
          break;
        }
      }

      // Check for custom conversational queries
      // If user answers about their day
      const dayKeywords = ["good", "well", "fine", "ok", "great", "bad", "tired", "happy", "water", "walk", "खाना", "ठीक", "अच्छा", "पानी", "ಸರಿ", "ಚೆನ್ನಾಗಿದೆ", "ಖುಷಿ", "ನಮಸ್ತೆ"];
      const isConversational = dayKeywords.some(kw => lowerText.includes(kw));

      if (isConversational && !matchedAnswer) {
        const checkinReplies = {
          en: "I am so glad to hear that! Staying active, drinking water, and keeping your mind curious is key to a long, happy life. What else would you like to learn today? You can ask me about safe payments or WhatsApp privacy!",
          hi: "यह सुनकर मुझे बहुत खुशी हुई! सक्रिय रहना, पर्याप्त पानी पीना और मन को खुश रखना स्वस्थ जीवन की कुंजी है। आज आप और क्या सीखना चाहेंगे? आप मुझसे सुरक्षित भुगतान या व्हाट्सएप सुरक्षा के बारे में पूछ सकते हैं!",
          kn: "ಕೇಳಿ ತುಂಬಾ ಸಂತೋಷವಾಯಿತು! ಸಕ್ರಿಯವಾಗಿರುವುದು, ನೀರು ಕುಡಿಯುವುದು ಮತ್ತು ಮನಸ್ಸನ್ನು ಹಸನಾಗಿಡುವುದು ಆರೋಗ್ಯಕರ ಜೀವನದ ರಹಸ್ಯ. ಇಂದು ನೀವು ಬೇರೆ ಏನು ಕಲಿಯಲು ಬಯಸುತ್ತೀರಿ? ಸುರಕ್ಷಿತ ಪಾವತಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಬಗ್ಗೆ ಕೇಳಬಹುದು!"
        };
        matchedAnswer = checkinReplies[language] || checkinReplies.en;
      }

      const botText = matchedAnswer || fallbackFAQ[language] || fallbackFAQ.en;

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botText,
        time: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
      speakText(botText);
    }, 600);
  };

  const handleQuickQuestion = (questionText) => {
    handleSend(questionText);
  };

  const quickQuestions = {
    en: [
      "What is an OTP?",
      "How to make UPI payments safe?",
      "What to do with scam SMS?",
      "How to block on WhatsApp?",
      "Where to download apps?"
    ],
    hi: [
      "OTP क्या होता है?",
      "UPI पेमेंट सुरक्षित कैसे करें?",
      "धोखाधड़ी वाले SMS का क्या करें?",
      "WhatsApp पर कैसे ब्लॉक करें?",
      "सुरक्षित ऐप कहाँ से डाउनलोड करें?"
    ],
    kn: [
      "ಒಟಿಪಿ ಎಂದರೇನು?",
      "ಯುಪಿಐ ಪಾವತಿ ಸುರಕ್ಷಿತ ಮಾಡುವುದು ಹೇಗೆ?",
      "ನಕಲಿ ಸಂದೇಶ ಬಂದರೆ ಏನು ಮಾಡಬೇಕು?",
      "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬ್ಲಾಕ್ ಮಾಡುವುದು ಹೇಗೆ?",
      "ಆಪ್‌ಗಳನ್ನು ಎಲ್ಲಿಂದ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಕು?"
    ]
  };

  const activeQuestions = quickQuestions[language] || quickQuestions.en;

  return (
    <div className="app-container">
      <Navbar title={t.chatTitle} />

      <div className="scrollable-content" style={{ display: 'flex', flexDirection: 'column' }}>
        
        {/* Mascot Row */}
        <div className="companion-mascot-row" style={{ borderColor: 'var(--color-secondary)' }}>
          <div className="mascot-avatar" role="img" aria-label="Mascot avatar">🦉</div>
          <div className="mascot-speech">
            <h3 style={{ fontSize: '15px' }}>{t.chatMascotTitle}</h3>
            <p style={{ fontSize: '13px', color: 'var(--color-gray-dark)', marginTop: '2px', lineHeight: '1.3' }}>
              {t.chatMascotDesc}
            </p>
          </div>
        </div>

        {/* Message feed */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-bubble ${msg.sender}`}>
              <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
              
              {msg.sender === 'bot' && (
                <div className="message-audio-controls">
                  <SpeechSpeaker text={msg.text} />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Topics row */}
        <div style={{ marginTop: '10px' }}>
          <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--color-primary-dark)' }}>{t.chatAskHeader}</span>
          <div className="quick-topics">
            {activeQuestions.map((q, idx) => (
              <button 
                key={idx} 
                className="quick-topic-btn"
                onClick={() => handleQuickQuestion(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Row */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="chat-input-row"
        >
          <input 
            type="text"
            className="chat-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={t.chatInputPlaceholder}
            aria-label="Type your message"
          />
          <button 
            type="submit" 
            className="chat-send-btn"
            title="Send message"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

      </div>

      <BottomNav activeTab="companion" />
    </div>
  );
}
