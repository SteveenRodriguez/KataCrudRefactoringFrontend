import React, { useState } from 'react';

const CreateToDo = (lista) => {
    //iniciamos el estado de los todos en vacio
    const [nameTodo, setToDo] = useState("");

    const submit = (e) => {
        const headers = { "Content-Type": "application/json" };
        console.log(nameTodo);
        const bodyValue = {
            nameTodo: nameTodo,
            completed: false,
            idList: lista.id,
        };
        //objeto respuesta, lo pasamos al fetch
        let requestParameters = {
            method: "POST",
            headers,
            body: JSON.stringify(bodyValue),
        };
        //llamamos a nuesta api, variable de entorno y le pasamos los parámetros
        fetch(`${process.env.REACT_APP_HOST_API}/api/todo`, requestParameters)
            .then(() => { console.log("ToDo creado"); });
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    required
                    value={nameTodo}
                    placeholder="Actividad a realizar"
                    onChange={(e) => setToDo(e.target.value)}
                />
                <input type="submit" value="añadir" />
            </form>
        </>
    );
};

export default CreateToDo;
