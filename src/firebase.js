// Firebase Configuration for SafeSteps
// 
// ⚠️ IMPORTANT: You MUST replace the placeholder values below with your 
// actual Firebase project config. Here's how to get them:
//
// 1. Go to https://console.firebase.google.com/
// 2. Click "Create a project" (or select existing)
// 3. Name it "SafeSteps" → Continue
// 4. Disable Google Analytics (optional) → Create Project
// 5. Click the Web icon (</>) to add a web app
// 6. Register app name as "SafeSteps" → Register
// 7. Copy the firebaseConfig object and paste it below
// 8. Go to Authentication → Sign-in method → Enable "Google"
// 9. Add your email as the support email → Save
//
// For Android (Capacitor):
// 10. Go to Project Settings → Add an Android app
// 11. Package name: com.safesteps.app
// 12. Download google-services.json → place in android/app/
// 13. Add SHA-1 fingerprint (get via: keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android)

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRHdh7IhXGXIq7hIMkdjqTiblwz14oyFU",
  authDomain: "safe-steps-app.firebaseapp.com",
  projectId: "safe-steps-app",
  storageBucket: "safe-steps-app.firebasestorage.app",
  messagingSenderId: "511199210214",
  appId: "1:511199210214:web:075cf75d7265b112e82927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

export default app;
