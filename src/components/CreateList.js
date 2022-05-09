import React, { useState } from 'react';


//creación función CreateList
const CreateList = () => {

    //se crea la lista, con su estado inicial en cero
    const [lista, setLista] = useState("");

    const submit = (e) => {
        const headers = { "Content-Type": "application/json" };
        //objeto respuesta, lo pasamos al fetch
        let requestParameters = {
            method: "POST",
            headers,
            body: JSON.stringify({ //convertimos el body en un Json
                name: lista,
            }),
        };
        //llamamos a nuesta api, variable de entorno y le pasamos los parámetros
        fetch(`${process.env.REACT_APP_HOST_API}/api/list`, requestParameters)
            .then(() => { console.log("Lista Creada"); });

    };

    return (
        <form onSubmit={submit} className='container'>
            <h3>Create New List</h3>
            <input
                type="text"
                required
                value={lista}
                placeholder="Name List"
                onChange={(e) => { setLista(e.target.value); }}
                className='container px-4'
            />
            <input type="submit" className="btn btn-primary" value="Create" />
        </form>
    );

};

export default CreateList;
