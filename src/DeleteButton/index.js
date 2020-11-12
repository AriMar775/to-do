import React from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Delete from "../assets/delete.png";
import { deleteTask } from "../redux/actions";

const StyledIconButton = withStyles({
  root: {
    padding: 0,
    paddingRight: "5px",
    color: "#e33371",
  },
})(IconButton);

const DeleteButton = ({ taskIndex }) => {
  const dispatch = useDispatch();

  const handleClick = (taskIndex) => {
    dispatch(deleteTask(taskIndex));
  };

  return (
    <StyledIconButton color="secondary" onClick={() => handleClick(taskIndex)}>
      <img src={Delete} alt="delete button"></img>
    </StyledIconButton>
  );
};

export default DeleteButton;
