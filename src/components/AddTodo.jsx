import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex mx-auto items-center justify-center pt-10">
      <input
        className="shadow-lg border-gray-500 border-2 w-1/3 h-10 px-1 rounded-md"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <button
        className="border-2 px-2 ml-2 h-10 rounded-md border-gray-500 bg-blue-500 text-slate-100"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
