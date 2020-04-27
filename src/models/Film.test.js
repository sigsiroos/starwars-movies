import * as Film from "./Film";

describe("sortByReleaseDateAsc", () => {
    it("creates a new sorted array", () => {
        const unsorted = [
            {releaseDate: "2019-01-01"},
            {releaseDate: "2018-01-01"},
            {releaseDate: "2020-01-01"},
        ];
        const sorted = Film.sortByReleaseDateAsc(unsorted);
        expect(sorted[0]).toBe(unsorted[1]);
        expect(sorted[1]).toBe(unsorted[0]);
        expect(sorted[2]).toBe(unsorted[2]);
    });
});

describe("sortByEpisodeAsc", () => {
    it("creates a new sorted array", () => {
        const unsorted = [
            {epilosodeId: 3},
            {episodeId: 1},
            {episodeId: 2},
        ];
        const sorted = Film.sortByEpisodeAsc(unsorted);
        expect(sorted[0]).toBe(unsorted[1]);
        expect(sorted[1]).toBe(unsorted[2]);
        expect(sorted[2]).toBe(unsorted[0]);
    });
});
