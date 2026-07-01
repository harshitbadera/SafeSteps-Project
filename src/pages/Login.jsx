import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword, getRedirectResult } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated, setUserName, playSound } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    const checkRedirect = async () => {
      try {
        setLoading(true);
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          const user = result.user;
          if (user.displayName) {
            setUserName(user.displayName);
          }
          setIsAuthenticated(true);
          navigate('/welcome');
        }
      } catch (err) {
        console.error('Redirect result error:', err);
        setError('Google sign-in failed. Please check your network or try again.');
      } finally {
        setLoading(false);
      }
    };
    checkRedirect();
  }, [navigate, setIsAuthenticated, setUserName]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    playSound('click');

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      if (user.displayName) {
        setUserName(user.displayName);
      }
      setIsAuthenticated(true);
      navigate('/welcome');
    } catch (err) {
      console.error('Login error:', err);
      const errorMessages = {
        'auth/invalid-credential': 'Invalid email or password. Please try again.',
        'auth/user-not-found': 'No account found with this email. Please sign up first.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
      };
      setError(errorMessages[err.code] || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    playSound('click');
    setLoading(true);
    setError('');

    try {
      // Check if running inside Capacitor (native Android/iOS WebView)
      const isNative = window.Capacitor || window.location.protocol === 'file:';
      
      if (isNative) {
        const { signInWithRedirect } = await import('firebase/auth');
        await signInWithRedirect(auth, googleProvider);
      } else {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        if (user.displayName) {
          setUserName(user.displayName);
        }
        setIsAuthenticated(true);
        navigate('/welcome');
      }
    } catch (err) {
      console.error('Google login error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection.');
      } else {
        setError('Google sign-in failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Logo & Branding */}
        <div className="auth-header">
          <div className="auth-logo-icon">🛡️</div>
          <h1 className="auth-app-name">SafeSteps</h1>
          <p className="auth-tagline">Your friendly smartphone safety guide</p>
        </div>

        {/* Login Card */}
        <div className="auth-card">
          <h2 className="auth-card-title">Welcome Back</h2>
          <p className="auth-card-subtitle">Sign in to continue your learning journey</p>

          {error && (
            <div className="auth-error">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-input-group">
              <label htmlFor="login-email" className="auth-label">📧 Email</label>
              <input
                id="login-email"
                type="email"
                className="auth-input"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="auth-input-group">
              <label htmlFor="login-password" className="auth-label">🔒 Password</label>
              <div className="auth-password-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn-large btn-primary auth-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="auth-spinner" />
              ) : (
                <>Sign In 🚀</>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          {/* Google Sign In */}
          <button
            className="auth-google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
            Sign in with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="auth-footer">
          <p>Don't have an account?</p>
          <button
            className="auth-link-btn"
            onClick={() => { playSound('click'); navigate('/signup'); }}
          >
            Create Account →
          </button>
        </div>
      </div>
    </div>
  );
}
