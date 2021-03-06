import React, { useCallback } from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Delete from "../../assets/delete.png";
import { deleteTask } from "../../redux/actions";

const StyledIconButton = withStyles({
  root: {
    padding: 0,
    alignSelf: "center",
    height: "46px",
    paddingRight: "5px",
    color: "#e33371",
  },
})(IconButton);

const DeleteButton = ({ taskId, setSelectedTasksCount }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(deleteTask(taskId));
    setSelectedTasksCount((prev) => prev - 1);
  }, [dispatch, taskId, setSelectedTasksCount]);

  return (
    <StyledIconButton color="secondary" onClick={handleClick}>
      <img src={Delete} alt="delete button"></img>
    </StyledIconButton>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  taskId: PropTypes.string.isRequired,
  setSelectedTasksCount: PropTypes.func,
};
