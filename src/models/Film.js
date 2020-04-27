/**
 * id: number,
 * slug: string,
 * title: string,
 * episodeId: number,
 * releaseDate: string,
 * openingCrawl: string,
 * director: string,
 */
import sortBy from "lodash/sortBy";

export function sortByReleaseDateAsc(films) {
    return sortBy(films, (film) => film.releaseDate);
}

export function sortByEpisodeAsc(films) {
    return sortBy(films, (film) => film.episodeId);
}
