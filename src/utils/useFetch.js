import { useEffect, useState } from 'react';

const useFecth = (endpoint) => {
    //inicializamos la data sin nada - variable de estado
    const [data, setData] = useState();

    useEffect(() => {
        //variable de entorno y parámetro que recibe
        fetch(`${process.env.REACT_APP_HOST_API}${endpoint}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [endpoint]);
    return data; //retornamos los datos
};

export default useFecth;