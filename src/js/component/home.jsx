import React, {useState} from "react";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";

const Home = () => {
     // Estados para almacenar las tareas
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [visibleIcons, setVisibleIcons] = useState({});

    // Manejar el cambio de valor en el campo de entrada
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Función para añadir una tarea a la lista de tareas
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos((prev) => [...prev, inputValue]);
            setInputValue(''); // Limpiar input después de agregar
        }    
    };

    // Función para eliminar una tarea
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
        <main className="container"> 
            <div className="todo-app d-flex justify-content-center align-items-center vh-100">
                <div className="todo-app__container text-center">

                    {/* Componente para el título */}
                    <TodoHeader title="todosList" />

                    <div className="todo-app__content shadow p-0">

                        {/* Componente para ingresar nuevas tareas */}
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

                        {/* Componente para mostrar la lista de tareas */}
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

                        {/* Componente para el footer*/}
                        <TodoFooter todos={todos} onClear={() => setTodos([])} />
                            
                    </div>
                </div>
            </div>
        </main>   
    );
};

export default Home;