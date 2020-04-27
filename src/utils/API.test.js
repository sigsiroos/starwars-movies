import * as API from "./API";

it("retrieves data from public api", async () => {
    const result = await API.getFilms();
    expect(result.length).toBe(6);
});
