import React from 'react';
import { useApp } from '../context/AppContext';

export default function SpeechSpeaker({ text }) {
  const { speakText, isSpeaking, playSound, stopSpeaking } = useApp();

  const handleSpeak = (e) => {
    e.stopPropagation();
    playSound('click');
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speakText(text);
    }
  };

  return (
    <button 
      className={`speaker-btn ${isSpeaking ? 'speaking' : ''}`}
      onClick={handleSpeak}
      title="Read text out loud"
      aria-label="Read text out loud"
    >
      {isSpeaking ? (
        // Stop icon (Square)
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
        </svg>
      ) : (
        // Speaker sound icon
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}
