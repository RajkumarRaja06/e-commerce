import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtrtOG1fM2dHjafIXBQB9G8EzU0gcE2zw',
  authDomain: 'e-commerce-authenticatio-64103.firebaseapp.com',
  projectId: 'e-commerce-authenticatio-64103',
  storageBucket: 'e-commerce-authenticatio-64103.appspot.com',
  messagingSenderId: '865968872104',
  appId: '1:865968872104:web:418d1c0775a4552b5c809d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
