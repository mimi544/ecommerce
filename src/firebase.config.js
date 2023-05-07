import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
	apiKey: "AIzaSyDxfaAPjLep0Rw4UWs7bl4f9pouBttBuZQ",
	authDomain: "ecommerce-79aec.firebaseapp.com",
	projectId: "ecommerce-79aec",
	storageBucket: "ecommerce-79aec.appspot.com",
	messagingSenderId: "569772102238",
	appId: "1:569772102238:web:b5968a9beb5c98f4df5acf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
