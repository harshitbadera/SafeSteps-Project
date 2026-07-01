import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Localization State
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('safesteps_language') || 'en';
  });

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('safesteps_darkMode') === 'true';
  });

  // User details
  const [fontScale, setFontScale] = useState(() => {
    const saved = localStorage.getItem('safesteps_fontScale');
    return saved ? parseFloat(saved) : 1.25; // default to 1.25 for senior readability
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('safesteps_userName') || '';
  });

  const [voiceSpeed, setVoiceSpeed] = useState(() => {
    const saved = localStorage.getItem('safesteps_voiceSpeed');
    return saved ? parseFloat(saved) : 0.85; // slightly slower voice for senior comprehension
  });

  const [familyContact, setFamilyContact] = useState(() => {
    return localStorage.getItem('safesteps_familyContact') || '9876543210';
  });

  // Game progress states
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('safesteps_completedLessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('safesteps_streak');
    return saved ? parseInt(saved) : 1;
  });

  const [stars, setStars] = useState(() => {
    const saved = localStorage.getItem('safesteps_stars');
    return saved ? parseInt(saved) : 0;
  });

  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem('safesteps_badges');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentUtterance, setCurrentUtterance] = useState(null);

  // Sync settings to localStorage
  useEffect(() => {
    localStorage.setItem('safesteps_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('safesteps_darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('safesteps_fontScale', fontScale);
    document.documentElement.style.setProperty('--font-scale', fontScale);
  }, [fontScale]);

  useEffect(() => {
    localStorage.setItem('safesteps_userName', userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('safesteps_voiceSpeed', voiceSpeed);
  }, [voiceSpeed]);

  useEffect(() => {
    localStorage.setItem('safesteps_familyContact', familyContact);
  }, [familyContact]);

  useEffect(() => {
    localStorage.setItem('safesteps_completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('safesteps_streak', streak);
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('safesteps_stars', stars);
  }, [stars]);

  useEffect(() => {
    localStorage.setItem('safesteps_badges', JSON.stringify(badges));
  }, [badges]);

  // Multilingual Text-To-Speech
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert("Voice features are not supported on this browser.");
      return;
    }

    // Stop current speech if any
    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    if (!text) return;

    // Clean up text
    const cleanedText = text.replace(/[*#_`]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.rate = voiceSpeed;
    
    // Set speech language tag based on active selection
    if (language === 'hi') {
      utterance.lang = 'hi-IN';
    } else if (language === 'kn') {
      utterance.lang = 'kn-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    // Find and set correct native voice matching the active language
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => {
      const vLang = v.lang.toLowerCase();
      if (language === 'hi') return vLang.startsWith('hi');
      if (language === 'kn') return vLang.startsWith('kn');
      return vLang.startsWith('en');
    });

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentUtterance(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentUtterance(null);
    };

    setCurrentUtterance(utterance);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentUtterance(null);
    }
  };

  // Sound effects generator
  const playSound = (type) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        osc.start();
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.15); // G5
        osc.stop(audioCtx.currentTime + 0.35);
      } else if (type === 'incorrect') {
        osc.frequency.setValueAtTime(207.65, audioCtx.currentTime); // G#3
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        osc.start();
        osc.frequency.setValueAtTime(174.61, audioCtx.currentTime + 0.15); // F3
        osc.stop(audioCtx.currentTime + 0.35);
      } else if (type === 'click') {
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
      } else if (type === 'unlock') {
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        osc.start();
        notes.forEach((freq, idx) => {
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime + (idx * 0.1));
        });
        osc.stop(audioCtx.currentTime + 0.45);
      }
    } catch (e) {
      console.warn("AudioContext failed", e);
    }
  };

  const completeLesson = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      const updated = [...completedLessons, lessonId];
      setCompletedLessons(updated);
      setStars(prev => prev + 15);
      playSound('unlock');

      // Check for unlockable badges
      const newBadges = [...badges];
      if (lessonId === 1 && !newBadges.includes('Smart Touch Master')) {
        newBadges.push('Smart Touch Master');
      }
      if (lessonId === 2 && !newBadges.includes('Scam Spotter')) {
        newBadges.push('Scam Spotter');
      }
      if (lessonId === 3 && !newBadges.includes('UPI Safe Payer')) {
        newBadges.push('UPI Safe Payer');
      }
      if (lessonId === 4 && !newBadges.includes('Smart Food Orderer')) {
        newBadges.push('Smart Food Orderer');
      }
      if (lessonId === 5 && !newBadges.includes('Safe Medicine Buyer')) {
        newBadges.push('Safe Medicine Buyer');
      }
      if (lessonId === 6 && !newBadges.includes('App Security Expert')) {
        newBadges.push('App Security Expert');
      }
      if (lessonId === 7 && !newBadges.includes('Digital Safety Champion')) {
        newBadges.push('Digital Safety Champion');
      }
      setBadges(newBadges);
    }
  };

  const increaseStreak = () => {
    setStreak(prev => prev + 1);
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      fontScale,
      setFontScale,
      userName,
      setUserName,
      voiceSpeed,
      setVoiceSpeed,
      familyContact,
      setFamilyContact,
      completedLessons,
      completeLesson,
      streak,
      increaseStreak,
      stars,
      setStars,
      badges,
      isSpeaking,
      speakText,
      stopSpeaking,
      playSound,
      darkMode,
      setDarkMode
    }}>
      {children}
    </AppContext.Provider>
  );
};
