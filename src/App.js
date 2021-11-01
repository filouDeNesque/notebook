import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ButtonBar from "./components/buttonBar/ButtonBar";
import ListeNote from "./components/listNote/ListeNote";
import "./App.css";

export default function App() {
  let Newnote2 = [
    { id: 14, content: "<h1>Lettre de motivation n°214</h1>" },
    { id: 22, content: "<h1>Yaeh motivation n°222</h1>" },
    { id: 21, content: "<h1>jdla de dnn n°221</h1>" },
  ];

  let Newnote = Newnote2[Newnote2.length - 1];
  const [arrayTest, setArrayTest] = useState(Newnote2);
  const editorRef = useRef(null);
  let [note, setNote] = useState(Newnote);

  const clearNote = () => {
    const newNote = { id: undefined, content: "" };
    setNote({ note: newNote });
    Newnote.content = "";
    editorRef.current.setContent("<h1>Nouveau Fichier</h1>");
  };

  const updateNote = (event) => {
    const content = editorRef.current.getContent();
    setNote({ id: note.id, content: content });
  };

  const changeNote = (event) => {
    setNote({
      id: event.target.dataset.id,
      content: event.target.dataset.content,
    });
    editorRef.current.setContent(event.target.dataset.content);
  };

  const alterArray = ([param]) => {
    setArrayTest({ param });
  };

  //Todo:--------------------------------------
  // Todo: Ajout du titre et de la date
  // Todo: Meilleur gestion du css

  // !!:----------------------------------------
  //!!deborde en largeur dans des lignes trop longue Editor (wrap:option)

  return (
    <>
      <div className="App-header">
        <Editor
          onChange={updateNote}
          ref={editorRef}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={Newnote.content}
          inline
          init={{
            height: 200,
            menubar: false,
            toolbar_location: "bottom",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            placeholder: Newnote.content,
          }}
        />
        <ListeNote noteArr={arrayTest} changeNote={changeNote} />
      </div>
      <ButtonBar
        log={editorRef}
        noteId={note.id}
        newNote={clearNote}
        alterArray={alterArray}
      />
    </>
  );
}
