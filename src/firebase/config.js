import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCkBP26YEZlszl855Bgmgx-JL1YfF9Z8YI",
    authDomain: "olx-clone-1ace5.firebaseapp.com",
    projectId: "olx-clone-1ace5",
    storageBucket: "olx-clone-1ace5.appspot.com",
    messagingSenderId: "419861718623",
    appId: "1:419861718623:web:c85304a352589607311dea",
    measurementId: "G-72FK4616EQ"
  };


 export default firebase.initializeApp(firebaseConfig)