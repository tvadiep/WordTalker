import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export const SubmitButton = (props: any) => {
  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      sx={{
        paddingY: 2,
        paddingX: 2,
      }}
      {...props}
    >
      Add Note
    </Button>
  );
};
