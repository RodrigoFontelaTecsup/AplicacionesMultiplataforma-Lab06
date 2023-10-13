// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFh9XbQsyk5mcm-y4a8Dhyq8wTm9xJzSI',
  authDomain: 'lab06-c4423.firebaseapp.com',
  projectId: 'lab06-c4423',
  storageBucket: 'lab06-c4423.appspot.com',
  messagingSenderId: '460950079810',
  appId: '1:460950079810:web:65c23d274e0ff7f49260db',
};

initializeApp(firebaseConfig);

export const database = getFirestore();
