import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

console.log("apiKey : ", process.env.REACT_APP_FIREBASE_API_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-db-a5678.firebaseapp.com",
  projectId: "crwn-clothing-db-a5678",
  storageBucket: "crwn-clothing-db-a5678.appspot.com",
  messagingSenderId: "926297003144",
  appId: "1:926297003144:web:66751ac4410eb6b235bb3d",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

console.log("firebase.utils active")
