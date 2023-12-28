import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { incremented } from "./store/counter/counterSlice";

import {
  DownloadButton,
  TextInput,
  SubmitButton,
  DeleteButton,
  Note,
} from "./Components/GeneralComponent";
import { NoteInput } from "./Components/AppComponent";
import { addNote } from "./store/notes/notesSlice";

export const Example = () => {
  return (
    <div>
      <DownloadButton />
      <TextInput />
      <SubmitButton />
      <DeleteButton onClick={() => console.log("deleted")} />
      <Note />
      <NoteInput />{" "}
    </div>
  );
};
function App() {
  const count = useAppSelector((state) => state.counter.value);

  const notes = useAppSelector((state) => state.notes.list);

  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };

  const handleAddNote = () => {
    const inputNote = inputRef.current?.value;
    if (inputNote) dispatch(addNote(inputNote));
  };

  return (
    <div className="App">
      <p>Hello counter</p>
      <button onClick={handleClick}>Count is: {count}</button>

      <div>
        <p>List items: </p>
        <ul>
          {notes?.map((note) => (
            <li key={note.id}>
              {note.id}: {note.content}
            </li>
          ))}
        </ul>

        <input placeholder="enter input..." ref={inputRef} />
        <button onClick={handleAddNote}>Add</button>
      </div>
    </div>
  );
}

export default App;
