import React, { useCallback } from "react";
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

const DeleteButton = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(deleteTask(taskId));
  }, [dispatch, taskId]);

  return (
    <StyledIconButton color="secondary" onClick={() => handleClick()}>
      <img src={Delete} alt="delete button"></img>
    </StyledIconButton>
  );
};

export default DeleteButton;
