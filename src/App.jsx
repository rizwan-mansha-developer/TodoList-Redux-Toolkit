import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

function App() {
  return (
    <div className="mx-[20%] my-[10%]">
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
