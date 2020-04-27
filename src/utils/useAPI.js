import {useState, useEffect} from "react";

function useAPI(load) {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        async function loadFromAPI() {
            try {
                const data = await load();
                setState({
                    data,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                console.error(error);
                setState({
                    data: null,
                    loading: false,
                    error: true,
                });
            }
        }

        loadFromAPI();
    }, [load]);

    return state;
}

export default useAPI;
