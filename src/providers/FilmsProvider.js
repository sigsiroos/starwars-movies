import React, {createContext, useState, useEffect} from "react";
import * as API from "../utils/API";
import useAPI from "../utils/useAPI";
import * as Utils from "../utils/Utils";
import * as Film from "../models/Film";

export const FilmsContext = createContext();

const FilmsProvider = (props) => {
    const {data, loading, error} = useAPI(API.getFilms);
    const [films, setFilms] = useState([]);
    const [query, setQuery] = useState("");
    const [sorter, setSorter] = useState(null);

    useEffect(() => {
        let results = data == null ? [] : data.slice();

        if (query != null && String(query).trim() !== "") {
            const filter = Utils.createQueryFilter(query, (film) => film.title);
            results = results.filter(filter);
        }

        const actualSorter = Film[sorter];
        if (actualSorter != null) {
            results = actualSorter(results);
        }

        setFilms(results);
    }, [data, query, sorter]);

    return (
        <FilmsContext.Provider
            {...props}
            value={{
                filmsAll: data || [],
                films: films,
                filmsLoading: loading,
                filmsError: error,
                filmsQuery: query,
                filmsSetQuery: setQuery,
                filmsSorter: sorter,
                filmsSetSorter: setSorter,
            }}
        />
    );
};

export default FilmsProvider;
