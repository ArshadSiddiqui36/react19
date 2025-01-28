// Note:
// useReducer is a React hook that helps manage complex state logic in functional components.
// It's an alternative to useState when your state logic involves multiple sub-values or transitions, making it more structured and easier to manage.
// =====================================================================================================
import '../style.css';

export default function ManageStateUseReducer() {
    return (
        <h2>Managing State using useReducer - <br/>alternative of useState, for complex state</h2>
    )
}
// =====================================================================================================

import { useReducer, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
// =====================================================================================================

// => Extracting state logic into a reducer
// =====================================================================================================
// import { useReducer } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// import { useReducer, useState } from 'react';

export function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // Handlers for task actions
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h2>useReducer (Manage complex state, alternative of useState)</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

// Reducer function for managing tasks
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// AddTask Component
function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

// TaskList Component
// TaskList Component with Edit Button
function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');
  
    function handleEdit(task) {
      setEditingId(task.id);
      setEditText(task.text); // Initialize with the current task text
    }
  
    function handleSave(task) {
      if (editText.trim()) {
        onChangeTask({ ...task, text: editText });
        setEditingId(null); // Exit editing mode
      }
    }
  
    return (
      <ul style={{textAlign:"left"}}>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) =>
                onChangeTask({ ...task, done: e.target.checked })
              }
            />
            {editingId === task.id ? (
              // Render an input field for editing mode
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(task)}>Save</button>
              </>
            ) : (
              // Render the task text in normal mode
              <>
                {task.text}
                <button onClick={() => handleEdit(task)}>Edit</button>
              </>
            )}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }

// Initial data and next ID generator
let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

// =====================================================================================================



