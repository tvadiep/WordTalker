import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";

export const DownloadButton = () => {
  return (
    <IconButton
      sx={{
        borderRadius: 0,
        padding: 2,
      }}
      onClick={() => console.log("Downloading...")}
    >
      <DownloadIcon />
    </IconButton>
  );
};
