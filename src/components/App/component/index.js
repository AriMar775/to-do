import React from "react";
import { Input, IconButton, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import "./index.css";
import Create from "../../../assets/create.png";
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

const App = ({
  tasks,
  selectedTasksCount,
  inputValue,
  isModalShown,
  handleSubmit,
  handleChangeInput,
  handleTaskSelect,
  setSelectedTasksCount,
  handleDeleteSelected,
  handleShowModal,
}) => {
  return (
    <div className="app-wrapper">
      {isModalShown && (
        <div className="modal-delete-selected-tasks">
          <span>Are you sure?</span>
          <div className="modal-buttons">
            <div className="modal-accept-button" onClick={handleDeleteSelected}>
              Yes
            </div>
            <div className="modal-decline-button" onClick={handleShowModal}>
              No
            </div>
          </div>
        </div>
      )}
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
      {selectedTasksCount > 0 && (
        <div className="tasks-delete-button">
          <span onClick={handleShowModal}>
            Delete {selectedTasksCount} task(s)
          </span>
        </div>
      )}
      <div className="tasks-wrapper">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            onSelect={handleTaskSelect}
            setSelectedTasksCount={setSelectedTasksCount}
          />
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
  selectedTasksCount: PropTypes.number,
  inputValue: PropTypes.string,
  isModalShown: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleChangeInput: PropTypes.func,
  handleTaskSelect: PropTypes.func,
  handleDeleteSelected: PropTypes.func,
  setSelectedTasksCount: PropTypes.func,
  handleShowModal: PropTypes.func,
};
