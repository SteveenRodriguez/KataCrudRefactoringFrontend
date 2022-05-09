import React from 'react';
import EditToDo from './EditToDo';

const decorationDone = {
    textDecoration: 'line-through'
};

const ToDo = (todo) => {
    return (

        <tr key={todo.idToDo} style={todo.completed ? decorationDone : {}}>
            <td >{todo.idToDo}</td>
            <td >{todo.nameToDo}</td>
            <td><input type="checkbox" defaultChecked={todo.completed}></input></td>

            <EditToDo
                todos={todo}
            />
        </tr>
    );
};

export default ToDo;