import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { FIREBASE_CONFIG } from "../../utils/config/config";

const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.API_KEY,
  authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
  projectId: FIREBASE_CONFIG.PROJECT_ID,
  storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CONFIG.MESSAGING_SENDER_ID,
  appId: FIREBASE_CONFIG.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
