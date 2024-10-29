import React from "react";
import { TodoInput } from "./TodoInput";

export const TodoList = () => {
    return (
        <div className="todo-app__container text-center">
            <h1 className="todo-app__title">todosList</h1>
            <TodoInput />
        </div>
    );
};