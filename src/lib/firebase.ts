import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "velocityai-1bf8b",
  appId: "1:685389277906:web:0e1d846739def83e2b9b0b",
  storageBucket: "velocityai-1bf8b.firebasestorage.app",
  apiKey: "AIzaSyBPxPbXwB-0l4BkB1WB0hJZB_QSamyREbQ",
  authDomain: "velocityai-1bf8b.firebaseapp.com",
  messagingSenderId: "685389277906",
  measurementId: "G-FX1T3EVB5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
