import React from "react";
import { Checkbox, withStyles } from "@material-ui/core";

import "./index.css";
import DeleteButton from "../../DeleteButton";

const StyledCheckbox = withStyles({
  root: {
    color: "#808FE4",
  },
})(Checkbox);

export const TaskCard = ({ task, isChecked, onHandleChange }) => {
  return (
    <div className="task-wrapper">
      <div className="task-card-wrapper">
        <StyledCheckbox
          color="secondary"
          onChange={onHandleChange}
        ></StyledCheckbox>
        <p>{task.value}</p>
      </div>
      {!isChecked ? <DeleteButton taskId={task.id} /> : null}
    </div>
  );
};
