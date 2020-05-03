const fetch = require("node-fetch");
const getPeople = require("./index");

it("should calls swapi to get people", () => {
  expect.assertions(2);

  return getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.count).toBeGreaterThan(5);
  });
});
