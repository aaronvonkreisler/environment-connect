import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config/firebase.config';

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
// console.log(firestore);
