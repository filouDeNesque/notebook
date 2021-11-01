import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEDOTY6CRTi-cDNoYdm5buYx_i9B6i_eY",
  authDomain: "notebook-e37cc.firebaseapp.com",
  projectId: "notebook-e37cc",
  storageBucket: "notebook-e37cc.appspot.com",
  messagingSenderId: "740860280052",
  appId: "1:740860280052:web:5ce3393f3f8ac4df5c72a1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
