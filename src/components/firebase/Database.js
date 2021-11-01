import { db } from "./Config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRefs = collection(db, "notebook");

export async function AddNote(note) {
  console.log(note);
  await addDoc(userCollectionRefs, {
    content: note,
  });
}
export async function delNote(id) {
  const userDoc = doc(db, "notebook", id);
  await deleteDoc(userDoc);
  console.log(id);
}

export async function updateNote(id, note) {
  const userDoc = doc(db, "notebook", id);
  const newContent = { content: note };
  await updateDoc(userDoc, newContent);
}

export default async function getAllNote() {
  const data = await getDocs(userCollectionRefs);
  console.log("!!! Getdata !!! ")
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
