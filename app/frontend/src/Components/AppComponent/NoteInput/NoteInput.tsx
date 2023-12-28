import React, { useEffect, useState } from "react";
import { TextInput, SubmitButton } from "../../GeneralComponent";
import { Stack } from "@mui/material";

export const NoteInput = () => {
  const [note, setNote] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("note is: ", note);
  };

  useEffect(() => {}, [note]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={"row"} spacing={1}>
        <TextInput
          value={note}
          onChange={(e: any) => setNote(e.target.value)}
        />
        <SubmitButton type="submit" />
      </Stack>
    </form>
  );
};
