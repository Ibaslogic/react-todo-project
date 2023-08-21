import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";


const TodosLogic = () => {
  const [todos, setTodos]  = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList 
      todosProps={todos} 
      handleChange={handleChange}
      delTodo={delTodo} />
  </div>
  )
}
export default TodosLogic;
