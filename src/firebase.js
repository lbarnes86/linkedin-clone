import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0fooujOqFzxIjv_C1s0lkzcBFar3yqVs",
    authDomain: "linked-clone-4a813.firebaseapp.com",
    projectId: "linked-clone-4a813",
    storageBucket: "linked-clone-4a813.appspot.com",
    messagingSenderId: "222821698913",
    appId: "1:222821698913:web:0b02596676e1cbc298c920",
    measurementId: "G-6SH4934WQG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;