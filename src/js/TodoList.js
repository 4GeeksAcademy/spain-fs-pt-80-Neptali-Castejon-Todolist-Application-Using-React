import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    return (
        <form className="todo-app__list">
            <TodoItem />
        </form>
    );
};