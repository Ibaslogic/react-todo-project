const TodoItem = ({ itemProp }) => {
  return (
  <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
  );
};
export default TodoItem;
