import { useState, useContext } from "react";
import { createTodo, deleteTodo, updateTodo } from "../api/taskApis";
import { TodoContext } from "../App";
import Layout from "../components/Layout/Layout";
import Todo, { ITodo } from "../components/Todos";
import { AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import Modal from "../components/Modal";
const TodosPage = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const context = useContext(TodoContext);
  const { pathname } = useLocation();

  const handleModalToggle = () => {
    setModalToggle((prev) => !prev);
  };
  const handleCreate = (newTodoTitle: string, newTodoText: string) => {
    createTodo({ title: newTodoTitle, text: newTodoText, status: "new" })
      .then((res) => {
        if (res.status === 201) {
          setSuccess("Successfully deleted todo");
          handleModalToggle();
        }
        setTimeout(() => {
          setSuccess("");
        }, 2000);
        context?.reloadHandler({});
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
        setError(err.message);
        handleModalToggle();
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  const handleMoveTodo = (status: string, id: number) => {
    updateTodo(status, id)
      .then((res) => {
        if (res.status === 200) {
          setSuccess(
            `Successfully moved to ${
              (status === "ongoing" && "In-Progress") ||
              (status === "finished" && "Completed") ||
              (status === "new" && "Uncompleted")
            }`
          );
        }
        setTimeout(() => {
          setSuccess("");
        }, 2500);
        context?.reloadHandler({});
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
      .then((res) => {
        if (res.status === 200) {
          setSuccess("Successfully deleted todo");
        }
        setTimeout(() => {
          setSuccess("");
        }, 2500);
        context?.reloadHandler({});
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  const pagetitle = (pathname: string) => {
    if (pathname === "/") {
      return "Todos";
    } else if (pathname === "/ongoing") {
      return "In progress";
    } else if (pathname === "/finished") {
      return "Completed";
    }
    return "";
  };
  const todofilter = (pathname: string) => {
    if (pathname === "/") {
      return "new";
    }
    if (pathname === "/ongoing") {
      return "ongoing";
    }
    if (pathname === "/finished") {
      return "finished";
    }
  };
  return (
    <Layout title={pagetitle(pathname)}>
      {success && (
        <div className="alert alert-success shadow-lg my-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
      <div className="h-20 w-full">
        <button className="btn btn-outline" onClick={handleModalToggle}>
          create new Todo
        </button>
      </div>

      <div className=" flex flex-row items-start justify-around flex-wrap mt-4">
        {context &&
          context?.todos.length > 0 &&
          context?.todos
            .filter((todo) => todo.status === todofilter(pathname))
            .map((todo: ITodo) => (
              <Todo
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleMoveTodo={handleMoveTodo}
              />
            ))}
      </div>
      <Modal
        isopen={modalToggle}
        handelModalToggle={handleModalToggle}
        handleCreateNewTodo={handleCreate}
      />
    </Layout>
  );
};

export default TodosPage;
