import * as firebase from "firebase"

import { FirebaseConfig } from "../config/keys";
console.log(FirebaseConfig);
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
console.log(databaseRef);
// console.log(databaseRef.child("todos"));
export const todosRef = databaseRef.child("todos");