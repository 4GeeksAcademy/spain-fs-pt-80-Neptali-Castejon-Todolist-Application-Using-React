import React from "react";

export const TodoInput = () => {
    return (
        <li className="todo-app__li d-flex align-items-center ps-5">
            <input
                className="todo-app__input form-control fs-2"
                placeholder="What needs to be done?"
            />
            <button className="todo-app__delete-btn p-0">
                <i className="fa-solid fa-xmark pe-3 fs-3 text-danger"></i>
            </button>
        </li>
    );
};