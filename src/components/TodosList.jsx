import TodoItem from '@/components/TodoItem';

const TodosList = ({todosProps, handleChange }) => {
  return (
    <ul>
     {todosProps.map((todo) => (
        <TodoItem 
        key={todo.id} 
        itemProp={todo} 
        handleChange={handleChange} />
     ))}
    </ul>
  );
};
export default TodosList;
