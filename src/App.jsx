import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Pages
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import LessonDetail from './pages/LessonDetail';
import Simulator from './components/Simulator';
import Quiz from './pages/Quiz';
import Companion from './pages/Companion';
import Checklists from './pages/Checklists';
import Profile from './pages/Profile';
import Sos from './pages/Sos';
import StoryGame from './pages/StoryGame';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
          <Route path="/simulator/:id" element={<Simulator />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/companion" element={<Companion />} />
          <Route path="/checklists" element={<Checklists />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sos" element={<Sos />} />
          <Route path="/story" element={<StoryGame />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
