import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import SpeechSpeaker from '../components/SpeechSpeaker';

export default function Sos() {
  const { language, familyContact, playSound, speakText, stopSpeaking } = useApp();
  const t = translations[language] || translations.en;

  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState("");
  const [locStatus, setLocStatus] = useState("loading");

  useEffect(() => {
    // Speak emergency announcement automatically on page load
    stopSpeaking();
    setTimeout(() => {
      speakText(`${t.sosActiveAlert}. ${t.sosCalmMessage}`);
    }, 300);

    // Geolocation API check
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setCoords({ lat, lng });
          setLocStatus("success");
          
          // Generate a user-readable placeholder location descriptor
          const mockAddresses = {
            en: `Latitude ${lat}, Longitude ${lng} (Near your current location)`,
            hi: `अक्षांश ${lat}, देशांतर ${lng} (आपके वर्तमान स्थान के पास)`,
            kn: `ಅಕ್ಷಾಂಶ ${lat}, ರೇಖಾಂಶ ${lng} (ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳದ ಹತ್ತಿರ)`
          };
          setAddress(mockAddresses[language] || mockAddresses.en);
        },
        (error) => {
          console.warn("Location error", error);
          setLocStatus("error");
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    } else {
      setLocStatus("error");
    }

    return () => stopSpeaking();
  }, [language]);

  const handleCall = () => {
    playSound('click');
  };

  return (
    <div className="app-container" style={{ backgroundColor: '#fff5f5' }}>
      <Navbar title={t.sosTitle} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Main Alarm Badge */}
        <div style={{ 
          backgroundColor: '#ff8787', 
          border: '4px solid #fa5252', 
          borderRadius: 'var(--border-radius-large)', 
          padding: '20px', 
          textAlign: 'center',
          boxShadow: '0 8px 16px rgba(250, 82, 82, 0.15)'
        }}>
          <div style={{ fontSize: '64px', animation: 'hover-shake 1.5s infinite' }}>🚨</div>
          <h1 style={{ color: '#c92a2a', fontSize: '24px', fontFamily: 'Fredoka', marginTop: '8px' }}>
            {t.sosActiveAlert}
          </h1>
          <p style={{ fontSize: '15px', color: '#82c91e', fontWeight: 'bold', marginTop: '6px' }}>
            💖 {t.sosCalmMessage}
          </p>
        </div>

        {/* Quick Dials */}
        <div className="card" style={{ borderColor: '#ffa8a8', backgroundColor: '#fff8f8' }}>
          <h3 style={{ color: '#c92a2a', marginBottom: '14px' }}>{t.sosQuickDial}</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Police (100) */}
            <a 
              href="tel:100" 
              className="btn-large btn-accent" 
              style={{ backgroundColor: '#e03131', borderColor: '#c92a2a', color: 'white', textDecoration: 'none' }}
              onClick={handleCall}
            >
              📞 {t.sosDialPolice}
            </a>

            {/* Emergency Service (112) */}
            <a 
              href="tel:112" 
              className="btn-large btn-accent" 
              style={{ backgroundColor: '#f03e3e', borderColor: '#c92a2a', color: 'white', textDecoration: 'none' }}
              onClick={handleCall}
            >
              📞 {t.sosDialEmergency}
            </a>

            {/* Family Contact */}
            {familyContact && (
              <a 
                href={`tel:${familyContact}`} 
                className="btn-large btn-primary" 
                style={{ backgroundColor: '#2f9e44', borderColor: '#2b8a3e', color: 'white', textDecoration: 'none' }}
                onClick={handleCall}
              >
                👨‍👩‍👧‍👦 {t.sosFamilyContact}: {familyContact}
              </a>
            )}

          </div>
        </div>

        {/* Live Location Panel */}
        <div className="card" style={{ borderColor: '#ffa8a8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{ color: '#c92a2a' }}>{t.sosLocationHeader}</h3>
            {coords && <SpeechSpeaker text={`${t.sosLocationHelp} ${address}`} />}
          </div>

          {locStatus === 'loading' && (
            <div style={{ textAlign: 'center', padding: '10px', color: '#868e96', fontWeight: 'bold' }}>
              ⏳ {t.sosLoadingLocation}
            </div>
          )}

          {locStatus === 'error' && (
            <div style={{ color: '#c92a2a', fontSize: '14px', lineHeight: '1.4' }}>
              ❌ {t.sosNoLocation}
            </div>
          )}

          {locStatus === 'success' && coords && (
            <div style={{ backgroundColor: '#fff', border: '3px solid #ffc9c9', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#495057', fontWeight: 'bold' }}>
                {t.sosLocationHelp}
              </div>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#c92a2a', fontFamily: 'monospace', marginTop: '6px' }}>
                {coords.lat}° N, {coords.lng}° E
              </div>
              <div style={{ fontSize: '13px', color: '#868e96', marginTop: '4px' }}>
                {address}
              </div>
            </div>
          )}
        </div>

        {/* Calm instructions card */}
        <div className="card" style={{ borderColor: '#ffa8a8' }}>
          <h3 style={{ color: '#c92a2a', marginBottom: '10px' }}>{t.sosInstructionsHeader}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', textAlign: 'left', lineHeight: '1.5' }}>
            <div>{t.sosInstruction1}</div>
            <div>{t.sosInstruction2}</div>
            <div>{t.sosInstruction3}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
