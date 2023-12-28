import React from "react";
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
export const Note = () => {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
      }}
    >
      <Stack direction={"row"}>
        <Box>
          <Typography variant="h5">Do homework</Typography>
          <Typography variant="h6">12:00 Nov 11, 2023</Typography>
        </Box>
        <DeleteButton />
        <DownloadButton />
      </Stack>
    </Box>
  );
};
