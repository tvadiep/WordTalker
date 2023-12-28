import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  content: string;
}

interface NotesState {
  list: Note[];
}

const initialState: NotesState = {
  list: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<string>) {
      const newNote: Note = {
        id: state.list.length + 1,
        content: action.payload,
      };
      state.list.push(newNote);
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
