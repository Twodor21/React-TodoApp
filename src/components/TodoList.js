import TodoItem from "./TodoItem";

export default function TodoList({ tasks, dispatch }) {
  return (
    <>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} dispatch={dispatch} />
      ))}
      <button
        style={{ margin: 10 }}
        onClick={() => {
          dispatch({
            type: "DELETE_LIST",
          });
        }}
      >
        Delete List
      </button>
    </>
  );
}
