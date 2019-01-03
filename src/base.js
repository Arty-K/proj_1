import Rebase from 're-base'
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({apiKey: "AIzaSyAz1rzvuoNFX5b1Jghf-1vgh4oKkHOtGRU",
    authDomain: "myfirebaseproj-87676.firebaseapp.com",
    databaseURL: "https://myfirebaseproj-87676.firebaseio.com",
    projectId: "myfirebaseproj-87676",
    storageBucket: "myfirebaseproj-87676.appspot.com",
    messagingSenderId: "1005645150420"});
const base = Rebase.createClass(firebaseApp.database());

//named export
export {firebaseApp};

//default export
export default base;
