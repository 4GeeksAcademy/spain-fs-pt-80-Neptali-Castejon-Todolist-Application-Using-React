import React from "react";

export const AnyComponent = () => {

    //const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue ] = React.useState('');
    
    const validateInput = () => {
      if(inputValue === "") alert("The input cannot be empty");
      else alert("All perfect!");
    };
    return <div>
        <input type="text" onKeyDown={e => setInputValue(e.target.value)} value={inputValue} />
        {/* <button onClick={validateInput}>Click to validate empty</button> */}
    </div>;
}

// ¿Cuál es el propósito principal de la aplicación?

    // Es una herramienta para que los usuarios gestionen sus tareas diarias.
    // ¿Qué funcionalidades básicas necesitas implementar?
        // Agregar tareas.
        // Eliminar tareas.
        // Mostrar un mensaje cuando no hay tareas.
        // Asegurarte de que las tareas se agreguen con la tecla "Enter".