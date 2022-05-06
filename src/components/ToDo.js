import React, { useState } from 'react';
import EditToDo from './EditToDo';

const decorationDone = {
    textDecoration: 'line-through'
};

const ToDo = (todo) => {
    const [editandoTodo, setEditando] = useState(false);

    const submit = (e) => {
        setEditando(true);
    };

    return (
        <tr key={todo.idToDo} style={todo.completed ? decorationDone : {}}>
            <td>{todo.idToDo}</td>
            <td>{todo.nameToDo}</td>
            <td><input type="checkbox" defaultChecked={todo.completed}></input></td>
            <td><button >Eliminar</button></td>
            <td><button onClick={() => { submit(); }}>Editar</button>
                {
                    editandoTodo ? <EditToDo /> : <></>
                }
            </td>
        </tr>
    );
};

export default ToDo;