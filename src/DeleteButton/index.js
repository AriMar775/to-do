import React from "react";
import { IconButton, withStyles } from "@material-ui/core";

import Delete from "../assets/delete.png";

const StyledIconButton = withStyles({
  root: {
    padding: 0,
    paddingRight: "5px",
    color: "#e33371",
  },
})(IconButton);

const DeleteButton = ({ task }) => {
  const handleClick = (task) => {};

  return (
    <StyledIconButton color="secondary" onClick={handleClick(task)}>
      <img src={Delete} alt="delete button"></img>
    </StyledIconButton>
  );
};

export default DeleteButton;
