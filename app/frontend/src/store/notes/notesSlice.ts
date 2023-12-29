import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  content: string;
}

interface NotesState {
  list: Note[];
  max: number;
}

const initialState: NotesState = {
  list: [],
  max: 0,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<string>) {
      const newNote: Note = {
        id: state.max + 1,
        content: action.payload,
      };
      state.list.push(newNote);
      state.max = state.max + 1;
      return state;
    },
    removeNote(state, action: PayloadAction<number>) {
      state.list = state.list.filter((note) => note.id !== action.payload);
      return state;
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
