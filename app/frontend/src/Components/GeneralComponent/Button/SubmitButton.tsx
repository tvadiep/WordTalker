import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export const SubmitButton = (props: any) => {
  return (
    <Button variant="contained" endIcon={<SendIcon />} {...props}>
      Add Note
    </Button>
  );
};
