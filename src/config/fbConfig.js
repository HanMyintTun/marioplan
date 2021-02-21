import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBlwPUJYKcAlnk77fEhaCAuTVuhvdypGn0",
    authDomain: "marioplan-3e8a3.firebaseapp.com",
    projectId: "marioplan-3e8a3",
    storageBucket: "marioplan-3e8a3.appspot.com",
    messagingSenderId: "674406854770",
    appId: "1:674406854770:web:02cb1361362486870c12eb",
    measurementId: "G-3WDCBXC9HQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;