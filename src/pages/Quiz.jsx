import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { lessonsData } from '../data/lessonsData';
import { translations } from '../data/translations';
import Navbar from '../components/Navbar';
import SpeechSpeaker from '../components/SpeechSpeaker';

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, playSound, speakText, stopSpeaking, completeLesson } = useApp();

  const lesson = lessonsData.find(l => l.id === parseInt(id));
  const questions = lesson?.quiz || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const t = translations[language] || translations.en;
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (!lesson || questions.length === 0) {
      navigate('/');
      return;
    }
    stopSpeaking();
    const qText = currentQuestion.question[language] || currentQuestion.question.en;
    const choicesText = currentQuestion.choices.map((c, i) => {
      const cText = c.text[language] || c.text.en;
      return `Option ${String.fromCharCode(65 + i)}. ${cText}`;
    }).join(". ");
    
    speakText(`Question: ${qText}. Here are your options: ${choicesText}`);
  }, [currentQuestionIndex, lesson, navigate, language]);

  if (!lesson || questions.length === 0) return null;

  const handleChoiceSelect = (choiceIndex) => {
    if (hasSubmitted) return;
    playSound('click');
    setSelectedChoiceIndex(choiceIndex);
  };

  const handleSubmit = () => {
    if (selectedChoiceIndex === null || hasSubmitted) return;

    setHasSubmitted(true);
    const chosenChoice = currentQuestion.choices[selectedChoiceIndex];
    const isCorrect = chosenChoice.isCorrect;

    const explText = currentQuestion.explanation[language] || currentQuestion.explanation.en;

    if (isCorrect) {
      playSound('correct');
      speakText(`${language === 'hi' ? 'यह सही है!' : language === 'kn' ? 'ಇದು ಸರಿಯಾದ ಉತ್ತರ!' : 'Correct!'} ${explText}`);
    } else {
      playSound('incorrect');
      speakText(`${language === 'hi' ? 'यह सही नहीं है।' : language === 'kn' ? 'ಇದು ತಪ್ಪು ಉತ್ತರ!' : 'Incorrect.'} ${explText}`);
    }
  };

  const handleNext = () => {
    playSound('click');
    stopSpeaking();
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedChoiceIndex(null);
      setHasSubmitted(false);
    } else {
      setQuizFinished(true);
      completeLesson(lesson.id);
      
      const starsSpeak = {
        en: `Congratulations! You completed the quiz for ${lesson.title.en}. You earned 15 stars!`,
        hi: `बधाई हो! आपने ${lesson.title.hi} की क्विज़ पूरी कर ली है। आपको 15 तारे मिले!`,
        kn: `ಅಭಿನಂದನೆಗಳು! ನೀವು ${lesson.title.kn} ರ ಕ್ವಿಜ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಸಿದ್ದೀರಿ. ನಿಮಗೆ 15 ನಕ್ಷತ್ರಗಳು ಲಭಿಸಿವೆ!`
      };
      speakText(starsSpeak[language] || starsSpeak.en);
    }
  };

  const qText = currentQuestion.question[language] || currentQuestion.question.en;
  const explText = currentQuestion.explanation[language] || currentQuestion.explanation.en;

  return (
    <div className="app-container">
      <Navbar title={`${lesson.title[language]} Quiz`} />

      <div className="scrollable-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {!quizFinished ? (
          <>
            <div style={{ textAlign: 'center', fontWeight: '800', color: 'var(--color-primary-dark)', fontSize: '15px' }}>
              {t.questionProgress.replace('{current}', currentQuestionIndex + 1).replace('{total}', questions.length)}
            </div>

            {/* Question Card */}
            <div className="card" style={{ flex: 1, minHeight: '140px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '20px', lineHeight: '1.4' }}>{qText}</h2>
              </div>
              <SpeechSpeaker text={qText} />
            </div>

            {/* Choices list */}
            <div className="quiz-choices">
              {currentQuestion.choices.map((choice, index) => {
                const letter = String.fromCharCode(65 + index);
                let choiceClass = "";

                if (hasSubmitted) {
                  if (choice.isCorrect) {
                    choiceClass = "correct";
                  } else if (selectedChoiceIndex === index) {
                    choiceClass = "incorrect";
                  }
                } else if (selectedChoiceIndex === index) {
                  choiceClass = "selected";
                }

                const choiceText = choice.text[language] || choice.text.en;

                return (
                  <button 
                    key={index} 
                    className={`choice-btn ${choiceClass}`}
                    onClick={() => handleChoiceSelect(index)}
                    disabled={hasSubmitted}
                    aria-label={`Option ${letter}: ${choiceText}`}
                  >
                    <div className="choice-letter">{letter}</div>
                    <div style={{ flex: 1 }}>{choiceText}</div>
                    {hasSubmitted && choice.isCorrect && <span style={{ fontSize: '20px' }}>✅</span>}
                    {hasSubmitted && !choice.isCorrect && selectedChoiceIndex === index && <span style={{ fontSize: '20px' }}>❌</span>}
                  </button>
                );
              })}
            </div>

            {/* Actions / Feedback */}
            {hasSubmitted ? (
              <div className="card card-warm" style={{ padding: '16px', borderLeft: '8px solid var(--color-accent)' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--color-accent-dark)' }}>{t.explanationHeader}</h3>
                <p style={{ fontSize: '14px', marginTop: '6px', lineHeight: '1.4' }}>
                  {explText}
                </p>
                <button 
                  className="btn-large btn-primary" 
                  onClick={handleNext}
                  style={{ marginTop: '16px' }}
                >
                  {currentQuestionIndex === questions.length - 1 ? t.quizFinish : t.quizNextQ}
                </button>
              </div>
            ) : (
              <button 
                className="btn-large btn-primary" 
                onClick={handleSubmit}
                disabled={selectedChoiceIndex === null}
                style={{ opacity: selectedChoiceIndex === null ? 0.6 : 1 }}
              >
                {t.checkAnswerBtn}
              </button>
            )}
          </>
        ) : (
          /* Victory Screen */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 10px' }}>
            <div style={{ fontSize: '80px', animation: 'hover-shake 2.5s infinite' }}>🏆🎉</div>
            
            <h1 style={{ fontFamily: 'Fredoka', color: 'var(--color-primary)' }}>{t.quizFinishedTitle}</h1>
            <h2 style={{ fontSize: '18px', color: 'var(--color-gray-dark)' }}>
              {t.quizFinishedDesc}
            </h2>

            <div className="card card-warm" style={{ width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '32px' }}>⭐ ⭐ ⭐</div>
              <h3 style={{ fontSize: '24px', color: 'var(--color-primary-dark)' }}>{t.quizEarnedStars}</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-dark)' }}>{t.quizStarsAdded}</p>
            </div>

            {lesson.badge && (
              <div className="card" style={{ width: '100%', borderColor: 'var(--color-secondary)', padding: '16px', display: 'flex', gap: '14px', alignItems: 'center', textAlign: 'left' }}>
                <div style={{ fontSize: '48px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                  🏅
                </div>
                <div>
                  <h3 style={{ fontSize: '14px', color: 'var(--color-primary-dark)' }}>{t.badgeUnlocked}</h3>
                  <h2 style={{ fontSize: '18px', color: 'var(--color-primary)' }}>{lesson.badge[language] || lesson.badge.en}</h2>
                </div>
              </div>
            )}

            <button 
              className="btn-large btn-primary" 
              onClick={() => { playSound('click'); navigate('/'); }}
              style={{ width: '100%', marginTop: '10px' }}
            >
              {t.backToMapBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
