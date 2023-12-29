import React from "react";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const TextInput = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Note" id="fullWidth" {...props} ref={ref} />
      </Box>
    );
  }
);
