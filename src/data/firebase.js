import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDWVTuHSaM7oKIak3-m4GbUc8jGsYxDgfc",
  authDomain: "tango-tropical-grill.firebaseapp.com",
  databaseURL: "https://tango-tropical-grill.firebaseio.com",
  projectId: "tango-tropical-grill",
  storageBucket: "tango-tropical-grill.appspot.com",
  messagingSenderId: "348952232923"
};

firebase.initializeApp(config);
export default firebase;
