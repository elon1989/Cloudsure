import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Modal } from "flowbite-react";

const IndexPage: React.FC<PageProps> = ({ data: site }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [todos, setTodos] = React.useState([
    { title: "Workout", desc: "arms, legs", done: false },
    { title: "Shopping", desc: "Milk, fish and chicken", done: false },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTodo = {
      title: e.target.elements[0].value,
      desc: e.target.elements[1].value,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setOpenModal(!openModal);
  };

  const updateTodo = (updateTodo: any) => {
    const updateDone = todos.map((todo) => {
      if (todo.title === updateTodo.title) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updateDone);
  };

  const removeTodo = (removeTodo: any) => {
    const updatedArray = todos.filter((e: any) => e.title !== removeTodo.title);
    setTodos(updatedArray);
  };

  return (
    <main>
      <h1 className="text-3xl mt-5 mb-10 text-center text-slate-500">
        Todo app
      </h1>
      <div className="flex justify-center w-100 white">
        <button
          className="flex text-gray-900 bg-slate-500 border border-gray-500 transition hover:scale-110 ease-in-out delay-10 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => {
            setOpenModal(!openModal);
          }}>
          Add a todo
        </button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create a todo</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Title</h3>
              <input
                className="rounded-lg w-full"
                type="text"
                name="title"
                pattern="{3}"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <h3>Description</h3>
              <input
                className="rounded-lg w-full"
                type="text"
                name="desc"
                pattern="{3}"
                placeholder="Description"
                required
              />
            </div>
            <button
              className="flex m-3 text-gray-900 border border-gray-500 transition hover:scale-110 ease-in-out delay-10 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="submit">
              Send message
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <div className="todos grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 flex justify-items-center gap-3">
        {todos.map((todo) => {
          return (
            <div
              onClick={() => updateTodo(todo)}
              className={`todo max-w-sm rounded overflow-hidden shadow-lg p-2 relative ${
                todo.done ? "bg-slate-300" : "bg-slate-500"
              } m-3 transition hover:scale-110 ease-in-out delay-10`}
              key={`${todo.title}_key`}>
              <div
                className="close absolute top-3 right-3"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTodo(todo);
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="12"
                  viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>
              <h3 className="text-1xl text-center font-bold">{todo.title}</h3>
              {todo.done ? (
                <div className="checkIcon absolute top-9 left-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
              ) : null}
              <br></br>
              <p className="text-center">{todo.desc}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
