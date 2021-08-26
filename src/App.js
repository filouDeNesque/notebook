import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Header from './components/Header';
import "./App.css";
// TODO:gerer le css

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  // TODO:create new file or read new file
  // TODO:save content to this file
  // TODO:liste des fichiers enregistrer


  /* TODO: Header */
  return (
    <>
    <Header /> 
    <div className="App-header">
    <Editor
    onInit={(evt, editor) => editorRef.current = editor}
    initialValue="<h2>Lettre de motivation n°n²</h2>"
    inline
    init={{
      hevight: 500,
	menubar: false,
	toolbar_location: 'bottom',
	content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }}
    />
    <button onClick={log}>Log editor content</button>
    </div>
    </>
  );
}
