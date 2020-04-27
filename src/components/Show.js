import React, {useContext} from "react";
import {withRouter} from "react-router-dom";
import {FilmsContext} from "../providers/FilmsProvider";
import "./Show.css";
import LeadText from "./LeadText";

const Show = ({match}) => {
    const slug = match.params.slug;
    const {filmsAll, filmsLoading, filmsError} = useContext(FilmsContext);
    const film = filmsAll.find((film) => film.slug === slug);

    if (filmsLoading) return null;
    if (filmsError) return <LeadText text="Error loading films"/>;
    if (film == null) return <LeadText text="Film not found"/>

    return (
        <section className="flex-grow-1 d-flex flex-column p-3">
            <h4>{film.title}</h4>
            <p>{film.openingCrawl}</p>
            <p>Directed by: {film.director}</p>
        </section>
    );
};

export default withRouter(Show);
