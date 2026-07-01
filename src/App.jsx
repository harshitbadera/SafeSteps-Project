import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

// App Pages
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

// Protected route wrapper — redirects to login if not authenticated
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useApp();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Auth route wrapper — redirects to home if already authenticated
function AuthRoute({ children }) {
  const { isAuthenticated } = useApp();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes — only accessible when NOT logged in */}
      <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />

      {/* Protected routes — require authentication */}
      <Route path="/welcome" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/lesson/:id" element={<ProtectedRoute><LessonDetail /></ProtectedRoute>} />
      <Route path="/simulator/:id" element={<ProtectedRoute><Simulator /></ProtectedRoute>} />
      <Route path="/quiz/:id" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
      <Route path="/companion" element={<ProtectedRoute><Companion /></ProtectedRoute>} />
      <Route path="/checklists" element={<ProtectedRoute><Checklists /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/sos" element={<ProtectedRoute><Sos /></ProtectedRoute>} />
      <Route path="/story" element={<ProtectedRoute><StoryGame /></ProtectedRoute>} />

      {/* Fallback — redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}
