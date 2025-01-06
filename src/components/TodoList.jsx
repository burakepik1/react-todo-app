const TodoList = ({ todos }) => {
  return (
    <div className="flex mx-auto items-center justify-center pt-10">
      <ul className="flex flex-col items-center justify-center w-screen ">
        {todos.map((todo, index) => (
          <li key={index} className="p-1.5 mt-3 shadow-sm border-2 w-1/2 text-wrap border-l-4 border-l-sky-500">
            <p className="break-all text-base">{todo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;