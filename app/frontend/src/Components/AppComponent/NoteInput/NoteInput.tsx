import React, { forwardRef } from "react";
import { SubmitButton } from "../../GeneralComponent";
import { TextField } from "@mui/material";

interface NoteInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const NoteInput = forwardRef<HTMLInputElement, NoteInputProps>(
  ({ onSubmit }, ref) => {
    return (
      <form onSubmit={onSubmit}>
        <TextField inputRef={ref} />
        <SubmitButton type="submit" />
      </form>
    );
  }
);
