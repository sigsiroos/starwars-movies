import * as Utils from "./Utils";

describe("createQueryFilter", () => {
    it("creates a filter function", async () => {
        let filter;

        filter = Utils.createQueryFilter("", (item) => item.name);
        expect(filter({name: "ABC Test"})).toBe(true);
        expect(filter({name: "Test aBc"})).toBe(true);
        expect(filter({name: "Test BAC"})).toBe(true);

        filter = Utils.createQueryFilter("AbC", (item) => item.name);
        expect(filter({name: "ABC Test"})).toBe(true);
        expect(filter({name: "Test aBc"})).toBe(true);
        expect(filter({name: "Test BAC"})).toBe(false);
    });
});
