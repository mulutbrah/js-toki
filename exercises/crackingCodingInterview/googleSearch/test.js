const googleSearch = require("./index");

const dbMock = ["abc.com", "dogs.com", "amazon.com", "facebook.com"];

describe("googleSearch function", () => {
  it("should return search result", () => {
    expect(googleSearch("abc", dbMock)).toEqual(["abc.com"]);
  });

  it("should works with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });
});
