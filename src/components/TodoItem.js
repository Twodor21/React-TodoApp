import { useState } from "react";

export default function TodoItem({ task, dispatch }) {
  const [toggle, setToggle] = useState(true);

  return (
    <li>
      <input
        onChange={() =>
          dispatch({
            type: "UPDATE_TODO",
            task: { ...task, done: !task.done },
          })
        }
        type="checkbox"
        checked={task.done}
      />

      {toggle ? (
        task.text
      ) : (
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "EDIT_ITEM",
              task: { ...task, text: e.target.value },
            });
          }}
        />
      )}

      <button
        style={{ marginLeft: 2 }}
        onClick={() => {
          toggle ? setToggle(false) : setToggle(true);
        }}
      >
        {toggle ? "🖋" : "Save"}
      </button>
      <button
        style={{ marginLeft: 10 }}
        onClick={() => {
          dispatch({
            type: "DELETE_TODO",
            taskId: task.id,
          });
        }}
      >
        Delete
      </button>
    </li>
  );
}
