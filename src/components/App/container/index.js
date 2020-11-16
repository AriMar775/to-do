import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import App from "../component";
import { addTask, deleteTask } from "../../../redux/actions";
import { getTasks } from "../../../redux/selectors";

const AppContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const [inputValue, setInputValue] = useState("");
  const [checkedTasksId, setCheckedTasksId] = useState([]);
  const [selectedTasksCount, setSelectedTasksCount] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const task = { value: inputValue, id: uuidv4() };

      if (inputValue) {
        dispatch(addTask(task));
        setInputValue("");
      }
    },
    [dispatch, inputValue]
  );

  const handleChangeInput = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleTaskSelect = useCallback(
    (taskId, isChecked) => {
      if (isChecked) {
        setCheckedTasksId([...checkedTasksId, taskId]);
        setSelectedTasksCount((prev) => prev + 1);
      } else {
        setCheckedTasksId(checkedTasksId.filter((item) => item !== taskId));
        setSelectedTasksCount((prev) => prev - 1);
      }
    },
    [checkedTasksId]
  );

  const handleDeleteSelected = useCallback(() => {
    checkedTasksId.map((taskId) => dispatch(deleteTask(taskId)));
    setSelectedTasksCount(0);
    handleShowModal();
  }, [dispatch, checkedTasksId]);

  const handleShowModal = useCallback(() => {
    setIsModalShown((prev) => !prev);
  }, []);

  return (
    <App
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
      tasks={tasks}
      selectedTasksCount={selectedTasksCount}
      inputValue={inputValue}
      isModalShown={isModalShown}
      setSelectedTasksCount={setSelectedTasksCount}
      handleTaskSelect={handleTaskSelect}
      handleDeleteSelected={handleDeleteSelected}
      handleShowModal={handleShowModal}
    />
  );
};

export default AppContainer;
