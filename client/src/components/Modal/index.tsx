import React, { useState } from "react";

interface IModalComponentProps {
  isopen: boolean;
  handelModalToggle: () => void;
  handleCreateNewTodo: (title: string, text: string) => void;
}

const Modal: React.FC<IModalComponentProps> = ({
  isopen,
  handelModalToggle,
  handleCreateNewTodo,
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleclose = () => {
    setTitle("");
    setText("");
    handelModalToggle();
  };
  const handleSubmit = () => {
    handleCreateNewTodo(title, text);
    setTitle("");
    setText("");
  };
  return (
    <>
      <div className={`modal ${isopen ? "modal-open" : ""}`}>
        <div className="modal-box relative">
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={handleclose}
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">Create new Todo</h3>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title of your Todo"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="label">
              <span className="label-text">Text</span>
            </label>
            <textarea
              placeholder="Enter Title of your Todo"
              className="textarea textarea-bordered w-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button className="btn btn-accent mt-4 " onClick={handleSubmit}>
              create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
