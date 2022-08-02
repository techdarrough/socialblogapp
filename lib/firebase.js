// import firebase dependencies
import firebase from 'firebase/app';


import 'firebase/auth';

// database
import 'firebase/firestore';
import 'firebase/storage';
// firebase app confg for unlv-social-blog-app
const firebaseConfig = {
    apiKey: "AIzaSyBSapKBTCG3Riok64iTbBk9Rfu8NzOsIsE",
    authDomain: "unlv-social-blog-app.firebaseapp.com",
    projectId: "unlv-social-blog-app",
    storageBucket: "unlv-social-blog-app.appspot.com",
    messagingSenderId: "293093482567",
    appId: "1:293093482567:web:b9e5a6ef25a76c99ff9162",
    measurementId: "G-LPV5RRGJLH"
};


// prevents next from runn instance twice
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Auth exports
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  // Firestore exports
  export const firestore = firebase.firestore();
  // using firebase clock more reilable then using user clock
  export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
  export const fromMillis = firebase.firestore.Timestamp.fromMillis;
  export const increment = firebase.firestore.FieldValue.increment; // update heart counts without have to know current counts on server
  
  // Storage exports
  export const storage = firebase.storage();
  export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED; //listens to and update progress of upload event
  
  /// Helper functions
  
  /**`
   * Gets a users/{uid} document with username
   * @param  {string} username
   */
  //async function that make a reference to theusers collection that runs a query for that username iwth a limit of 1 imposed
  export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }
  
  /**`
   * Converts a firestore document to JSON
   * @param  {DocumentSnapshot} doc
   */

  // Helper function to serialize firestore timestamp to json. Must convert to milliseconds
  export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data,
      //firestore timestamps have a toMillis method which will convert the timestamps to a number
      createdAt: data?.createdAt.toMillis() || 0,
      updatedAt: data?.updatedAt.toMillis() || 0,
    };
  }
