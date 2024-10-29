import React from "react";
import { TodoList } from "../TodoList";

const Home = () => {

    return (        
        <div className="todo-app d-flex justify-content-center align-items-center vh-100">
            <TodoList />
        </div>
    );
};

export default Home;