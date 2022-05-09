import React, { useState } from 'react';
import ToDo from './Todo';
import CreateToDo from './CreateToDo';

const List = ({ list, todos }) => {
    const [edit, setEdit] = useState(false);
    const [newNameList, setNewNameList] = useState("");
    const [eliminar, setEliminar] = useState(false);

    const deleteList = (id, eliminar) => {
        const headers = { "Content-Type": "application/json" };
        let requestParameters = {
            method: "DELETE",
            headers
        };
        fetch(`${process.env.REACT_APP_HOST_API}/api/list/${id}`, requestParameters)
            .then(() => {
                console.log(" Lista Eliminada");
            });
    };

    const editList = (list, newNameList) => {
        const headers = { "Content-Type": "application/json" };
        let requestParameters = {
            method: "PUT",
            headers,
            body: JSON.stringify({
                name: newNameList,
            })
        };
        fetch(`${process.env.REACT_APP_HOST_API}/api/list/${list.id}`, requestParameters)
            .then(() => {
                console.log("Lista Editada");
            });
    };

    return (
        <div className="card card-body border-primary mb-3 mt-2" >
            <div>
                <h1>{list.name}</h1>
                {
                    edit &&
                    <div>
                        <form>
                            <input type="text" placeholder="Change List Name" onChange={(e) => { setNewNameList(e.target.value); }}></input>

                            <button className='btn btn-success' onClick={() => {
                                editList(list, newNameList);
                            }}>Edit List</button>

                            <button className="btn btn-danger" onClick={() => {
                                deleteList(list.id, eliminar);

                            }
                            }>Delete List</button>

                            <button onClick={() => { setEdit(false); }} className="btn btn-primary"> Cancel</button>
                        </form>
                    </div>
                }

                <button className="btn btn-warning" onClick={() => { setEdit(true); }}>Settings</button>
                <hr></hr>
                <CreateToDo
                    {...list}
                />
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Activity</td>
                            <td>Completed</td>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            todos.map(todo => (
                                <ToDo
                                    key={todo.idToDo}
                                    {...todo}
                                />
                            ))
                        }
                    </tbody>

                </table>

            </div>

        </div >
    );

};

export default List;