import React from "react";
import { Input, IconButton, withStyles } from "@material-ui/core";

import "./index.css";
import Create from "../../assets/create.png";
import TaskCard from "../../TaskCard/Container";

const StyledInput = withStyles({
  root: {
    color: "#eee",
    borderBottom: "2px solid #ddd",
    fontSize: "24px",
    width: "400px",
  },
})(Input);

const StyledIconButton = withStyles({
  root: {
    marginLeft: "10px",
  },
})(IconButton);

export const App = ({ tasks, handleSubmit }) => {
  return (
    <div className="app-wrapper">
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <StyledInput placeholder="My task for today"></StyledInput>
        <StyledIconButton color="primary" type="submit">
          <img src={Create} alt="create button"></img>
        </StyledIconButton>
      </form>
      <div className="tasks-wrapper">
        {tasks.map((task, i) => (
          <TaskCard task={task} key={i} taskIndex={i} />
        ))}
      </div>
    </div>
  );
};
