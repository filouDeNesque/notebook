import React from "react";
import "./ButtonBar.css";
import AddNote from "../firebase/Database";
import delNote from "../firebase/Database";

export default function Header(props) {
  function AddNoteToDb() {
    if (props.log.current) {
      AddNote(props.log.current.getContent());
    }
  }
  function deleteNoteToDb() {
    if (props.noteId) {
      delNote(props.noteId);
      props.newNote();
      alert("Suppression de la note " + props.noteId + " effectué.");
    }else{
      alert("no props.id")
    }
  }
  return (
    <div className="ButtonBar">
      <button onClick={props.newNote}>Nouveau</button>
      <button onClick={AddNoteToDb}>Enregistrer</button>
      <button onClick={deleteNoteToDb}>Supprimer</button>
    </div>
  );
}
