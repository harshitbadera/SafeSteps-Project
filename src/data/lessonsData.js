export const lessonsData = [
  {
    id: 1,
    title: {
      en: "1. Touch & Screen Basics",
      hi: "1. स्क्रीन स्पर्श और जेस्चर",
      kn: "1. ಸ್ಕ್ರೀನ್ ಸ್ಪರ್ಶ ಮತ್ತು ಜೆಸ್ಚರ್ಸ್"
    },
    description: {
      en: "Learn how to tap, hold, and scroll safely.",
      hi: "स्क्रीन को सुरक्षित रूप से टैप, होल्ड और स्क्रॉल करना सीखें।",
      kn: "ಸ್ಕ್ರೀನ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಟ್ಯಾಪ್, ಹೋಲ್ಡ್ ಮತ್ತು ಸ್ಕ್ರಾಲ್ ಮಾಡುವುದನ್ನು ಕಲಿಯಿರಿ."
    },
    icon: "👆",
    badge: {
      en: "Smart Touch Master",
      hi: "स्मार्ट टच मास्टर",
      kn: "ಸ್ಮಾರ್ಟ್ ಟಚ್ ಮಾಸ್ಟರ್"
    },
    slides: [
      {
        title: { en: "Hello, Friend!", hi: "नमस्ते, मित्र!", kn: "ನಮಸ್ತೆ, ಸ್ನೇಹಿತರೇ!" },
        text: { 
          en: "Your phone screen is smart. It registers when you touch it gently. You do not need to press hard! A soft tap is all it takes.",
          hi: "आपके फोन की स्क्रीन बहुत समझदार है। यह आपके हल्के स्पर्श को भी महसूस कर लेती है। आपको जोर से दबाने की जरूरत नहीं है!",
          kn: "ನಿಮ್ಮ ಫೋನ್ ಸ್ಕ್ರೀನ್ ತುಂಬಾ ಸ್ಮಾರ್ಟ್ ಆಗಿದೆ. ನೀವು ಅದನ್ನು ಮೃದುವಾಗಿ ಸ್ಪರ್ಶಿಸಿದಾಗ ಅದು ಗ್ರಹಿಸುತ್ತದೆ. ನೀವು ಜೋರಾಗಿ ಒತ್ತುವ ಅಗತ್ಯವಿಲ್ಲ!"
        },
        illustration: "👇"
      },
      {
        title: { en: "Tapping vs. Long Pressing", hi: "टैप बनाम लॉन्ग प्रेस", kn: "ಟ್ಯಾಪ್ ಮತ್ತು ಲಾಂಗ್ ಪ್ರೆಸ್" },
        text: {
          en: "A simple 'Tap' is like clicking a button quickly. A 'Long Press' (holding your finger down for 2 seconds) often opens extra options, like copying text or deleting messages.",
          hi: "एक साधारण 'टैप' का मतलब है बटन को तुरंत दबाकर उंगली उठाना। 'लॉन्ग प्रेस' (2 सेकंड तक उंगली दबाए रखना) अक्सर कॉपी या डिलीट करने जैसे अतिरिक्त विकल्प खोलता है।",
          kn: "ಒಂದು ಸಣ್ಣ 'ಟ್ಯಾಪ್' ಬಟನ್ ಅನ್ನು ತಕ್ಷಣ ಒತ್ತುವ ಹಾಗೆ. 'ಲಾಂಗ್ ಪ್ರೆಸ್' (2 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಬೆರಳನ್ನು ಒತ್ತಿ ಹಿಡಿಯುವುದು) ಹೆಚ್ಚುವರಿ ಆಯ್ಕೆಗಳನ್ನು ತೆರೆಯುತ್ತದೆ, ಉದಾಹರಣೆಗೆ ಕಾಪಿ ಮಾಡಲು ಅಥವಾ ಸಂದೇಶ ಅಳಿಸಲು."
        },
        illustration: "⏱️"
      },
      {
        title: { en: "Scrolling the Page", hi: "पेज को स्क्रॉल करना", kn: "ಸ್ಕ್ರಾಲ್ ಮಾಡುವುದು" },
        text: {
          en: "To see things that are lower on the screen, place your finger at the bottom and slide it upwards gently. This is called 'Scrolling'. Try it with light swipes!",
          hi: "स्क्रीन पर नीचे छिपी चीजों को देखने के लिए, अपनी उंगली को नीचे रखकर धीरे से ऊपर की ओर खिसकाएं। इसे 'स्क्रॉल करना' कहते हैं।",
          kn: "ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ ಕೆಳಗಿರುವ ವಿಷಯಗಳನ್ನು ನೋಡಲು, ನಿಮ್ಮ ಬೆರಳನ್ನು ಕೆಳಗಿಟ್ಟು ಮೃದುವಾಗಿ ಮೇಲಕ್ಕೆ ಸರಿಸಿ. ಇದನ್ನು 'ಸ್ಕ್ರಾಲ್ ಮಾಡುವುದು' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ."
        },
        illustration: "📜"
      }
    ],
    simulator: {
      type: "touch",
      instruction: {
        en: "Practice gentle tapping! Tap all 5 floating green bubbles as they appear to clear this sandbox.",
        hi: "हल्के से टैप करने का अभ्यास करें! इस स्क्रीन को पूरा करने के लिए सामने आने वाले सभी 5 हरे बुलबुलों को छुएं।",
        kn: "ಮೃದುವಾಗಿ ಟ್ಯಾಪ್ ಮಾಡಲು ಅಭ್ಯಾಸ ಮಾಡಿ! ಈ ಹಂತವನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಕಾಣಿಸಿಕೊಳ್ಳುವ ಎಲ್ಲಾ 5 ಹಸಿರು ಗುಳ್ಳೆಗಳನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ."
      },
      bubblesCount: 5
    },
    quiz: [
      {
        question: {
          en: "When you want to open an application or click a button, what should you do?",
          hi: "जब आप कोई ऐप खोलना चाहते हैं या बटन दबाना चाहते हैं, तो आपको क्या करना चाहिए?",
          kn: "ನೀವು ಯಾವುದೇ ಆಪ್ ಅನ್ನು ತೆರೆಯಲು ಅಥವಾ ಬಟನ್ ಒತ್ತಲು ಬಯಸಿದರೆ, ನೀವು ಏನು ಮಾಡಬೇಕು?"
        },
        choices: [
          { 
            text: { en: "Press the screen as hard as possible", hi: "स्क्रीन को जितना हो सके जोर से दबाएं", kn: "ಸ್ಕ್ರೀನ್ ಅನ್ನು ಸಾಧ್ಯವಾದಷ್ಟು ಜೋರಾಗಿ ಒತ್ತಿ" }, 
            isCorrect: false 
          },
          { 
            text: { en: "Tap the icon gently and lift your finger immediately", hi: "आइकन पर हल्के से टैप करें और अपनी उंगली तुरंत उठा लें", kn: "ಐಕಾನ್ ಮೇಲೆ ಮೃದುವಾಗಿ ಟ್ಯಾಪ್ ಮಾಡಿ ಮತ್ತು ತಕ್ಷಣ ಬೆರಳನ್ನು ಮೇಲಕ್ಕೆತ್ತಿ" }, 
            isCorrect: true 
          },
          { 
            text: { en: "Hold your finger on the screen for 10 seconds", hi: "स्क्रीन पर अपनी उंगली 10 सेकंड तक दबाए रखें", kn: "ಸ್ಕ್ರೀನ್ ಮೇಲೆ ನಿಮ್ಮ ಬೆರಳನ್ನು 10 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಒತ್ತಿ ಹಿಡಿಯಿರಿ" }, 
            isCorrect: false 
          }
        ],
        explanation: {
          en: "Gently tapping the screen is all your smartphone needs. Pressing too hard might damage the screen.",
          hi: "स्क्रीन पर हल्का सा स्पर्श ही काफी है। बहुत ज़ोर से दबाने पर स्क्रीन खराब हो सकती है।",
          kn: "ಸ್ಕ್ರೀನ್ ಮೇಲೆ ಮೃದುವಾದ ಸ್ಪರ್ಶ ಸಾಕು. ಜೋರಾಗಿ ಒತ್ತುವುದರಿಂದ ಸ್ಕ್ರೀನ್ ಹಾಳಾಗಬಹುದು."
        }
      },
      {
        question: {
          en: "If you want to view more content that is hidden below the screen, what gesture should you do?",
          hi: "यदि आप स्क्रीन के नीचे छिपी हुई और जानकारी देखना चाहते हैं, तो आपको क्या करना चाहिए?",
          kn: "ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ ಕೆಳಗಿರುವ ಹೆಚ್ಚಿನ ಮಾಹಿತಿಯನ್ನು ನೋಡಲು ನೀವು ಏನು ಮಾಡಬೇಕು?"
        },
        choices: [
          { 
            text: { en: "Slide your finger upwards from the bottom (Scroll)", hi: "अपनी उंगली को नीचे से ऊपर की ओर खिसकाएं (स्क्रॉल करें)", kn: "ನಿಮ್ಮ ಬೆರಳನ್ನು ಕೆಳಗಿನಿಂದ ಮೇಲಕ್ಕೆ ಸರಿಸಿ (ಸ್ಕ್ರಾಲ್ ಮಾಡಿ)" }, 
            isCorrect: true 
          },
          { 
            text: { en: "Shake the phone vigorously", hi: "फोन को ज़ोर-ज़ोर से हिलाएं", kn: "ಫೋನ್ ಅನ್ನು ಜೋರಾಗಿ ಅಲ್ಲಾಡಿಸಿ" }, 
            isCorrect: false 
          },
          { 
            text: { en: "Tap the screen multiple times rapidly", hi: "स्क्रीन पर लगातार कई बार थपथपाएं", kn: "ಸ್ಕ್ರೀನ್ ಮೇಲೆ ಸತತವಾಗಿ ಹಲವು ಬಾರಿ ಟ್ಯಾಪ್ ಮಾಡಿ" }, 
            isCorrect: false 
          }
        ],
        explanation: {
          en: "Scrolling by placing your finger and sliding it upwards lets you slide down the page to read more content.",
          hi: "उंगली रखकर ऊपर की ओर खिसकाने (स्क्रॉल) से आप पेज पर नीचे जाकर और चीजें पढ़ सकते हैं।",
          kn: "ಬೆರಳನ್ನಿಟ್ಟು ಮೇಲಕ್ಕೆ ಸರಿಸುವುದರಿಂದ (ಸ್ಕ್ರಾಲ್) ನೀವು ಪುಟದ ಕೆಳಭಾಗಕ್ಕೆ ಹೋಗಿ ಹೆಚ್ಚಿನ ವಿಷಯಗಳನ್ನು ಓದಬಹುದು."
        }
      }
    ]
  },
  {
    id: 2,
    title: {
      en: "2. Spotting Scam Messages",
      hi: "2. धोखाधड़ी वाले संदेशों को पहचानें",
      kn: "2. ನಕಲಿ ಸಂದೇಶಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ"
    },
    description: {
      en: "Learn how to spot phishing SMS and avoid fake links.",
      hi: "धोखाधड़ी (फ़िशिंग) वाले SMS को पहचानें और नकली लिंक से बचें।",
      kn: "ನಕಲಿ (ಫಿಶಿಂಗ್) ಸಂದೇಶಗಳನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ನಕಲಿ ಲಿಂಕ್‌ಗಳಿಂದ ದೂರವಿರಿ."
    },
    icon: "🔍",
    badge: {
      en: "Scam Spotter",
      hi: "स्कैम स्पॉटर",
      kn: "ಸ್ಕ್ಯಾಮ್ ಸ್ಪಾಟರ್"
    },
    slides: [
      {
        title: { en: "What is a Scam Message?", hi: "धोखाधड़ी वाला संदेश क्या है?", kn: "ನಕಲಿ ಸಂದೇಶ ಎಂದರೇನು?" },
        text: {
          en: "Scammers send SMS messages pretending to be your bank, electric board, or courier services. They want to scare you so you act quickly without thinking.",
          hi: "धोखाधड़ी करने वाले लोग आपके बैंक, बिजली विभाग या कूरियर कंपनी बनकर मैसेज भेजते हैं। वे आपको डराकर तुरंत गलत कदम उठवाना चाहते हैं।",
          kn: "ವಂಚಕರು ನಿಮ್ಮ ಬ್ಯಾಂಕ್, ವಿದ್ಯುತ್ ಇಲಾಖೆ ಅಥವಾ ಕೊರಿಯರ್ ಕಂಪನಿಯ ಹೆಸರಿನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸುತ್ತಾರೆ. ಅವರು ನಿಮ್ಮನ್ನು ಹೆದರಿಸಿ ತಕ್ಷಣ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಂತೆ ಮಾಡುತ್ತಾರೆ."
        },
        illustration: "⚠️"
      },
      {
        title: { en: "Red Flags: Urgent Language", hi: "चेतावनी: जल्दबाजी वाली भाषा", kn: "ಎಚ್ಚರಿಕೆ: ತುರ್ತು ಭಾಷೆ" },
        text: {
          en: "Messages saying 'Your electricity will be cut tonight!' or 'Your bank account is blocked!' are almost always scams. Real companies give you days or weeks of warning.",
          hi: "ऐसे संदेश जिनमें लिखा हो 'आज रात आपकी बिजली कट जाएगी!' या 'आपका बैंक खाता ब्लॉक हो गया है!' वे हमेशा फर्जी होते हैं। असली कंपनियां कई दिन पहले चेतावनी देती हैं।",
          kn: "'ಇಂದೇ ರಾತ್ರಿ ನಿಮ್ಮ ವಿದ್ಯುತ್ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ!' ಅಥವಾ 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಬ್ಲಾಕ್ ಆಗಿದೆ!' ಎಂಬ ಸಂದೇಶಗಳು ಯಾವಾಗಲೂ ನಕಲಿ. ನಿಜವಾದ ಕಂಪನಿಗಳು ಸಾಕಷ್ಟು ದಿನಗಳ ಮುಂಚಿತವಾಗಿ ತಿಳಿಸುತ್ತವೆ."
        },
        illustration: "🚨"
      },
      {
        title: { en: "Red Flags: Unknown Links", hi: "चेतावनी: अज्ञात लिंक", kn: "ಎಚ್ಚರಿಕೆ: ಅಪರಿಚಿತ ಲಿಂಕ್‌ಗಳು" },
        text: {
          en: "Scam texts contain links (like 'secure-bank-login.com'). Never click links from unknown numbers. They can steal your passwords and money!",
          hi: "धोखाधड़ी वाले मैसेज में लिंक होते हैं। कभी भी किसी अज्ञात नंबर से आए लिंक पर क्लिक न करें। वे आपके पासवर्ड और पैसे चुरा सकते हैं!",
          kn: "ನಕಲಿ ಸಂದೇಶಗಳಲ್ಲಿ ಲಿಂಕ್‌ಗಳಿರುತ್ತವೆ. ಯಾವುದೇ ಅಪರಿಚಿತ ಸಂಖ್ಯೆಯಿಂದ ಬಂದ ಲಿಂಕ್‌ಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ. ಅವು ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು ಹಣವನ್ನು ಕದಿಯಬಹುದು!"
        },
        illustration: "🔗"
      }
    ],
    simulator: {
      type: "scam",
      instruction: {
        en: "Find the 3 warning flags in this SMS by clicking on them: 1) The suspicious sender name, 2) The urgent warning text, and 3) The fake payment link.",
        hi: "इस SMS में 3 खतरों को छूकर पहचानें: 1) संदेहास्पद भेजने वाले का नाम, 2) जल्दबाजी वाला चेतावनी संदेश, और 3) फर्जी भुगतान लिंक।",
        kn: "ಈ ಸಂದೇಶದಲ್ಲಿನ 3 ಅಪಾಯಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಗುರುತಿಸಿ: 1) ನಕಲಿ ಕಳುಹಿಸುವವರ ಹೆಸರು, 2) ತುರ್ತು ಎಚ್ಚರಿಕೆಯ ಬರಹ, ಮತ್ತು 3) ನಕಲಿ ಲಿಂಕ್."
      },
      sms: {
        sender: "AD-589320 (Not Your Bank)",
        text: "URGENT NOTICE: Your bank account will be PERMANENTLY CLOSED by tonight due to missing updates. Please click here immediately to verify: http://safe-banking-update.xyz/verify"
      },
      flags: [
        { 
          id: "sender", 
          text: "AD-589320 (Not Your Bank)", 
          hint: {
            en: "Real banks use their official name in the sender code (e.g. HDFCBK), not random numbers.",
            hi: "असली बैंक भेजने वाले के नाम में अपना आधिकारिक नाम (जैसे SBIIN) लिखते हैं, न कि कोई यादृच्छिक कोड या मोबाइल नंबर।",
            kn: "ನಿಜವಾದ ಬ್ಯಾಂಕುಗಳು ಅಧಿಕೃತ ಹೆಸರನ್ನು ಬಳಸಿ ಸಂದೇಶ ಕಳುಹಿಸುತ್ತವೆ (ಉದಾ: SBIIN), ಯಾವುದೇ ನಕಲಿ ಕೋಡ್ ಅಲ್ಲ."
          }
        },
        { 
          id: "urgency", 
          text: "URGENT NOTICE: Your bank account will be PERMANENTLY CLOSED by tonight", 
          hint: {
            en: "Scammers use immediate threats so you bypass critical thinking. Real banks do not block accounts instantly.",
            hi: "धोखाधड़ी करने वाले तुरंत खाता बंद करने की धमकी देते हैं ताकि आप घबरा जाएं। असली बैंक ऐसा तुरंत नहीं करते।",
            kn: "ವಂಚಕರು ನಿಮ್ಮನ್ನು ಹೆದರಿಸಲು ತಕ್ಷಣ ಖಾತೆ ಮುಚ್ಚುವ ಬೆದರಿಕೆ ಹಾಕುತ್ತಾರೆ. ಬ್ಯಾಂಕುಗಳು ಈ ರೀತಿ ತಕ್ಷಣ ಖಾತೆಗಳನ್ನು ಬ್ಲಾಕ್ ಮಾಡುವುದಿಲ್ಲ."
          }
        },
        { 
          id: "link", 
          text: "http://safe-banking-update.xyz/verify", 
          hint: {
            en: "Look closely. Real banks use official secure sites (e.g. sbi.co.in), not weird domains ending in '.xyz' or '.xyz/verify'.",
            hi: "ध्यान से देखें। असली बैंक अपनी आधिकारिक वेबसाइट का उपयोग करते हैं, न कि '.xyz' या '.temp' जैसी संदिग्ध वेबसाइटों का।",
            kn: "ಗಮನವಿಟ್ಟು ನೋಡಿ. ಬ್ಯಾಂಕುಗಳು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಮಾತ್ರ ಬಳಸುತ್ತವೆ, '.xyz' ಅಥವಾ '.temp' ನಂತಹ ನಕಲಿ ಸೈಟ್‌ಗಳನ್ನಲ್ಲ."
          }
        }
      ]
    },
    quiz: [
      {
        question: {
          en: "You receive an SMS from a personal 10-digit number saying your power bill is unpaid and electricity will be cut in 1 hour. What is the safest response?",
          hi: "आपको एक साधारण मोबाइल नंबर से मैसेज आता है कि आपका बिजली बिल बकाया है और 1 घंटे में बिजली काट दी जाएगी। सबसे सुरक्षित कदम क्या है?",
          kn: "ನಿಮಗೆ ಸಾಮಾನ್ಯ ಸಂಖ್ಯೆಯಿಂದ ಸಂದೇಶ ಬಂದು, ನಿಮ್ಮ ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಯಾಗಿಲ್ಲ ಮತ್ತು 1 ಗಂಟೆಯಲ್ಲಿ ವಿದ್ಯುತ್ ಕಡಿತಗೊಳಿಸಲಾಗುವುದು ಎನ್ನಲಾದರೆ, ಸುರಕ್ಷಿತ ಕ್ರಮವೇನು?"
        },
        choices: [
          { 
            text: { en: "Click the link in the message and pay immediately", hi: "मैसेज में दिए गए लिंक पर क्लिक करें और तुरंत भुगतान करें", kn: "ಸಂದೇಶದಲ್ಲಿನ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ ತಕ್ಷಣ ಪಾವತಿಸಿ" }, 
            isCorrect: false 
          },
          { 
            text: { en: "Ignore the SMS, and call the official helpline from your physical paper bill to check", hi: "मैसेज को अनदेखा करें, और अपने कागजी बिल पर लिखे आधिकारिक नंबर पर फोन करके जांचें", kn: "ಸಂದೇಶವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ, ನಿಮ್ಮ ಹಳೆಯ ಬಿಲ್‌ನಲ್ಲಿರುವ ಅಧಿಕೃತ ಹೆಲ್ಪ್‌ಲೈನ್ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ ವಿಚಾರಿಸಿ" }, 
            isCorrect: true 
          },
          { 
            text: { en: "Call the phone number mentioned in the SMS to ask", hi: "मैसेज में लिखे नंबर पर फोन करके पूछें", kn: "ಸಂದೇಶದಲ್ಲಿ ತಿಳಿಸಿರುವ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ ಕೇಳಿ" }, 
            isCorrect: false 
          }
        ],
        explanation: {
          en: "Always check through official channels. Electric companies do not threaten disconnection within 1 hour via mobile SMS.",
          hi: "हमेशा आधिकारिक बिल या हेल्पलाइन से जांच करें। बिजली विभाग मोबाइल SMS द्वारा 1 घंटे में कनेक्शन काटने की धमकी नहीं देता।",
          kn: "ಯಾವಾಗಲೂ ಅಧಿಕೃತ ಬಿಲ್ ಅಥವಾ ಹೆಲ್ಪ್‌ಲೈನ್ ಮೂಲಕ ಪರಿಶೀಲಿಸಿ. ವಿದ್ಯುತ್ ಇಲಾಖೆಯವರು ಇಂತಹ ಬೆದರಿಕೆ ಸಂದೇಶಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ."
        }
      }
    ]
  },
  {
    id: 3,
    title: {
      en: "3. Safe Digital Payments",
      hi: "3. सुरक्षित डिजिटल भुगतान (UPI)",
      kn: "3. ಸುರಕ್ಷಿತ ಡಿಜಿಟಲ್ ಪಾವತಿಗಳು"
    },
    description: {
      en: "Learn how to use UPI, scan QRs, and protect your PIN.",
      hi: "UPI का उपयोग करना, QR कोड स्कैन करना और अपना PIN सुरक्षित रखना सीखें।",
      kn: "UPI ಬಳಸುವುದು, QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು ಮತ್ತು ಪಿನ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡುವುದನ್ನು ಕಲಿಯಿರಿ."
    },
    icon: "💳",
    badge: {
      en: "UPI Safe Payer",
      hi: "यूपीआई सेफ़ पेयर",
      kn: "ಯುಪಿಐ ಸೇಫ್ ಪೇಯರ್"
    },
    slides: [
      {
        title: { en: "The Golden Rule of UPI", hi: "UPI का सबसे बड़ा नियम", kn: "UPI ನ ಪ್ರಮುಖ ನಿಯಮ" },
        text: {
          en: "Entering your UPI PIN is ONLY for SENDING money. You NEVER need to enter your UPI PIN to RECEIVE money. If someone tells you to enter your PIN to receive money, they are cheating you!",
          hi: "UPI PIN केवल पैसे भेजने के लिए होता है। पैसे प्राप्त (RECEIVE) करने के लिए कभी भी PIN डालने की आवश्यकता नहीं होती। यदि कोई पैसे पाने के लिए PIN डालने को कहे, तो वह धोखेबाज है!",
          kn: "ಯುಪಿಐ ಪಿನ್ ಕೇವಲ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ ಬಳಕೆಯಾಗುತ್ತದೆ. ಹಣವನ್ನು ಸ್ವೀಕರಿಸಲು ಎಂದಿಗೂ ಪಿನ್ ದಾಖಲಿಸಬೇಕಾಗಿಲ್ಲ. ಯಾರಾದರೂ ಹಣ ನೀಡಲು ಪಿನ್ ಒತ್ತಲು ಹೇಳಿದರೆ ಅವರು ವಂಚಿಸುತ್ತಿದ್ದಾರೆ ಎಂದರ್ಥ!"
        },
        illustration: "🔒"
      },
      {
        title: { en: "Check the Receiver's Name", hi: "प्राप्तकर्ता का नाम जांचें", kn: "ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು ಪರಿಶೀಲಿಸಿ" },
        text: {
          en: "When you scan a shop's QR code, the app will show their name. Stop and verify that the name matches the merchant or your friend before typing your PIN.",
          hi: "जब आप किसी दुकान का QR कोड स्कैन करते हैं, तो ऐप उनका नाम दिखाता है। PIN डालने से पहले हमेशा जांच लें कि स्क्रीन पर दिख रहा नाम दुकानदार का ही है।",
          kn: "ನೀವು ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿದಾಗ ಅವರ ಹೆಸರು ಕಾಣಿಸುತ್ತದೆ. ಪಿನ್ ದಾಖಲಿಸುವ ಮುನ್ನ ಹೆಸರು ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."
        },
        illustration: "👀"
      }
    ],
    simulator: {
      type: "payment",
      instruction: {
        en: "Practice making a safe payment. 1) Check that the receiver's name matches 'Raju Grocery Store', 2) Check that the amount is Rs 150, 3) Dismiss the warning, and 4) Tap the green checkmark.",
        hi: "सुरक्षित भुगतान का अभ्यास करें: 1) प्राप्तकर्ता का नाम 'Raju Grocery Store' जांचें, 2) रकम 150 रुपये जांचें, 3) सुरक्षा चेतावनी को छुएं, और 4) हरे सही के निशान वाले बटन को दबाएं।",
        kn: "ಸುರಕ್ಷಿತ ಪಾವತಿಯ ಅಭ್ಯಾಸ ಮಾಡಿ: 1) ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು 'Raju Grocery Store' ಎಂದು ಪರಿಶೀಲಿಸಿ, 2) ಮೊತ್ತ 150 ರೂ ಎಂದು ಖಚಿತಪಡಿಸಿ, 3) ಎಚ್ಚರಿಕೆ ಅಲರ್ಟ್ ಕ್ಲಿಕ್ ಮಾಡಿ, 4) ಗ್ರೀನ್ ಟಿಕ್ ಬಟನ್ ಒತ್ತಿ."
      },
      receiver: "Raju Grocery Store",
      amount: "150.00",
      securityAlert: "PAYING TO AN UNVERIFIED MERCHANT. Proceed with caution."
    },
    quiz: [
      {
        question: {
          en: "A buyer sends you a QR code on WhatsApp and says: 'Scan this code and enter your UPI PIN to receive the payment.' What should you do?",
          hi: "एक ग्राहक आपको WhatsApp पर QR कोड भेजता है और कहता है: 'पैसे प्राप्त करने के लिए इसे स्कैन करें और अपना UPI PIN डालें।' आप क्या करेंगे?",
          kn: "ಗ್ರಾಹಕರೊಬ್ಬರು ನಿಮಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಕಳುಹಿಸಿ, ಹಣ ಪಡೆಯಲು ಇದನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ಒತ್ತಿ ಎಂದರೆ ಏನು ಮಾಡುವಿರಿ?"
        },
        choices: [
          { 
            text: { en: "Scan it and enter my PIN to receive the money", hi: "इसे स्कैन करके पैसे पाने के लिए अपना PIN डाल देंगे", kn: "ಅದನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ದಾಖಲಿಸಿ ಹಣ ಪಡೆಯುವಿರಿ" }, 
            isCorrect: false 
          },
          { 
            text: { en: "Never scan it. Entering PIN is only for paying, never for receiving", hi: "कभी स्कैन नहीं करेंगे। PIN केवल पैसे देने के लिए होता है, पाने के लिए नहीं", kn: "ಎಂದಿಗೂ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ. ಪಿನ್ ಕೇವಲ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ" }, 
            isCorrect: true 
          }
        ],
        explanation: {
          en: "UPI PIN is your secret key to send money out. Scammers send fake 'Receive QR' codes to steal your balance.",
          hi: "UPI PIN आपके खाते से पैसे भेजने की चाबी है। धोखेबाज पैसे चुराने के लिए फर्जी 'पैसे पाएं QR कोड' भेजते हैं।",
          kn: "ಯುಪಿಐ ಪಿನ್ ಹಣ ಕಳುಹಿಸಲು ಬಳಸುವ ರಹಸ್ಯ ಕೋಡ್ ಆಗಿದೆ. ವಂಚಕರು ಹಣ ಕದಿಯಲು ನಕಲಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಕಳುಹಿಸುತ್ತಾರೆ."
        }
      }
    ]
  },
  {
    id: 4,
    title: {
      en: "4. Ordering Food Online",
      hi: "4. ऑनलाइन खाना ऑर्डर करना",
      kn: "4. ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಆಹಾರ ಆರ್ಡರ್ ಮಾಡುವುದು"
    },
    description: {
      en: "Learn how to use Swiggy/Zomato and pay safely.",
      hi: "Swiggy या Zomato का उपयोग करना और सुरक्षित ऑर्डर करना सीखें।",
      kn: "ಸ್ವಿಗ್ಗಿ ಅಥವಾ ಜೊಮ್ಯಾಟೊ ಬಳಸಿ ಸುರಕ್ಷಿತವಾಗಿ ಆಹಾರ ಆರ್ಡರ್ ಮಾಡುವುದನ್ನು ಕಲಿಯಿರಿ."
    },
    icon: "🍔",
    badge: {
      en: "Smart Food Orderer",
      hi: "स्मार्ट फूड ऑर्डर्डर",
      kn: "ಸ್ಮಾರ್ಟ್ ಫುಡ್ ಆರ್ಡರರ್"
    },
    slides: [
      {
        title: { en: "Ordering Food Safely", hi: "सुरक्षित खाना ऑर्डर करना", kn: "ಸುರಕ್ಷಿತ ಆಹಾರ ಆರ್ಡರ್" },
        text: {
          en: "Online food apps let you order meals to your doorstep. Always search for verified restaurants and check customer reviews and stars (4+ stars is best) before selecting food.",
          hi: "फूड ऐप्स द्वारा आप घर बैठे खाना मंगा सकते हैं। खाना चुनने से पहले हमेशा रेस्टोरेंट की रेटिंग और ग्राहकों के रिव्यू जांचें (4 स्टार या अधिक रेटिंग सबसे अच्छी है)।",
          kn: "ಆಹಾರದ ಆಪ್‌ಗಳು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ಆಹಾರ ತಲುಪಿಸುತ್ತವೆ. ಹೋಟೆಲ್ ಆರಿಸುವ ಮುನ್ನ ರೇಟಿಂಗ್ಸ್ ಮತ್ತು ವಿಮರ್ಶೆಗಳನ್ನು ಗಮನಿಸಿ (4 ನಕ್ಷತ್ರ ರೇಟಿಂಗ್ ಇರುವುದು ಉತ್ತಮ)."
        },
        illustration: "🍕"
      },
      {
        title: { en: "Choosing Payment Mode", hi: "भुगतान का सही विकल्प", kn: "ಪಾವತಿಯ ಸರಿಯಾದ ವಿಧಾನ" },
        text: {
          en: "For beginners, 'Cash on Delivery' (paying when food arrives) is the safest method. If you pay online, use official UPI apps and double check the billing amount.",
          hi: "शुरुआती लोगों के लिए, 'कैश ऑन डिलीवरी' (खाना मिलने पर नगद पैसे देना) सबसे सुरक्षित है। ऑनलाइन पेमेंट करते समय बिल की कुल रकम दोबारा जांचें।",
          kn: "ಹೊಸದಾಗಿ ಬಳಸುವವರಿಗೆ 'ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ' (ಆಹಾರ ತಲುಪಿದಾಗ ಹಣ ನೀಡುವುದು) ಅತ್ಯಂತ ಸುರಕ್ಷಿತ. ಆನ್‌ಲೈನ್ ಪಾವತಿ ಮಾಡುವಾಗ ಮೊತ್ತವನ್ನು ಮತ್ತೊಮ್ಮೆ ಪರಿಶೀಲಿಸಿ."
        },
        illustration: "💵"
      }
    ],
    simulator: {
      type: "food",
      instruction: {
        en: "Order a Veg Burger. 1) Click 'Add Burger', 2) Tap the shopping bag icon, 3) Select 'Cash on Delivery', and 4) Tap 'Place Order'.",
        hi: "एक वेज बर्गर ऑर्डर करें: 1) 'Add Burger' दबाएं, 2) शॉपिंग बैग आइकन को छुएं, 3) 'Cash on Delivery' चुनें, और 4) 'Place Order' दबाएं।",
        kn: "ಒಂದು ವೆಜ್ ಬರ್ಗರ್ ಆರ್ಡರ್ ಮಾಡಿ: 1) 'Add Burger' ಕ್ಲಿಕ್ ಮಾಡಿ, 2) ಶಾಪಿಂಗ್ ಬ್ಯಾಗ್ ಐಕಾನ್ ಒತ್ತಿ, 3) 'Cash on Delivery' ಆಯ್ಕೆಮಾಡಿ, 4) 'Place Order' ಒತ್ತಿ."
      },
      item: "Veg Burger",
      price: "120.00"
    },
    quiz: [
      {
        question: {
          en: "What is the safest payment method when using a food app for the first time?",
          hi: "पहली बार फूड ऐप का उपयोग करते समय भुगतान का सबसे सुरक्षित तरीका क्या है?",
          kn: "ಮೊದಲ ಬಾರಿಗೆ ಆಹಾರದ ಆಪ್ ಬಳಸುವಾಗ ಪಾವತಿ ಮಾಡಲು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮಾರ್ಗ ಯಾವುದು?"
        },
        choices: [
          { 
            text: { en: "Cash on Delivery (COD) - pay cash when food arrives", hi: "कैश ऑन डिलीवरी (COD) - भोजन मिलने पर नगद भुगतान", kn: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ (ಸಿಒಡಿ) - ಆಹಾರ ತಲುಪಿದಾಗ ನಗದು ಪಾವತಿ" }, 
            isCorrect: true 
          },
          { 
            text: { en: "Giving your credit card details over WhatsApp to the delivery boy", hi: "WhatsApp पर डिलीवरी बॉय को अपनी क्रेडिट कार्ड जानकारी साझा करना", kn: "ಡೆಲಿವರಿ ಬಾಯ್‌ಗೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ವಿವರಗಳನ್ನು ನೀಡುವುದು" }, 
            isCorrect: false 
          }
        ],
        explanation: {
          en: "Cash on Delivery ensures you only pay once the food is physically in your hands, avoiding payment transaction issues.",
          hi: "कैश ऑन डिलीवरी से यह सुनिश्चित होता है कि आप भोजन मिलने के बाद ही पैसे दें, जिससे ऑनलाइन फ्रॉड का खतरा नहीं रहता।",
          kn: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿಯಿಂದ ಆಹಾರ ನಿಮ್ಮ ಕೈಗೆ ತಲುಪಿದ ನಂತರವೇ ಹಣ ಪಾವತಿಸುವುದರಿಂದ ಆನ್‌ಲೈನ್ ವಂಚನೆಯ ಭಯ ಇರುವುದಿಲ್ಲ."
        }
      }
    ]
  },
  {
    id: 5,
    title: {
      en: "5. Ordering Medicine Online",
      hi: "5. ऑनलाइन दवाइयाँ ऑर्डर करना",
      kn: "5. ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಔಷಧ ಆರ್ಡರ್ ಮಾಡುವುದು"
    },
    description: {
      en: "Use certified e-pharmacy apps and verify prescriptions.",
      hi: "प्रमाणित मेडिकल ऐप्स का उपयोग करें और प्रिस्क्रिप्शन सुरक्षित अपलोड करें।",
      kn: "ಅಧಿಕೃತ ಮೆಡಿಕಲ್ ಆಪ್ ಬಳಸಿ ಮತ್ತು ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಸುರಕ್ಷಿತವಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ."
    },
    icon: "💊",
    badge: {
      en: "Safe Medicine Buyer",
      hi: "सेफ़ मेडिसिन बायर",
      kn: "ಸೇಫ್ ಮೆಡಿಸಿನ್ ಬೈಯರ್"
    },
    slides: [
      {
        title: { en: "Certified Medicine Apps", hi: "प्रमाणित ऑनलाइन मेडिकल स्टोर", kn: "ಅಧಿಕೃತ ಮೆಡಿಕಲ್ ಸ್ಟೋರ್‌ಗಳು" },
        text: {
          en: "Certified apps like 1mg, Netmeds, or Apollo Pharmacy are safe. Avoid purchasing medicines from unverified websites or advertisements on Facebook, as they may send expired or fake tablets.",
          hi: "1mg, Netmeds या Apollo Pharmacy जैसे प्रमाणित ऐप सुरक्षित हैं। फेसबुक या अन्य विज्ञापनों पर दिखने वाली अज्ञात साइटों से दवाएं न खरीदें, वे नकली हो सकती हैं।",
          kn: "1mg, Netmeds ಅಥವಾ Apollo Pharmacy ಗಳಂತಹ ಅಧಿಕೃತ ಆಪ್‌ಗಳು ಸುರಕ್ಷಿತ. ಫೇಸ್‌ಬುಕ್ ಜಾಹೀರಾತುಗಳಲ್ಲಿ ಕಾಣಿಸುವ ಅಪರಿಚಿತ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಂದ ಔಷಧ ಖರೀದಿಸಬೇಡಿ."
        },
        illustration: "🏥"
      },
      {
        title: { en: "Uploading Doctor's Prescription", hi: "प्रिस्क्रिप्शन अपलोड करना", kn: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡುವುದು" },
        text: {
          en: "Prescription medicines require you to upload a clear photo of the doctor's prescription slip. The app's pharmacists review this slip to prepare the correct medicines.",
          hi: "कुछ दवाइयों के लिए डॉक्टर के पर्चे (प्रिस्क्रिप्शन) की फोटो अपलोड करनी होती है। ऐप के फार्मासिस्ट पर्चे की जांच करके सही दवाएं पैक करते हैं।",
          kn: "ಕೆಲವು ಔಷಧಿಗಳಿಗಾಗಿ ವೈದ್ಯರ ಚೀಟಿಯ (ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್) ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಬೇಕು. ಆಪ್‌ನ ಫಾರ್ಮಾಸಿಸ್ಟ್ ಅದನ್ನು ಪರಿಶೀಲಿಸಿ ಸರಿಯಾದ ಔಷಧಿ ನೀಡುತ್ತಾರೆ."
        },
        illustration: "📋"
      }
    ],
    simulator: {
      type: "medicine",
      instruction: {
        en: "Order Vitamin C. 1) Click 'Add Medicine', 2) Click 'Upload Prescription Slip' placeholder, 3) Select Cash on Delivery, and 4) Click 'Order Medicine'.",
        hi: "विटामिन C ऑर्डर करें: 1) 'Add Medicine' दबाएं, 2) 'Upload Prescription' बॉक्स को छुएं, 3) कैश ऑन डिलीवरी चुनें, और 4) 'Order Medicine' दबाएं।",
        kn: "ವಿಟಮಿನ್ ಸಿ ಆರ್ಡರ್ ಮಾಡಿ: 1) 'Add Medicine' ಕ್ಲಿಕ್ ಮಾಡಿ, 2) 'Upload Prescription' ಬಾಕ್ಸ್ ಒತ್ತಿ, 3) ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಆಯ್ಕೆಮಾಡಿ, 4) 'Order Medicine' ಒತ್ತಿ."
      },
      item: "Vitamin C Tablets",
      price: "85.00"
    },
    quiz: [
      {
        question: {
          en: "Why should you avoid buying medicines from random popup ads on the internet?",
          hi: "इंटरनेट पर अचानक दिखने वाले विज्ञापनों से दवाइयाँ क्यों नहीं खरीदनी चाहिए?",
          kn: "ಅಂತರ್ಜಾಲದಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಅಪರಿಚಿತ ಜಾಹೀರಾತುಗಳಿಂದ ಔಷಧಗಳನ್ನು ಏಕೆ ಖರೀದಿಸಬಾರದು?"
        },
        choices: [
          { 
            text: { en: "They might sell expired, fake, or harmful tablets without certification", hi: "वे बिना जांच के एक्सपायर्ड, नकली या हानिकारक दवाइयाँ बेच सकते हैं", kn: "ಅವರು ಯಾವುದೇ ಪ್ರಮಾಣಪತ್ರವಿಲ್ಲದೆ ಅವಧಿ ಮುಗಿದ ಅಥವಾ ನಕಲಿ ಔಷಧಗಳನ್ನು ಮಾರಬಹುದು" }, 
            isCorrect: true 
          },
          { 
            text: { en: "Because online delivery is always delayed", hi: "क्योंकि ऑनलाइन डिलीवरी में हमेशा देरी होती है", kn: "ಏಕೆಂದರೆ ಆನ್‌ಲೈನ್ ಡೆಲಿವರಿ ತಡವಾಗಬಹುದು" }, 
            isCorrect: false 
          }
        ],
        explanation: {
          en: "Always buy from recognized, government-licensed pharmacy applications to guarantee medicine safety.",
          hi: "दवाइयों की शुद्धता सुनिश्चित करने के लिए हमेशा मान्यता प्राप्त और लाइसेंसधारी फार्मेसी ऐप्स से ही खरीदारी करें।",
          kn: "ಔಷಧಗಳ ಸುರಕ್ಷತೆಗಾಗಿ ಯಾವಾಗಲೂ ಸರ್ಕಾರದ ಪರವಾನಗಿ ಹೊಂದಿರುವ ಅಧಿಕೃತ ಮೆಡಿಕಲ್ ಆಪ್‌ಗಳಿಂದ ಮಾತ್ರ ಖರೀದಿಸಿ."
        }
      }
    ]
  },
  {
    id: 6,
    title: {
      en: "6. Password & App Safety",
      hi: "6. पासवर्ड और ऐप सुरक्षा",
      kn: "6. ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು ಆಪ್ ಸುರಕ್ಷತೆ"
    },
    description: {
      en: "Create secure screen lock codes and download apps safely.",
      hi: "सुरक्षित स्क्रीन लॉक पासवर्ड बनाना और ऐप्स को सुरक्षित रूप से डाउनलोड करना सीखें।",
      kn: "ಸುರಕ್ಷಿತ ಸ್ಕ್ರೀನ್ ಲಾಕ್ ಪಾಸ್‌ವರ್ಡ್ ರಚಿಸುವುದು ಮತ್ತು ಆಪ್‌ಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದನ್ನು ಕಲಿಯಿರಿ."
    },
    icon: "🔑",
    badge: {
      en: "App Security Expert",
      hi: "ऐप सुरक्षा विशेषज्ञ",
      kn: "ಆಪ್ ಭದ್ರತಾ ತಜ್ಞ"
    },
    slides: [
      {
        title: { en: "Secure Your Lock Screen", hi: "लॉक स्क्रीन सुरक्षित करें", kn: "ಲಾಕ್ ಸ್ಕ್ರೀನ್ ಸುರಕ್ಷಿತಗೊಳಿಸಿ" },
        text: {
          en: "Always use a PIN or Pattern to lock your phone. Avoid obvious codes like '1234' or '0000', or your birth year. These are the first codes a thief will try!",
          hi: "हमेशा अपने फोन को लॉक रखें। '1234', '0000' या अपनी जन्म तिथि जैसे आसान पासवर्ड न रखें। चोर सबसे पहले इन्हीं पासवर्ड का अनुमान लगाते हैं!",
          kn: "ಯಾವಾಗಲೂ ನಿಮ್ಮ ಫೋನ್ ಲಾಕ್ ಮಾಡಿಡಿ. '1234', '0000' ಅಥವಾ ನಿಮ್ಮ ಜನ್ಮ ವರ್ಷದಂತಹ ಸುಲಭ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಬೇಡಿ. ಕಳ್ಳರು ಮೊದಲು ಇವುಗಳನ್ನೇ ಪ್ರಯತ್ನಿಸುತ್ತಾರೆ!"
        },
        illustration: "🔓"
      },
      {
        title: { en: "Download Only from Official Stores", hi: "केवल आधिकारिक स्टोर से डाउनलोड करें", kn: "ಅಧಿಕೃತ ಸ್ಟೋರ್‌ನಿಂದ ಮಾತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ" },
        text: {
          en: "Only download apps from Google Play Store (Android) or App Store (iPhone). Never download apps from web browser links, as they can contain spy viruses.",
          hi: "केवल गूगल प्ले स्टोर या एप्पल ऐप स्टोर से ही ऐप्स डाउनलोड करें। वेब ब्राउज़र पर आए किसी लिंक से ऐप डाउनलोड न करें, वे वायरस हो सकते हैं।",
          kn: "ಕೇವಲ ಗೂಗಲ್ ಪ್ಲೇ ಸ್ಟೋರ್ ಅಥವಾ ಆಪ್ ಸ್ಟೋರ್‌ನಿಂದ ಮಾತ್ರ ಆಪ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ. ವೆಬ್ ಲಿಂಕ್‌ಗಳ ಮೂಲಕ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಡಿ, ಅವು ವೈರಸ್ ಹೊಂದಿರಬಹುದು."
        },
        illustration: "📥"
      }
    ],
    simulator: null,
    quiz: [
      {
        question: {
          en: "Which of the following PINs is the most secure lock screen code for your phone?",
          hi: "निम्नलिखित में से कौन सा PIN आपके फोन लॉक के लिए सबसे सुरक्षित है?",
          kn: "ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ನಿಮ್ಮ ಫೋನ್ ಲಾಕ್‌ಗೆ ಅತ್ಯಂತ ಸುರಕ್ಷಿತವಾದ ಪಿನ್ ಆಗಿದೆ?"
        },
        choices: [
          { 
            text: { en: "1234", hi: "1234", kn: "1234" }, 
            isCorrect: false 
          },
          { 
            text: { en: "7942 (a random code you memorize)", hi: "7942 (कोई यादृच्छिक संख्या जो आपको याद रहे)", kn: "7942 (ನೆನಪಿನಲ್ಲಿ ಉಳಿಯುವ ಯಾವುದೇ ಸಾಮಾನ್ಯ ಸಂಖ್ಯೆ)" }, 
            isCorrect: true 
          }
        ],
        explanation: {
          en: "Obvious sequences are easily guessed by thieves. A randomized pin is much safer.",
          hi: "आसान और क्रमिक संख्याएं चोर आसानी से अनुमान लगा लेते हैं। यादृच्छिक पिन बहुत सुरक्षित होता है।",
          kn: "ಸುಲಭವಾದ ಸಂಖ್ಯೆಗಳನ್ನು ಕಳ್ಳರು ಸುಲಭವಾಗಿ ಊಹಿಸುತ್ತಾರೆ. ಯಾದೃಚ್ಛಿಕ ಪಿನ್ ಹೆಚ್ಚು ಸುರಕ್ಷಿತ."
        }
      }
    ]
  },
  {
    id: 7,
    title: {
      en: "7. WhatsApp Privacy & Safety",
      hi: "7. व्हाट्सएप गोपनीयता और सुरक्षा",
      kn: "7. ವಾಟ್ಸಾಪ್ ಗೌಪ್ಯತೆ ಮತ್ತು ಭದ್ರತೆ"
    },
    description: {
      en: "Learn how to block annoying contacts and detect fake news.",
      hi: "अवांछित संपर्कों को ब्लॉक करना और फर्जी खबरों को पहचानना सीखें।",
      kn: "ಅಪರಿಚಿತ ನಂಬರ್‌ಗಳನ್ನು ಬ್ಲಾಕ್ ಮಾಡುವುದು ಮತ್ತು ನಕಲಿ ಸುದ್ದಿಗಳನ್ನು ಗುರುತಿಸುವುದನ್ನು ಕಲಿಯಿರಿ."
    },
    icon: "💬",
    badge: {
      en: "Digital Safety Champion",
      hi: "डिजिटल सुरक्षा चैंपियन",
      kn: "ಡಿಜಿಟಲ್ ಸುರಕ್ಷತಾ ಚಾಂಪಿಯನ್"
    },
    slides: [
      {
        title: { en: "Identifying Forwarded Messages", hi: "फॉरवर्ड संदेशों की पहचान", kn: "ಫಾರ್ವರ್ಡ್ ಸಂದೇಶಗಳ ಪತ್ತೆ" },
        text: {
          en: "If a WhatsApp message has a 'Forwarded many times' label on top, it means it is a viral forward. Do not trust it blindly! Check official news channels first.",
          hi: "यदि किसी व्हाट्सएप मैसेज पर 'Forwarded many times' (कई बार फॉरवर्ड किया गया) का निशान है, तो उस पर भरोसा न करें। पहले आधिकारिक समाचारों में उसकी पुष्टि करें।",
          kn: "ಯಾವುದೇ ಸಂದೇಶದ ಮೇಲೆ 'Forwarded many times' ಎಂದು ಬರೆದಿದ್ದರೆ ಅದನ್ನು ಕುರುಡಾಗಿ ನಂಬಬೇಡಿ. ಮೊದಲು ಅಧಿಕೃತ ಸುದ್ದಿ ವಾಹಿನಿಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಿ."
        },
        illustration: "✉️"
      },
      {
        title: { en: "Blocking Unknown Callers", hi: "अज्ञात कॉल करने वालों को ब्लॉक करें", kn: "ಅಪರಿಚಿತ ಕರೆಗಳನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿ" },
        text: {
          en: "If you receive call requests or chats from unknown international numbers offering rewards, do not pick up! Click their profile and tap the red 'Block' button.",
          hi: "यदि आपको किसी अज्ञात या विदेशी नंबर से कॉल या मैसेज आता है जिसमें इनाम का लालच दिया जाए, तो तुरंत ब्लॉक करें। व्यक्ति के प्रोफाइल पर जाकर 'Block' दबाएं।",
          kn: "ನಿಮಗೆ ಯಾವುದೇ ಅಪರಿಚಿತ ಅಥವಾ ವಿದೇಶಿ ಸಂಖ್ಯೆಯಿಂದ ಲಾಟರಿ ಗೆದ್ದಿರುವ ಕರೆ ಬಂದರೆ ತಕ್ಷಣ ಬ್ಲಾಕ್ ಮಾಡಿ. ಅವರ ಪ್ರೊಫೈಲ್ ಕ್ಲಿಕ್ ಮಾಡಿ 'Block' ಒತ್ತಿ."
        },
        illustration: "🚫"
      }
    ],
    simulator: null,
    quiz: [
      {
        question: {
          en: "You receive a message saying: 'Government is giving free Rs 5000 to all citizens. Click this link to register.' What should you do?",
          hi: "आपको मैसेज मिलता है: 'सरकार सभी नागरिकों को 5000 रुपये मुफ्त दे रही है। पंजीकरण के लिए इस लिंक पर क्लिक करें।' आप क्या करेंगे?",
          kn: "ನಿಮಗೆ 'ಸರ್ಕಾರವು ಎಲ್ಲಾ ನಾಗರಿಕರಿಗೆ ಉಚಿತವಾಗಿ 5000 ರೂ ನೀಡುತ್ತಿದೆ. ನೋಂದಾಯಿಸಲು ಈ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ' ಎಂದು ಸಂದೇಶ ಬಂದರೆ ಏನು ಮಾಡುವಿರಿ?"
        },
        choices: [
          { 
            text: { en: "Ignore it. Government schemes are announced on TV and news, not through WhatsApp viral links", hi: "अनदेखा करेंगे। सरकारी योजनाओं की घोषणा आधिकारिक समाचारों में होती है, व्हाट्सएप फॉरवर्ड लिंक से नहीं", kn: "ನಿರ್ಲಕ್ಷಿಸಿ. ಸರ್ಕಾರದ ಯೋಜನೆಗಳು ಸುದ್ದಿ ಮಾಧ್ಯಮಗಳಲ್ಲಿ ಪ್ರಕಟವಾಗುತ್ತವೆ, ಇಂತಹ ಲಿಂಕ್‌ಗಳ ಮೂಲಕ ಅಲ್ಲ" }, 
            isCorrect: true 
          },
          { 
            text: { en: "Click the link immediately and share it with family", hi: "तुरंत लिंक पर क्लिक करेंगे और परिवार के साथ साझा करेंगे", kn: "ತಕ್ಷಣ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ ನಿಮ್ಮ ಕುಟುಂಬದವರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವಿರಿ" }, 
            isCorrect: false 
          }
        ],
        explanation: {
          en: "Government schematics are never distributed via random viral forwarded links on social media.",
          hi: "सरकारी योजनाओं का लाभ कभी भी सोशल मीडिया पर आने वाले यादृच्छिक वायरल लिंक के माध्यम से नहीं दिया जाता।",
          kn: "ಸರ್ಕಾರದ ಯೋಜನೆಗಳ ಮಾಹಿತಿ ಎಂದಿಗೂ ಸೋಷಿಯಲ್ ಮೀಡಿಯಾಗಳಲ್ಲಿ ಹರಿದಾಡುವ ನಕಲಿ ಲಿಂಕ್‌ಗಳ ಮೂಲಕ ಸಿಗುವುದಿಲ್ಲ."
        }
      }
    ]
  }
];

export const chatbotFAQ = {
  en: [
    {
      keywords: ["otp", "one time password", "one-time"],
      answer: "An OTP (One-Time Password) is a secure, temporary code sent to your mobile phone. It is like a second lock on your bank. **CRITICAL SAFETY TIP:** Never share your OTP with anyone over a call or message, even if they claim to be from your bank or a police official. Sharing OTP = giving away keys to your vault."
    },
    {
      keywords: ["upi", "pin", "payment", "pay", "google pay", "phonepe", "paytm"],
      answer: "UPI lets you pay directly from your bank. **THE GOLDEN RULE:** You enter your UPI PIN only to SEND money. You NEVER need to enter your PIN to receive money! If someone scans a code or asks you to enter your PIN to get a refund, they are trying to steal from you."
    },
    {
      keywords: ["scam", "phishing", "sms", "text", "bank blocked", "electricity", "cut"],
      answer: "Scammers send scare messages saying your power will be cut or your bank account is blocked. Don't panic! Take a deep breath. Look at the sender number—if it is a normal 10-digit mobile number, it is 100% fake. Never click links in such texts. Call the official helpline directly from your bills to check."
    },
    {
      keywords: ["food", "order", "swiggy", "zomato", "burger", "pizza"],
      answer: "When ordering food online, use apps like Swiggy or Zomato. Check restaurant ratings (4+ stars is recommended). For the safest delivery, select 'Cash on Delivery' so you pay cash only after receiving your hot meal."
    },
    {
      keywords: ["medicine", "tablet", "pharmacy", "netmeds", "1mg", "prescription"],
      answer: "Order medicine online only from verified apps like 1mg, Apollo Pharmacy, or Netmeds. For prescription medicines, you must take a photo of the doctor's slip and upload it safely in the app. Avoid random medicine sites!"
    },
    {
      keywords: ["whatsapp", "block", "unknown", "forward"],
      answer: "To stay safe on WhatsApp: 1) Change your Profile Photo privacy to 'My Contacts' so strangers can't steal it. 2) If an unknown number calls you, do not pick up. Click on their name and tap the red 'Block' button. 3) Don't share double-arrow 'Forwarded' messages without checking if they are true."
    },
    {
      keywords: ["download", "app", "play store", "install"],
      answer: "Always download apps using the official **Google Play Store** (on Android) or **App Store** (on iPhone). Do not click download buttons on websites or links sent on WhatsApp. Web-based downloads can install malware that records your banking keystrokes."
    },
    {
      keywords: ["password", "code", "lock", "pattern"],
      answer: "Your lock screen password is your first line of defense. Avoid using easy codes like '0000', '1234', or your birth year. Pick a random number that you can associate with a personal memory, and keep it private!"
    },
    {
      keywords: ["hello", "hi", "how are you", "how are u", "morning", "evening", "namaste"],
      answer: "Hello, my friend! I am doing great, thank you for checking in. How are you feeling today? Did you drink your water, take a light walk, or talk to family today? Remember, keeping active and talking to loved ones is very good for your health!"
    }
  ],
  hi: [
    {
      keywords: ["otp", "ओटीपी", "वन टाइम पासवर्ड"],
      answer: "OTP (वन-टाइम पासवर्ड) आपके मोबाइल पर भेजा जाने वाला एक गुप्त सुरक्षा कोड है। यह आपके बैंक लॉकर की दूसरी चाबी की तरह है। **महत्वपूर्ण नियम:** कभी भी अपना OTP किसी को न बताएं, चाहे वह आपका बैंक मैनेजर या पुलिस ही क्यों न कहे। OTP बताने का मतलब है अपने पैसे चोरी होने देना।"
    },
    {
      keywords: ["upi", "यूपीआई", "पिन", "भुगतान", "पेमेंट", "गूगल पे", "फोनपे", "पेटीएम"],
      answer: "UPI द्वारा सीधे बैंक से भुगतान होता है। **स्वर्ण नियम:** आप अपना UPI PIN केवल पैसे भेजने (SEND) के लिए डालते हैं। पैसे प्राप्त (RECEIVE) करने के लिए कभी भी PIN नहीं डालना पड़ता। यदि कोई कहे कि पैसे पाने के लिए PIN डालें, तो वह तुरंत फ्रॉड कर रहा है।"
    },
    {
      keywords: ["स्कैम", "धोखा", "फर्जी", "बिजली", "खाता ब्लॉक", "मैसेज", "लिंक"],
      answer: "धोखेबाज आपको डराने के लिए मैसेज भेजते हैं कि बिजली कट जाएगी या खाता ब्लॉक हो जाएगा। घबराएं नहीं! गहरी सांस लें। भेजने वाले का नंबर देखें - यदि वह 10 अंकों का साधारण नंबर है, तो वह फर्जी है। किसी भी लिंक को न छुएं, सरकारी दफ्तर या बैंक की शाखा में जाकर ही पूछताछ करें।"
    },
    {
      keywords: ["खाना", "ऑर्डर", "स्वीगी", "जोमैटो", "बर्गर", "पिज्जा"],
      answer: "ऑनलाइन खाना मंगाने के लिए Swiggy या Zomato का उपयोग करें। रेस्टोरेंट की रेटिंग देखें (4+ स्टार रेटिंग सबसे अच्छी है)। सुरक्षित रहने के लिए भुगतान में 'Cash on Delivery' (नकद भुगतान) चुनें, ताकि खाना हाथ में मिलने पर ही आप पैसे दें।"
    },
    {
      keywords: ["दवा", "मेडिसिन", "पर्ची", "प्रिस्क्रिप्शन", "1mg", "नेटमेड्स"],
      answer: "दवाइयां हमेशा 1mg, Apollo Pharmacy या Netmeds जैसे प्रमाणित ऐप से ही खरीदें। डॉक्टर की पर्ची की साफ फोटो खींचकर ऐप में अपलोड करें। फेसबुक या इंटरनेट विज्ञापनों पर दिखने वाली दवा की फर्जी वेबसाइटों से हमेशा बचें।"
    },
    {
      keywords: ["व्हाट्सएप", "व्हाट्सएप", "ब्लॉक", "फॉरवर्ड", "अनजान नंबर"],
      answer: "WhatsApp सुरक्षा नियम: 1) प्रोफाइल फोटो की गोपनीयता को 'My Contacts' सेट करें ताकि कोई अनजान आपका फोटो न चुराए। 2) किसी अनजान नंबर से कॉल आने पर न उठाएं और चैट में जाकर 'Block' बटन दबाएं। 3) बिना जांचे 'Forwarded' संदेशों को आगे न भेजें।"
    },
    {
      keywords: ["डाउनलोड", "ऐप", "प्ले स्टोर", "इंस्टॉल"],
      answer: "हमेशा केवल **Google Play Store** (एंड्रॉइड) या **App Store** (आईफोन) से ही ऐप डाउनलोड करें। व्हाट्सएप पर आए लिंक या गूगल क्रोम वेबसाइटों से ऐप डाउनलोड न करें, इनसे मोबाइल में वायरस आ सकता है।"
    },
    {
      keywords: ["पासवर्ड", "पिन", "लॉक", "कोड", "पैटर्न"],
      answer: "स्क्रीन लॉक आपके फोन की सुरक्षा के लिए सबसे जरूरी है। '1234', '0000' या अपनी जन्म तिथि जैसा आसान पिन न रखें। कोई ऐसी संख्या चुनें जिसे आप याद रख सकें और जो दूसरों के लिए सोचना मुश्किल हो!"
    },
    {
      keywords: ["नमस्ते", "हेलो", "कैसी हो", "कैसे हो", "शुभ प्रभात", "राम राम"],
      answer: "नमस्ते मेरे मित्र! मैं बिल्कुल ठीक हूँ, पूछने के लिए धन्यवाद। आज आप कैसा महसूस कर रहे हैं? क्या आपने पर्याप्त पानी पिया, थोड़ा टहले, या आज परिवार से बात की? स्वस्थ रहने के लिए थोड़ा टहलना और अपनों से बात करना बहुत आवश्यक है!"
    }
  ],
  kn: [
    {
      keywords: ["otp", "ಓಟಿಪಿ", "ಒನ್ ಟೈಮ್ ಪಾಸ್‌ವರ್ಡ್"],
      answer: "OTP (ಒನ್-ಟೈಮ್ ಪಾಸ್‌ವರ್ಡ್) ಎಂಬುದು ನಿಮ್ಮ ಮೊಬೈಲ್‌ಗೆ ಬರುವ ತಾತ್ಕಾಲಿಕ ಭದ್ರತಾ ಕೋಡ್ ಆಗಿದೆ. ಇದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನ ಎರಡನೇ ಕೀಲಿ ಇದ್ದಂತೆ. **ಪ್ರಮುಖ ಸುರಕ್ಷತಾ ಸಲಹೆ:** ಯಾವುದೇ ಕಾರಣಕ್ಕೂ ನಿಮ್ಮ ಒಟಿಪಿ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ, ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್ ಆದರೂ ನೀಡಬೇಡಿ."
    },
    {
      keywords: ["upi", "ಯುಪಿಐ", "ಪಿನ್", "ಪಾವತಿ", "ಪೇಮೆಂಟ್", "ಗೂಗಲ್ ಪೇ", "ಫೋನ್ ಪೇ", "ಪೇಟಿಎಂ"],
      answer: "UPI ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ನಿಂದ ನೇರವಾಗಿ ಪಾವತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. **ಪ್ರಮುಖ ನಿಯಮ:** ನೀವು ಯುಪಿಐ ಪಿನ್ ಅನ್ನು ಕೇವಲ ಹಣ ಕಳುಹಿಸಲು (SEND) ಮಾತ್ರ ಬಳಸುತ್ತೀರಿ. ಹಣವನ್ನು ಪಡೆಯಲು (RECEIVE) ಎಂದಿಗೂ ಪಿನ್ ದಾಖಲಿಸಬಾರದು. ಯಾರಾದರೂ ಹಣ ನೀಡಲು ಪಿನ್ ಒತ್ತಲು ಹೇಳಿದರೆ ಅದು ವಂಚನೆ."
    },
    {
      keywords: ["ನಕಲಿ", "ಫಿಶಿಂಗ್", "ಸಂದೇಶ", "ಕರೆ", "ಬ್ಯಾಂಕ್ ಬ್ಲಾಕ್", "ವಿದ್ಯುತ್"],
      answer: "ವಂಚಕರು ನಿಮ್ಮನ್ನು ಹೆದರಿಸಲು ವಿದ್ಯುತ್ ಕಡಿತ ಅಥವಾ ಬ್ಯಾಂಕ್ ಖಾತೆ ಬ್ಲಾಕ್ ಆಗಿದೆ ಎಂದು ಸಂದೇಶ ಕಳುಹಿಸುತ್ತಾರೆ. ಗಾಬರಿಯಾಗಬೇಡಿ! ದೀರ್ಘವಾದ ಉಸಿರನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ. ಕಳುಹಿಸಿದ ಸಂಖ್ಯೆಯನ್ನು ಗಮನಿಸಿ - ಅದು 10 ಅಂಕಿಯ ಸಾಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಾಗಿದ್ದರೆ ಅದು 100% ಸುಳ್ಳು. ಯಾವುದೇ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ."
    },
    {
      keywords: ["ಆಹಾರ", "ಆರ್ಡರ್", "ಸ್ವಿಗ್ಗಿ", "ಜೊಮ್ಯಾಟೊ", "ಬರ್ಗರ್", "ಪಿಜ್ಜಾ"],
      answer: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಆಹಾರ ಆರ್ಡರ್ ಮಾಡಲು Swiggy ಅಥವಾ Zomato ಬಳಸಿ. ಹೋಟೆಲ್ ರೇಟಿಂಗ್ಸ್ ಗಮನಿಸಿ (4+ ಸ್ಟಾರ್ ಉತ್ತಮ). ಸುರಕ್ಷಿತವಾಗಿರಲು 'Cash on Delivery' ಆಯ್ಕೆ ಮಾಡಿ, ಆಹಾರ ನಿಮ್ಮ ಕೈಗೆ ತಲುಪಿದ ನಂತರವೇ ಹಣ ಪಾವತಿಸಿ."
    },
    {
      keywords: ["ಔಷಧ", "ಮಾತ್ರೆ", "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್", "ಮೆಡಿಸಿನ್", "ನೆಟ್‌ಮೆಡ್ಸ್", "1mg"],
      answer: "ಔಷಧಗಳನ್ನು 1mg, Apollo Pharmacy ಅಥವಾ Netmeds ನಂತಹ ಅಧಿಕೃತ ಆಪ್‌ಗಳಿಂದ ಮಾತ್ರ ಖರೀದಿಸಿ. ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಔಷಧಿಗಳಿಗಾಗಿ ವೈದ್ಯರ ಚೀಟಿಯ ಫೋಟೋ ತೆಗೆದು ಆಪ್‌ನಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಅಪರಿಚಿತ ಸೈಟ್‌ಗಳಿಂದ ಖರೀದಿಸಬೇಡಿ."
    },
    {
      keywords: ["ವಾಟ್ಸಾಪ್", "ವಾಟ್ಸಾಪ್", "ಬ್ಲಾಕ್", "ಫಾರ್ವರ್ಡ್", "ಅಪರಿಚಿತ"],
      answer: "ವಾಟ್ಸಾಪ್ ಸುರಕ್ಷತೆ: 1) ಪ್ರೊಫೈಲ್ ಫೋಟೋ ಗೌಪ್ಯತೆಯನ್ನು 'My Contacts' ಗೆ ಬದಲಾಯಿಸಿ. 2) ಅಪರಿಚಿತ ಸಂಖ್ಯೆಗಳಿಂದ ಕರೆ ಬಂದರೆ ಸ್ವೀಕರಿಸಬೇಡಿ ಮತ್ತು ತಕ್ಷಣ 'Block' ಒತ್ತಿ. 3) ಸುಳ್ಳು ಸಂದೇಶಗಳನ್ನು ಇತರರಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡಬೇಡಿ."
    },
    {
      keywords: ["ಡೌನ್‌ಲೋಡ್", "ಆಪ್", "ಪ್ಲೇ ಸ್ಟೋರ್", "ಇನ್‌ಸ್ಟಾಲ್"],
      answer: "ಯಾವಾಗಲೂ ಆಪ್‌ಗಳನ್ನು **Google Play Store** ಅಥವಾ **App Store** ನಿಂದ ಮಾತ್ರ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ. ವಾಟ್ಸಾಪ್ ಲಿಂಕ್‌ಗಳ ಮೂಲಕ ಅಥವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳ ಮೂಲಕ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಡಿ, ಇದು ಫೋನ್‌ಗೆ ವೈರಸ್ ತರಬಹುದು."
    },
    {
      keywords: ["ಪಾಸ್‌ವರ್ಡ್", "ಪಿನ್", "ಲಾಕ್", "ಕೋಡ್", "ಪ್ಯಾಟರ್ನ್"],
      answer: "ಫೋನ್ ಲಾಕ್ ಸ್ಕ್ರೀನ್ ಸುರಕ್ಷತೆಗೆ ಅತ್ಯಂತ ಮುಖ್ಯ. '1234', '0000' ಅಥವಾ ನಿಮ್ಮ ಜನ್ಮ ವರ್ಷವನ್ನು ಪಾಸ್‌ವರ್ಡ್ ಆಗಿ ಬಳಸಬೇಡಿ. ನೆನಪಿನಲ್ಲಿ ಉಳಿಯುವ ಯಾವುದೇ ವಿಶಿಷ್ಟ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ."
    },
    {
      keywords: ["ನಮಸ್ತೆ", "ಹಲೋ", "ಹೇಗಿದ್ದೀರಾ", "ಹೇಗಿದ್ದೀರಿ", "ಶುಭೋದಯ", "ಆರಾಮ"],
      answer: "ನಮಸ್ತೆ ನನ್ನ ಸ್ನೇಹಿತರೇ! ನಾನು ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೇನೆ, ವಿಚಾರಿಸಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು. ಇಂದು ನೀವು ಹೇಗಿದ್ದೀರಿ? ಸರಿಯಾಗಿ ನೀರು ಕುಡಿದಿರಾ, ಸ್ವಲ್ಪ ಸಮಯ ವಾಕ್ ಮಾಡಿದಿರಾ? ಆರೋಗ್ಯವಾಗಿರಲು ಪ್ರತಿದಿನ ಸ್ವಲ್ಪ ಸಮಯ ವಾಕ್ ಮಾಡುವುದು ಮತ್ತು ಕುಟುಂಬದವರೊಂದಿಗೆ ಮಾತನಾಡುವುದು ಮುಖ್ಯ!"
    }
  ]
};

export const fallbackFAQ = {
  en: "I am here to help you stay safe online! You can ask me about OTPs, UPI payments, food and medicine orders, WhatsApp safety, blocking scammers, passwords, or downloading apps. Try tapping one of the helper questions below or type a short phrase.",
  hi: "मैं आपकी ऑनलाइन सुरक्षा में मदद करने के लिए यहाँ हूँ! आप मुझसे OTP, UPI भुगतान, भोजन और दवा के ऑर्डर, व्हाट्सएप सुरक्षा, पासवर्ड या ऐप डाउनलोड करने के बारे में पूछ सकते हैं। नीचे दिए गए सहायता प्रश्नों को छुएं या अपना प्रश्न लिखें।",
  kn: "ನಾನು ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಸುರಕ್ಷತೆಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇನೆ! ನೀವು ನನ್ನನ್ನು ಒಟಿಪಿ, ಯುಪಿಐ ಪಾವತಿಗಳು, ಆಹಾರ ಮತ್ತು ಔಷಧ ಆರ್ಡರ್, ವಾಟ್ಸಾಪ್ ಸುರಕ್ಷತೆ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಬಗ್ಗೆ ಕೇಳಬಹುದು. ಕೆಳಗಿನ ಪ್ರಶ್ನೆಗಳನ್ನು ಒತ್ತಿ ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಬರೆಯಿರಿ."
};
