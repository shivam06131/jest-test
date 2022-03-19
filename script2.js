const apiCall = () => {
  return new Promise((resolve, reject) => {
    let x = true;
    setTimeout(() => {
      if (x) {
        resolve({
          count: 87,
          data: [1, 2, 3, 4, 5],
        });
      } else {
        reject("no data");
      }
    }, 2000);
  });
};
// apiCall().then((data) => console.log(data));
module.exports = apiCall;
