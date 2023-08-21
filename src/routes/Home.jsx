import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
  );
};
export default Home;
