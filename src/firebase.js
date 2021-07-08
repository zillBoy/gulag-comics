import firebase from 'firebase'
import { firebase_key } from './services/Api'

const firebaseConfig = {
  apiKey: firebase_key.apiKey,
  authDomain: firebase_key.authDomain,
  databaseURL: firebase_key.databaseURL,
  projectId: firebase_key.projectId,
  storageBucket: firebase_key.storageBucket,
  messagingSenderId: firebase_key.messagingSenderId,
  appId: firebase_key.appId
};

firebase.initializeApp(firebaseConfig)
export default firebase