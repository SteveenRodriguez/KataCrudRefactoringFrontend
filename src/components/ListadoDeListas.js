import React from 'react';
import { useFetch } from '../utils/useFetch';
import List from "./List";


const ListadoDeListas = (props) => {

    //endpoint para enviar al useFecth, trae datos del servidor
    const todos = useFetch("/api/todos");
    const listas = useFetch("/api/list");

    if (!todos) {
        return <span>No hay Todos</span>;
    }

    //si no tenemos listas mostramos en el Dom
    if (!listas) {
        return <span>No hay Listas</span>;
    }

    //creamos una copia de las listas
    const listWithTodos = listas.map(list => {
        //si se cumple la condición nos crea los todos en las listas
        const todosInList = todos.filter(todo => todo.idList === list.id);
        return { list, todos: todosInList };
    });

    return (
        <div className='container'>
            <hr></hr>
            <h1>List</h1>
            <hr></hr>
            {listWithTodos.map((info) => (
                <List key={info.list.id} list={info.list} todos={info.todos} />
            ))}
        </div>
    );

};

export default ListadoDeListas;