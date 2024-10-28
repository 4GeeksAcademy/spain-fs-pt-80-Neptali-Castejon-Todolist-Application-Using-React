import React from "react";
import { TodoList } from "../TodoList";

const Home = () => {
    return (
        <div className="todo-app d-flex justify-content-center align-items-center vh-100">
            <div className="todo-app__container text-center">
                <h1 className="todo-app__title">todos</h1>
                <TodoList />
            </div>
        </div>
    );
};

export default Home;