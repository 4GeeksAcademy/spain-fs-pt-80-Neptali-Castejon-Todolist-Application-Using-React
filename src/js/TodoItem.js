import React from "react";
import { TodoInput } from "./TodoInput";

export const TodoItem = () => {
    return (
        <ul className="todo-app__item d-flex flex-column shadow p-0 m-0 w-100">
            <TodoInput />
            <p className="todo-app__remaining text-start m-0 p-3">4 items left</p>
        </ul>
    );
};



