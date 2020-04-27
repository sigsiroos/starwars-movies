import * as Utils from "./Utils";
import kebabCase from "lodash/kebabCase";

export async function getFilms() {
    const response = await fetch("https://star-wars-api.herokuapp.com/films");
    const data = await response.json();

    return data
        .map(parseFilm)
        .filter((film) => film != null);
}

function parseFilm(data) {
    try {
        Utils.equalsOrThrow(data.model, "resources.film");
        Utils.stringOrThrow(data.fields.title);

        return {
            id: Utils.numberOrThrow(data.id),
            slug: kebabCase(data.fields.title),
            title: data.fields.title,
            episodeId: Utils.numberOrThrow(data.fields.episode_id),
            releaseDate: Utils.stringOrThrow(data.fields.release_date),
            openingCrawl: Utils.stringOrThrow(data.fields.opening_crawl),
            director: Utils.stringOrThrow(data.fields.director),
        };
    } catch(error) {
        console.error("Film parse error", error, data);
        return null;
    }
}
