import React from "react";
import { Checkbox, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import "./index.css";
import DeleteButton from "../../DeleteButton";

const StyledCheckbox = withStyles({
  root: {
    color: "#808FE4",
  },
})(Checkbox);

const TaskCard = ({ task, isChecked, onHandleChange }) => {
  return (
    <div className="task-wrapper">
      <div className="task-card-wrapper">
        <StyledCheckbox
          color="secondary"
          onChange={onHandleChange}
        ></StyledCheckbox>
        <p className={isChecked ? "text-underline" : undefined}>{task.value}</p>
      </div>
      {isChecked && <DeleteButton taskId={task.id} />}
    </div>
  );
};
export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.shape({ value: PropTypes.string, id: PropTypes.string })
    .isRequired,
  isChecked: PropTypes.bool,
  onHandleChange: PropTypes.func,
};
