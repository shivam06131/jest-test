const apiCall = require("./script2");

//todo "done", "return" is used to wait for the async response while testing using jest.

//! "return" is very important as it waits for the async data when we use assertions (only works in promises)
// test("this is to test async await", () => {
//   expect.assertions(1);
//   return apiCall().then((res) => {
//     expect(res.count).toEqual(87);
//   });
// });

//! "done" is very important as it waits for the async data when we use assertions (works in both async and promises)
test("this is to test async await", (done) => {
  //! assertions means that this many expect statements are there
  expect.assertions(3);
  apiCall().then((res) => {
    expect(res.count).toEqual(87);
    expect(res.data.length).toEqual(5);
    expect(res.data.length).toBeGreaterThan(4);
    done();
  });
});

//mock fetching

test("mocking the response", () => {
  const mockFunction = jest.fn().mockReturnValue(
    Promise.resolve({
      count: 87,
      data: [1, 2, 3, 4, 5],
    })
  );

  expect.assertions(2);
  return apiCall(mockFunction).then((data) => {
    expect(data.count).toBe(87);
    expect(data.data.length).toBe(5);
    // expect(mockFunction.mock.calls.length).toBe(1);
  });
});
