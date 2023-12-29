import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton, IconButtonProps } from "@mui/material";

interface DownloadButtonProps extends IconButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      sx={{
        borderRadius: 0,
        padding: 2,
      }}
      onClick={onClick}
    >
      <DownloadIcon />
    </IconButton>
  );
};
