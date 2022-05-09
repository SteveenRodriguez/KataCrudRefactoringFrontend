import React, { useState } from 'react';

const EditToDo = ({ todos }) => {
    const [edit, setEdit] = useState(false);
    const [newNameTodo, setNewNameTodo] = useState("");
    const [eliminar, setEliminar] = useState(false);

    const deleteTodo = (id, eliminar) => {
        const headers = { "Content-Type": "application/json" };
        let requestParameters = {
            method: 'DELETE',
            headers,
            mode: 'no-cors',
        };
        fetch(`${process.env.REACT_APP_HOST_API}/api/todo/delete/${id}`, requestParameters)
            .then(() => {
                console.log("Todo Eliminada");
            });
    };

    const editTodos = (todo, newNameTodo) => {
        const headers = { "Content-Type": "application/json" };
        let requestParameters = {
            method: "PUT",
            headers,
            mode: 'no-cors',
            body: JSON.stringify({
                name: newNameTodo,
            })
        };
        fetch(`${process.env.REACT_APP_HOST_API}/api/todo/${todo}`, requestParameters)
            .then(() => {
                console.log("Todo Editada");
            });
    };

    return (
        <div>
            {edit &&
                <div>
                    <form>
                        <input type="text" placeholder="Change ToDo Name" onChange={(e) => { setNewNameTodo(e.target.value); }}></input>

                        <button className='btn btn-success' onClick={() => {
                            editTodos(todos, newNameTodo);
                        }}>Edit List</button>

                        <button className="btn btn-danger" onClick={(e) => {
                            deleteTodo(todos.idToDo, eliminar);
                        }
                        }>Delete ToDo</button>

                        <button onClick={() => { setEdit(false); }} className="btn btn-primary"> Cancel</button>
                    </form>

                </div>
            }

            <button className="btn btn-warning" onClick={() => { setEdit(true); }}>Settings</button>
        </div>
    );
};

export default EditToDo;
