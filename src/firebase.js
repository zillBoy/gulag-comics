import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCAZBIDSp1FBSMkK_-ULLxVCaB7qKihiOw",
  authDomain: "test-7603b.firebaseapp.com",
  databaseURL: "https://test-7603b-default-rtdb.firebaseio.com",
  projectId: "test-7603b",
  storageBucket: "test-7603b.appspot.com",
  messagingSenderId: "635968907461",
  appId: "1:635968907461:web:d7a085a0c5e88ea433e8ac"
};

firebase.initializeApp(firebaseConfig)
export default firebase