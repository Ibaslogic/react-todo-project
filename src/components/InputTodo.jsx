import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = ({ addTodoItem}) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
    addTodoItem(title);
    setTitle("");
    } else {
      setMessage("Please add item.")
    }

  };

  return (
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <input 
      type="text" 
      placeholder="Add Todo..."
      value={title}
      onChange={handleChange} 
      className="input-text"
      />
      <button className="input-submit">
        <FaPlusCircle 
         style={{
          color: 'green',
          fontSize: '20px',
          marginTop: '2px',
         }}
        />
      </button>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;

