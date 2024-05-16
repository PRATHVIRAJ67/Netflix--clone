import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZT-apSsnt08SBv2cgZDiMhaA7EduhRZA",
  authDomain: "chat-app-recent-c3513.firebaseapp.com",
  projectId: "chat-app-recent-c3513",
  storageBucket: "chat-app-recent-c3513.appspot.com",
  messagingSenderId: "11953890819",
  appId: "1:11953890819:web:f04a59186f694d08f69036"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
