import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSCyRekovkDRBn2kuUSDhIYw1_bfczsV8",
  authDomain: "phanconggiangvien.firebaseapp.com",
  databaseURL:
    "https://phanconggiangvien-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "phanconggiangvien",
  storageBucket: "phanconggiangvien.appspot.com",
  messagingSenderId: "153075433107",
  appId: "1:153075433107:web:6993e6b2fb38b44cf85766",
};

firebase.initializeApp(firebaseConfig);

export function addSemester(name, data) {
  const refSemesters = firebase.database().ref("AllSemesters");
  const date = new Date();
  const semesters = {
    name: name,
    data: data,
    date: `${date.getHours() + 1}:${date.getMinutes() + 1} ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`,
  };
  refSemesters.push(semesters);
}

export default firebase;
