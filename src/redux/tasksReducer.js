import { ADD_TASK, DELETE_TASK } from "./types";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item, i) =>
          i !== action.payload ? item : null
        ),
      };
    default:
      return state;
  }
};
