export function equalsOrThrow(a, b) {
    if (a !== b) throw new Error("Invalid value", a, b);
}

export function numberOrThrow(value) {
    if (typeof value !== "number") throw new Error("Invalid number value", value);
    return value;
}

export function stringOrThrow(value) {
    if (typeof value !== "string") throw new Error("Invalid string value", value);
    return value;
}

export function createQueryFilter(query, getValue) {
    const lowerCaseQuery = String(query).trim().toLowerCase();

    return (item) => {
        if (query == null || lowerCaseQuery === "") return true;

        if (item == null) return false;
        const value = getValue(item);
        const lowerCaseValue = String(value).trim().toLowerCase();
        return lowerCaseValue.indexOf(lowerCaseQuery) !== -1;
    };
}
