import * as firebase from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJMEYkQFGE2KEk-540a2V0BlT3b6IPcoQ",
  authDomain: "playerone-ecommerce.firebaseapp.com",
  projectId: "playerone-ecommerce",
  storageBucket: "playerone-ecommerce.appspot.com",
  messagingSenderId: "268638718867",
  appId: "1:268638718867:web:6d1636cfe49f09a1a1f666"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)