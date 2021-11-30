import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyCj0jAy6oKCsY9qNrvJ6OkFvrVg9nDEuNE",
    authDomain: "complaint-forum-6cef6.firebaseapp.com",
    projectId: "complaint-forum-6cef6",
    storageBucket: "complaint-forum-6cef6.appspot.com",
    messagingSenderId: "440160844161",
    appId: "1:440160844161:web:5f938e7bc81a24cfca5080"
  };
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

