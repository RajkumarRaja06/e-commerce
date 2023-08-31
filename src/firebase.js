import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuFrZc2paqu9J2CpK5Tw6OF0ZNm59atIU',
  authDomain: 'react-e-commerce-f6342.firebaseapp.com',
  projectId: 'react-e-commerce-f6342',
  storageBucket: 'react-e-commerce-f6342.appspot.com',
  messagingSenderId: '50949042573',
  appId: '1:50949042573:web:2dd21c4f0679e848390dc4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
