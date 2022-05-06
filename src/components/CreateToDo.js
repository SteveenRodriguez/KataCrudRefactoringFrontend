import React, { useState } from 'react';

const CreateToDo = (lista) => {
    const [nameTodo, setToDo] = useState("");

    const submit = (e) => {
        const headers = { "Content-Type": "application/json" };

        const bodyValue = {
            nameToDo: nameTodo,
            completed: false,
            idList: lista.id,
        };
        let requestParameters = {
            method: "POST",
            headers,
            body: JSON.stringify(bodyValue),
        };

        fetch(`${process.env.REACT_APP_HOST_API}/api/todo`, requestParameters)
            .then(
                () => {
                    console.log("ToDo creado");
                });
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    required
                    value={nameTodo}
                    placeholder="Actividad a realizar"
                    onChange={(e) => setToDo(e.target.value)
                    }
                />
                <input type="submit" value="añadir" />
            </form>
        </>
    );
};

export default CreateToDo;
