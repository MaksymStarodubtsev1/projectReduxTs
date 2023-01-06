import {useTypedSelector} from "../../hooks/useTypedSelector";
import "../styles.scss";

export const TodoList: React.FC = () => {
  const todos = useTypedSelector(state => state.todo.todos)
  return (
    <div>
      {todos.map(todo => (
        <div className="block block_todos">
          {todo.title}
        </div>
      ))}
    </div>
  )
}