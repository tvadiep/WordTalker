import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import { Note } from "./Components/GeneralComponent";
import { addNote } from "./store/notes/notesSlice";
import { NoteInput, NotesContainer } from "./Components/AppComponent";
import { Stack, rgbToHex } from "@mui/material";

const GET_ALL_NOTES_API_URL = process.env.REACT_APP_GET_NOTES_API as string;

let event = {
  queryStringParameters: {
    userId: "student",
    noteId: 2,
  },
};

function App() {
  fetch(
    "https://pvwzq4jrpjlqeis64ryp3cdvwi0ytcxt.lambda-url.ap-northeast-1.on.aws/",
    {
      method: "POST",
      body: JSON.stringify({
        userId: "student",
        noteId: 5,
      }), // Include data in request body
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("loi la: ", error));

  const notes = useAppSelector((state) => state.notes.list);

  const inputRef = useRef<any>(null);

  const dispatch = useAppDispatch();
  const maxId = useAppSelector((state) => state.notes.max);

  const fetchNotes = () => {
    // console.log(GET_ALL_NOTES_API_URL);
    fetch(GET_ALL_NOTES_API_URL)
      .then((response) => response.json())
      .then((data) => {
        // const parsedArray = JSON.parse(data.body).map((obj: any) => obj.Note.S);

        data.body.forEach((note: any, index: number) => {
          console.log(`Note thu ${index} la: `, note);
        });
        console.log(data.body);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchNotes();
  }, []);

  const uploadNote = (userId: string, noteId: number, noteContent: string) => {
    console.log("uploading...");
    console.log("id: ", noteId);
    console.log("content: ", noteContent);
  };

  const handleAddNote = (e: any) => {
    e.preventDefault();
    const inputNote = inputRef.current?.value;

    if (inputNote) {
      dispatch(addNote(inputNote));
      uploadNote("student", maxId, inputNote);
    }
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
