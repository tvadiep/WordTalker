import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import { DeleteButton, Note } from "./Components/GeneralComponent";
import { addNote } from "./store/notes/notesSlice";
import { NoteInput } from "./Components/AppComponent";

function App() {
  const notes = useAppSelector((state) => state.notes.list);

  const inputRef = useRef<any>(null);

  const dispatch = useAppDispatch();

  const handleAddNote = (e: any) => {
    e.preventDefault();
    const inputNote = inputRef.current?.value;
    console.log("hello", inputNote);
    if (inputNote) dispatch(addNote(inputNote));
  };

  return (
    <div className="App">
      <DeleteButton onClick={() => console.log("deleted")} />

      {notes.map((note) => (
        <>
          <Note note={note} key={note.id} />
          <br />
        </>
      ))}
      <br />
      <NoteInput onSubmit={handleAddNote} ref={inputRef} />
    </div>
  );
}

export default App;
