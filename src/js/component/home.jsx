import React, {useState} from "react";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

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
    
    return (        
        <main className="container"> 
            <div className="todo-app d-flex justify-content-center align-items-center vh-100">
                <div className="todo-app__container text-center">

                    {/* Componente para el título */}
                    <TodoHeader title="todosList" />

                    <div className="todo-app__content shadow p-0">

                        {/* Componente para ingresar nuevas tareas */}
                        <TodoInput 
                            inputValue={inputValue}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                        />

                        {/* Componente para mostrar la lista de tareas */}
                        <TodoList 
                            todos={todos}
                            visibleIcons={visibleIcons}
                            onDelete={handleClick}
                            handleMouseEnter={(index) => setVisibleIcons((prev) => ({ ...prev, [index]: true }))}
                            handleMouseLeave={(index) => setVisibleIcons((prev) => ({ ...prev, [index]: false }))}
                        />

                        {/* Componente para el footer*/}
                        <TodoFooter todos={todos} onClear={() => setTodos([])} />
                            
                    </div>
                </div>
            </div>
        </main>   
    );
};

export default Home;