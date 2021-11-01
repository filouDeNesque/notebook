import React from "react";
import "./ListeNote.css";

export default function ListeNote(props) {
  // !! probleme tout l'element n'est pas cliquable
  if(props.noteArr.param !== undefined){
    return (
      <div className="ListeNote">
      {props.noteArr.param.map(function (note) {
        return (
          <div
          className="card"
          key={note.id}
          data-id={note.id}
          data-content={note.content}
          onClick={props.changeNote}
          >
            <h3>{note.id}</h3>
            <p>Title</p>
          </div>
        );
      })}
    </div>
  );
}else{
  return(
    <>
    </>
  )
}
}
