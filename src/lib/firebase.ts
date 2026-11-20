import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCIScWsmYYyc4wHy_eEKJOQJ3FIFUe1gSo",
  authDomain: "dhanyabhat-aa601.firebaseapp.com",
  databaseURL: "https://dhanyabhat-aa601-default-rtdb.firebaseio.com",
  projectId: "dhanyabhat-aa601",
  storageBucket: "dhanyabhat-aa601.firebasestorage.app",
  messagingSenderId: "561967578859",
  appId: "1:561967578859:web:d57d4776743d8864d6c8ae",
  measurementId: "G-YQD80ZP2GJ",
};

// Initialize Firebase (singleton pattern safe for Next.js Fast Refresh & SSR)
export const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Realtime Database instance
export const db = getDatabase(app);

// Initialize Analytics (client-side only)
export let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

