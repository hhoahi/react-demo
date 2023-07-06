import React from "react";
import { useReducer, useRef } from "react";

//Init state
const initState = {
  job: "",
  jobs: [],
};

//actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

//payload: lấy dữ liệu để truyền vào function
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleleJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

//reducer
const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("Prev state: ", state);

  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      //tạo array mới để tránh ảnh hưởng đến array cũ
      const newJobs = [...state.jobs];

      //splice: xóa dữ liệu
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid action.");
  }

  console.log("New state: ", newState);
  return newState;
};

//dispatch
function Todo() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Todo-List</h4>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => dispatch(deleleJob(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
