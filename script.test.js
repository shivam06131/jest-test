const searchInGoogle = require("./script");
// import { searchInGoogle } from "./script";
const newdb = ["cats.com", "animals.com", "birds.com"];

test("test two", () => {
  expect(2 + 2).toBe(4);
});

test("test three", () => {
  expect(3 + 2).toEqual(5);
});
//describe() -> is used to sum up test of same types
describe("googleSearch test", () => {
  it("test one", () => {
    expect(searchInGoogle("cat", newdb)).toEqual(["cats.com"]);
  });

  test("testing for undefined and null", () => {
    expect(searchInGoogle(undefined, newdb)).toEqual([]);
    expect(searchInGoogle(null, newdb)).toEqual([]);
  });
});
