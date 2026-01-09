import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrOl8Pc-lqw1H1FWJcMlB5uxnieQlW0Ro",
  authDomain: "gatsby-project-a11a4.firebaseapp.com",
  projectId: "gatsby-project-a11a4",
  storageBucket: "gatsby-project-a11a4.firebasestorage.app",
  messagingSenderId: "667984410484",
  appId: "1:667984410484:web:bb9f8ddae36a7fa348de21",
  measurementId: "G-VCW1XZ4Y2C",
}

// Prevent re-initialization in Gatsby
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0]

// Firebase Auth
export const auth = getAuth(app)

// Firebase Analytics (client-side only)
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const { getAnalytics } = await import("firebase/analytics")
    return getAnalytics(app)
  }
}
