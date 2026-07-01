import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';

export default function BottomNav({ activeTab }) {
  const navigate = useNavigate();
  const { language, playSound, stopSpeaking } = useApp();

  const handleNav = (path) => {
    playSound('click');
    stopSpeaking();
    navigate(path);
  };

  const t = translations[language] || translations.en;

  return (
    <div className="bottom-nav" style={{ height: '84px', borderTop: '4px solid var(--color-primary)' }}>
      {/* 1. Map Tab */}
      <button 
        className={`nav-item ${activeTab === 'map' ? 'active' : ''}`}
        onClick={() => handleNav('/')}
        aria-label={t.tabLessons}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-item-icon">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
        <span style={{ fontSize: '10px' }}>{t.tabLessons}</span>
      </button>

      {/* 2. Companion Chat Tab */}
      <button 
        className={`nav-item ${activeTab === 'companion' ? 'active' : ''}`}
        onClick={() => handleNav('/companion')}
        aria-label={t.tabChat}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-item-icon">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span style={{ fontSize: '10px' }}>{t.tabChat}</span>
      </button>

      {/* 3. Story Mode Game Tab */}
      <button 
        className={`nav-item ${activeTab === 'story' ? 'active' : ''}`}
        onClick={() => handleNav('/story')}
        aria-label={t.tabStory}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-item-icon">
          <polygon points="5 3 19 12 5 21 5 3" fill="none" />
        </svg>
        <span style={{ fontSize: '10px' }}>{t.tabStory}</span>
      </button>

      {/* 4. Checklists Tab */}
      <button 
        className={`nav-item ${activeTab === 'checklists' ? 'active' : ''}`}
        onClick={() => handleNav('/checklists')}
        aria-label={t.tabChecklists}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-item-icon">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <span style={{ fontSize: '10px' }}>{t.tabChecklists}</span>
      </button>

      {/* 5. Profile Tab */}
      <button 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => handleNav('/profile')}
        aria-label={t.tabBadges}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-item-icon">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
        <span style={{ fontSize: '10px' }}>{t.tabBadges}</span>
      </button>
    </div>
  );
}
