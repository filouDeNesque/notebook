import React, { useEffect, useState } from "react";
import "./ButtonBar.css";
import { AddNote } from "../firebase/Database";
import { delNote } from "../firebase/Database";
import { updateNote } from "../firebase/Database";
import getAllNote from "../firebase/Database";

export default function Header(props) {
  const [reloadNote, setReloadNote] = useState(false);

  function AddNoteToDb() {
    if (props.log.current) {
      if (props.noteId) {
        updateNote(props.noteId, props.log.current.getContent());
      } else {
        AddNote(props.log.current.getContent());
      }
      setReloadNote(!reloadNote);
    }
  }

  function deleteNoteToDb() {
    if (props.noteId) {
      delNote(props.noteId);
      props.newNote();
      setReloadNote(!reloadNote);
    } else {
      alert("no props.id");
    }
  }
  useEffect(
    () => {
      getAllNote().then((token) => {
        props.alterArray([token]);
      });
    },
    // eslint-disable-next-line
    [reloadNote]
  );

  return (
    <div className="ButtonBar">
      <button onClick={props.newNote}>Nouveau</button>
      <button onClick={AddNoteToDb}>Enregistrer</button>
      <button onClick={deleteNoteToDb}>Supprimer</button>
    </div>
  );
}
