import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export const DeleteButton = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      sx={{
        borderRadius: 0,
      }}
      onClick={onClick}
    >
      <DeleteIcon
        sx={{
          padding: 1,
        }}
      />
    </IconButton>
  );
};
