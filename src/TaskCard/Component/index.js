import React from "react";
import { Checkbox, withStyles } from "@material-ui/core";

import "./index.css";

const StyledCheckbox = withStyles({
  root: {
    padding: "0 10px 0 0",
    color: "#808FE4",
  },
})(Checkbox);

export const TaskCard = ({ task }) => {
  return (
    <div className="task-card-wrapper">
      <StyledCheckbox color="primary"></StyledCheckbox>
      <p>{task}</p>
    </div>
  );
};
