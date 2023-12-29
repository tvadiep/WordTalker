import React from "react";
import { Box } from "@mui/material";

interface NotesContainerProps {
  children?: React.ReactNode;
}

export const NotesContainer: React.FC<NotesContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#EAEAF5",
        height: "500px",
        width: "650px",
        overflowY: "scroll",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      {children}
    </Box>
  );
};
