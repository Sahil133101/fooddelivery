import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyC-yrujUukWFADVKQGTvZd1o_-7V2Fof9w",
    authDomain: "fooddelivery-dcfce.firebaseapp.com",
    databaseURL: "https://fooddelivery-dcfce-default-rtdb.firebaseio.com",
    projectId: "fooddelivery-dcfce",
    storageBucket: "fooddelivery-dcfce.appspot.com",
    messagingSenderId: "201598146211",
    appId: "1:201598146211:web:bc0920f10f359a02809116"
  };

 const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

 const firestore = getFirestore(app); 

 const storage = getStorage(app);
 
 export {app, firestore, storage};