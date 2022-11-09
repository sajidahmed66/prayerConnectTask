import React from "react";

export interface ITodo {
  id: number;
  title: string;
  text: string;
  status: string;
}

interface ITodoComponentprops {
  todo: ITodo;
  handleDeleteTodo: (id: number) => void;
  handleMoveTodo: (status: string, id: number) => void;
}

const Todo: React.FC<ITodoComponentprops> = ({
  todo,
  handleDeleteTodo,
  handleMoveTodo,
}) => {
  const { id, status, text, title } = todo;
  const renderBtn = (status: string) => {
    if (status === "new" || status === "finished") {
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            handleMoveTodo("ongoing", id);
          }}
        >
          Move to in-progress
        </button>
      );
    } else if (status == "ongoing") {
      return (
        <>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleMoveTodo("finished", id);
            }}
          >
            move to done
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleMoveTodo("new", id);
            }}
          >
            Move to todo
          </button>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="card w-96 bg-neutral text-neutral-content mb-4">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions mt-4 justify-end">
          {renderBtn(status)}
          <button
            className="btn btn-error btn-outline"
            onClick={() => {
              handleDeleteTodo(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
