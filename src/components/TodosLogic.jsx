import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

import { TodosProvider } from '@/context/TodosContext';

const TodosLogic = () => {
  return (
    <TodosProvider>
      <InputTodo />
      <TodosList />
    </TodosProvider>
  );
};
export default TodosLogic;
