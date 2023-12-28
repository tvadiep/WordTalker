import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextInput = (props: any) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="Note" id="fullWidth" {...props} />
    </Box>
  );
};
