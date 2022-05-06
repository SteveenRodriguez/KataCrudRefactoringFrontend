import React from 'react';

const EditToDo = () => {
    const cancelar = (e) => {
        e.preventDefault();
    };

    const editTodo = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="Nombre a cambiar"></input>
                <button onClick={editTodo}>Aceptar</button>
                <button onClick={cancelar}> Cancelar</button>
            </form>
        </div>
    );
};

export default EditToDo;
