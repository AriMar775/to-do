import React from "react";
import { Input, IconButton, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import "./index.css";
import Create from "../../assets/create.png";
import TaskCard from "../../TaskCard/container";

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

const App = ({ tasks, inputValue, handleSubmit, handleChangeInput }) => {
  return (
    <div className="app-wrapper">
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <StyledInput
          placeholder="My task for today"
          onChange={handleChangeInput}
          value={inputValue}
        ></StyledInput>
        <StyledIconButton color="primary" type="submit">
          <img src={Create} alt="create button"></img>
        </StyledIconButton>
      </form>
      <div className="tasks-wrapper">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default App;

App.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, id: PropTypes.string })
  ).isRequired,
  inputValue: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChangeInput: PropTypes.func,
};
