import React, { useState } from "react";

export const TodoInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [visibleIcons, setVisibleIcons] = useState({});

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos((prev) => [...prev, inputValue]);
            setInputValue(''); // Limpiar input después de agregar
        }    
    };

    const handleClick = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleMouseEnter = (index) => {
        setVisibleIcons((prev) => ({ ...prev, [index]: true })); // Mostrar ícono
    };

    const handleMouseLeave = (index) => {
        setVisibleIcons((prev) => ({ ...prev, [index]: false })); // Ocultar ícono
    };

    return (
        <div className="todo-app__content shadow p-0">
            <form onSubmit={handleSubmit} className="todo-app__form">
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={inputValue}
                    className="todo-app__input form-control ps-5"
                    placeholder="What needs to be done?"
                    aria-label="New task input"
                    title="Type a new task and press Enter to add it"
                />
            </form>
            <ul className="todo-app__list d-flex flex-column p-0 m-0 w-100">
                {todos.map((element, index) => (
                    <li
                        key={index}
                        className="todo-app__item d-flex align-items-center justify-content-between ps-5 pe-4"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        title="Task item"
                    >
                        {element}
                        {visibleIcons[index] && (
                            <a 
                                className="todo-app__delete-btn"
                                onClick={() => handleClick(index)}
                                aria-label="Delete task"
                                title="Delete this task"
                            >
                                <i className="todo-app__delete-icon fa-solid fa-xmark fs-4"></i>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
            <footer className="todo-app__footer d-flex align-items-center justify-content-between px-4">
                <p 
                    className="todo-app__remaining text-start" 
                    title="Number of remaining tasks"
                >
                    {todos.length} items left
                </p>
                {todos.length > 1 && (
                    <button 
                        className="todo-app__clear-btn icon-link icon-link-hover p-0"
                        onClick={() => setTodos([])}
                        aria-label="Clear all tasks"
                        title="Delete all tasks"
                    >
                        <p className="todo-app__remaining todo-app__clear-icon">Delete All</p>
                        <i className="bi fs-5 fa-regular fa-trash-can" aria-hidden="true"></i>
                    </button>
                )}
            </footer>
        </div>
    );
};
