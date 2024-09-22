import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import EditIcon from "../../assets/icon/EditIcon";
import SpecificTodo from "./SpecificTodo";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="mt-5">Todos</div>
      <ul className="list-none">
        {todos
          .slice()
          .reverse()
          .map((todo) => (
            <div key={todo.id}>
              <SpecificTodo todo={todo} />
            </div>
          ))}
      </ul>
    </>
  );
}

export default Todos;
