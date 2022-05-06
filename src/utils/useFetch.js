import { useState, useEffect } from "react";

const useFetch = (endpoint) => {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_API}${endpoint}`)
            .then(response => response.json())
            .then((data) => setData(data));
    }, [endpoint]);

    return data;
};

export default useFetch;