import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import SpeechSpeaker from '../components/SpeechSpeaker';

export default function Checklists() {
  const { language, playSound, speakText } = useApp();
  const t = translations[language] || translations.en;
  
  // Local state for checking items (persisted to localStorage)
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('safesteps_checkedItems');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('safesteps_checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleToggle = (id, text) => {
    playSound('click');
    setCheckedItems(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      if (updated[id]) {
        speakText(language === 'hi' ? `पूरा हुआ: ${text}` : language === 'kn' ? `ಪೂರ್ಣಗೊಂಡಿದೆ: ${text}` : `Completed: ${text}`);
      }
      return updated;
    });
  };

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  const checklistSections = {
    en: [
      {
        title: "💳 UPI Payment Safety Checklist",
        speakHeader: "U P I Payment Safety Checklist",
        items: [
          { id: "upi_1", text: "Checked receiver name matches the person or shop exactly" },
          { id: "upi_2", text: "Confirmed the payment amount is correct" },
          { id: "upi_3", text: "Reviewed any warning alerts on the screen" },
          { id: "upi_4", text: "Never shared my U P I PIN with anyone" },
          { id: "upi_5", text: "Did not enter PIN to receive money" }
        ]
      },
      {
        title: "💬 WhatsApp Privacy Checklist",
        speakHeader: "WhatsApp Privacy Checklist",
        items: [
          { id: "wa_1", text: "Changed Profile Photo privacy to 'My Contacts'" },
          { id: "wa_2", text: "Blocked and reported unknown international callers" },
          { id: "wa_3", text: "Ignored viral forwarded messages containing links" },
          { id: "wa_4", text: "Set 'Groups' invite privacy to 'My Contacts' only" }
        ]
      },
      {
        title: "🔑 Secure Lock & App Checklist",
        speakHeader: "Secure Lock and App Checklist",
        items: [
          { id: "sec_1", text: "Used a random 4-digit PIN (not 1234 or birth year)" },
          { id: "sec_2", text: "Never shared phone pattern or PIN with strangers" },
          { id: "sec_3", text: "Only downloaded apps from official Google Play or Apple App store" },
          { id: "sec_4", text: "Declined screen-sharing apps like AnyDesk on call" }
        ]
      }
    ],
    hi: [
      {
        title: "💳 सुरक्षित यूपीआई भुगतान चेकलिस्ट",
        speakHeader: "सुरक्षित यूपीआई भुगतान चेकलिस्ट",
        items: [
          { id: "upi_1", text: "जांचा कि दुकानदार या प्राप्तकर्ता का नाम बिल्कुल सही है" },
          { id: "upi_2", text: "पुष्टि की कि भुगतान की जाने वाली राशि सही है" },
          { id: "upi_3", text: "स्क्रीन पर आने वाली किसी भी चेतावनी को पढ़ा" },
          { id: "upi_4", text: "अपना यूपीआई पिन कभी किसी के साथ साझा नहीं किया" },
          { id: "upi_5", text: "पैसे प्राप्त करने के लिए कभी पिन दर्ज नहीं किया" }
        ]
      },
      {
        title: "💬 व्हाट्सएप गोपनीयता चेकलिस्ट",
        speakHeader: "व्हाट्सएप गोपनीयता चेकलिस्ट",
        items: [
          { id: "wa_1", text: "प्रोफ़ाइल फोटो गोपनीयता को 'My Contacts' में बदला" },
          { id: "wa_2", text: "अज्ञात अंतर्राष्ट्रीय कॉल करने वालों को ब्लॉक किया" },
          { id: "wa_3", text: "लिंक वाले फॉरवर्ड किए गए वायरल संदेशों को अनदेखा किया" },
          { id: "wa_4", text: "ग्रुप आमंत्रण गोपनीयता को 'My Contacts' पर सेट किया" }
        ]
      },
      {
        title: "🔑 स्क्रीन लॉक और ऐप सुरक्षा चेकलिस्ट",
        speakHeader: "स्क्रीन लॉक और ऐप सुरक्षा चेकलिस्ट",
        items: [
          { id: "sec_1", text: "यादृच्छिक 4-अंकीय पिन का उपयोग किया (1234 या जन्म वर्ष नहीं)" },
          { id: "sec_2", text: "अजनबियों के साथ फोन का पिन या पैटर्न कभी साझा नहीं किया" },
          { id: "sec_3", text: "केवल आधिकारिक गूगल प्ले स्टोर से ऐप डाउनलोड किए" },
          { id: "sec_4", text: "अजनबियों के कहने पर AnyDesk जैसी ऐप डाउनलोड नहीं की" }
        ]
      }
    ],
    kn: [
      {
        title: "💳 ಯುಪಿಐ ಪಾವತಿ ಸುರಕ್ಷತೆ ಪರಿಶೀಲನೆ",
        speakHeader: "ಯುಪಿಐ ಪಾವತಿ ಸುರಕ್ಷತೆ ಪರಿಶೀಲನೆ",
        items: [
          { id: "upi_1", text: "ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಂಡೆ" },
          { id: "upi_2", text: "ಪಾವತಿ ಮಾಡುವ ಹಣದ ಮೊತ್ತವನ್ನು ಪರಿಶೀಲಿಸಿದೆ" },
          { id: "upi_3", text: "ಸ್ಕ್ರೀನ್ ಮೇಲಿನ ಎಚ್ಚರಿಕೆ ಸೂಚನೆಗಳನ್ನು ಓದಿದೆ" },
          { id: "upi_4", text: "ನನ್ನ ಯುಪಿಐ ಪಿನ್ ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಂಡಿಲ್ಲ" },
          { id: "upi_5", text: "ಹಣ ಪಡೆಯಲು ಎಂದಿಗೂ ಪಿನ್ ದಾಖಲಿಸಿಲ್ಲ" }
        ]
      },
      {
        title: "💬 ವಾಟ್ಸಾಪ್ ಗೌಪ್ಯತೆ ಪರಿಶೀಲನೆ",
        speakHeader: "ವಾಟ್ಸಾಪ್ ಗೌಪ್ಯತೆ ಪರಿಶೀಲನೆ",
        items: [
          { id: "wa_1", text: "ಪ್ರೊಫೈಲ್ ಫೋಟೋ ಗೌಪ್ಯತೆಯನ್ನು 'My Contacts' ಗೆ ಬದಲಾಯಿಸಿದೆ" },
          { id: "wa_2", text: "ಅಪರಿಚಿತ ವಿದೇಶಿ ನಂಬರ್‌ಗಳನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿದೆ" },
          { id: "wa_3", text: "ಫಾರ್ವರ್ಡ್ ಸಂದೇಶಗಳಲ್ಲಿನ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿಲ್ಲ" },
          { id: "wa_4", text: "ಗ್ರೂಪ್ ಇನ್ವಿಟೇಶನ್ ಗೌಪ್ಯತೆಯನ್ನು 'My Contacts' ಗೆ ಹೊಂದಿಸಿದೆ" }
        ]
      },
      {
        title: "🔑 ಲಾಕ್ ಮತ್ತು ಆಪ್ ಸುರಕ್ಷತೆ ಪರಿಶೀಲನೆ",
        speakHeader: "ಲಾಕ್ ಮತ್ತು ಆಪ್ ಸುರಕ್ಷತೆ ಪರಿಶೀಲನೆ",
        items: [
          { id: "sec_1", text: "ಹುಟ್ಟಿದ ವರ್ಷ ಅಥವಾ 1234 ಅಲ್ಲದ ವಿಶಿಷ್ಟ ಪಿನ್ ಬಳಸಿದೆ" },
          { id: "sec_2", text: "ಫೋನ್ ಪ್ಯಾಟರ್ನ್ ಅನ್ನು ರಹಸ್ಯವಾಗಿಟ್ಟಿದ್ದೇನೆ" },
          { id: "sec_3", text: "ಕೇವಲ ಅಧಿಕೃತ ಪ್ಲೇ ಸ್ಟೋರ್‌ನಿಂದ ಮಾತ್ರ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದೆ" },
          { id: "sec_4", text: "ಅಪರಿಚಿತರ ಮಾತಿಗೆ ಮರುಳಾಗಿ ಸ್ಕ್ರೀನ್ ಶೇರ್ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿಲ್ಲ" }
        ]
      }
    ]
  };

  const activeSections = checklistSections[language] || checklistSections.en;

  const headerMsg = {
    en: "Tick these off to secure your real smartphone. Press print to save a paper copy!",
    hi: "अपने असली स्मार्टफोन को सुरक्षित करने के लिए इन्हें टिक करें। कागज की प्रति बचाने के लिए प्रिंट दबाएं!",
    kn: "ನಿಮ್ಮ ಫೋನ್ ಸುರಕ್ಷಿತವಾಗಿಡಲು ಇವುಗಳನ್ನು ಟಿಕ್ ಮಾಡಿ. ಪೇಪರ್ ಪ್ರಿಂಟ್ ಪಡೆಯಲು ಮುದ್ರಣ ಬಟನ್ ಒತ್ತಿ!"
  };

  const printBtnText = {
    en: "🖨️ Print",
    hi: "🖨️ प्रिंट",
    kn: "🖨️ ಪ್ರಿಂಟ್"
  };

  return (
    <div className="app-container">
      <Navbar title={t.checklistsTitle} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Print Action Banner */}
        <div className="card card-warm" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '18px' }}>📝 {language === 'hi' ? 'भौतिक चेकलिस्ट' : language === 'kn' ? 'ಭೌತಿಕ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ' : 'Physical Checklists'}</h2>
            <p style={{ fontSize: '13px', color: 'var(--color-primary-dark)', marginTop: '4px', lineHeight: '1.3' }}>
              {headerMsg[language] || headerMsg.en}
            </p>
          </div>
          <button 
            className="btn-large btn-accent" 
            style={{ minHeight: '44px', width: 'auto', padding: '10px 16px', borderRadius: '12px', color: 'white' }}
            onClick={handlePrint}
          >
            {printBtnText[language] || printBtnText.en}
          </button>
        </div>

        {/* Sections */}
        {activeSections.map((section, idx) => (
          <div key={idx} className="card" style={{ padding: '18px', borderLeft: '6px solid var(--color-primary)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3>{section.title}</h3>
              <SpeechSpeaker text={section.title} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {section.items.map((item) => (
                <label 
                  key={item.id} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    cursor: 'pointer',
                    fontSize: '15px',
                    padding: '6px 0',
                    textAlign: 'left'
                  }}
                >
                  <input 
                    type="checkbox" 
                    checked={!!checkedItems[item.id]} 
                    onChange={() => handleToggle(item.id, item.text)}
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      accentColor: 'var(--color-primary)', 
                      cursor: 'pointer' 
                    }}
                  />
                  <span 
                    style={{ 
                      textDecoration: checkedItems[item.id] ? 'line-through' : 'none',
                      color: checkedItems[item.id] ? 'var(--color-gray-dark)' : 'var(--color-dark)'
                    }}
                  >
                    {item.text}
                  </span>
                </label>
              ))}
            </div>

          </div>
        ))}

      </div>

      <BottomNav activeTab="checklists" />
    </div>
  );
}
