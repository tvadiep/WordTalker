import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import { Note } from "./Components/GeneralComponent";
import { addNote } from "./store/notes/notesSlice";
import { NoteInput, NotesContainer } from "./Components/AppComponent";
import { Stack, rgbToHex } from "@mui/material";

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
    <Stack
      direction="column"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: rgbToHex("rgb(246,247,255)"),
        height: "100vh",
      }}
    >
      <NotesContainer>
        {notes.map((note) => (
          <>
            <Note note={note} key={note.id} />
            <br />
          </>
        ))}
      </NotesContainer>
      <br />
      <NoteInput onSubmit={handleAddNote} ref={inputRef} />
    </Stack>
  );
}

export default App;
