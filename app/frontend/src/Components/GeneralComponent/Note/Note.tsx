import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { removeNote } from "../../../store/notes/notesSlice";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DeleteButton } from "../Button/DeleteButton";
import { DownloadButton } from "../Button/DownloadButton";

export const LoginForm = () => {
  return (
    <Box>
      <Typography variant="h2">Login</Typography>
    </Box>
  );
};
export const Note = (props: any) => {
  const dispatch = useAppDispatch();

  const handleRemoveNote = () => dispatch(removeNote(props.note.id));
  return (
    <Box
      sx={{
        backgroundColor: "gray",
      }}
    >
      <Stack direction={"row"}>
        <Box>
          <Typography variant="h5">{props.note.id} </Typography>
          <Typography variant="h5">{props.note?.content}</Typography>
          <Typography variant="h6">12:00 Nov 11, 2023</Typography>
        </Box>
        <DeleteButton onClick={handleRemoveNote} />
        <DownloadButton />
      </Stack>
    </Box>
  );
};
