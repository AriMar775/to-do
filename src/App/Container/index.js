import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import App from "../component";
import { addTask } from "../../redux/actions";
import { getTasks } from "../../redux/selectors";

const AppContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <App
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
      tasks={tasks}
      inputValue={inputValue}
    />
  );
};

export default AppContainer;
