import { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
export function useSemester() {
  const [semesters, setSemesters] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const refSemesters = firebase.database().ref("AllSemesters");
    refSemesters.on("value", (snapshot) => {
      const semesters = snapshot.val();
      const listSemester = [];
      for (let id in semesters) {
        listSemester.push(semesters[id]);
      }
      setSemesters(listSemester);
    });
    setloading(false);
  }, []);
  return [semesters, loading];
}
