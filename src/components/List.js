import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {FilmsContext} from "../providers/FilmsProvider";
import "./List.css";

const List = () => {
    const {films} = useContext(FilmsContext);

    return (
        <div className="List flex-grow-1">
            <div className="list-group list-group-flush">
                {films.map((film) => {
                    return (
                        <Link key={film.id} to={`/${film.slug}`} className="p-3 border-bottom list-group-item list-group-item-action d-flex flex-row">
                            <div className="text-uppercase text-muted pr-3">Episode {film.episodeId}</div>
                            <div className="flex-grow-1 font-weight-bold pr-3">{film.title}</div>
                            <div>{film.releaseDate}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default List;
