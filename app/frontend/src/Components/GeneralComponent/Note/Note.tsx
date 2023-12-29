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

  const handleDownloadSpeech = () => {
    console.log("Downloading the speech from AWS...");
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "5px",
        paddingX: "5px",
      }}
    >
      <Stack direction="row" justifyContent={"space-between"}>
        <Box>
          <Typography variant="body1">
            {props.note?.id}. {props.note?.content}
          </Typography>
          <Typography variant="body2">12:00 Nov 11, 2023</Typography>
        </Box>
        <Box>
          <DeleteButton onClick={handleRemoveNote} />
          <DownloadButton onClick={handleDownloadSpeech} />
        </Box>
      </Stack>
    </Box>
  );
};
