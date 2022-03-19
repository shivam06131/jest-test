//npm install --save-dev jest => for dev dependency
//npm test => for testing with jest
const googledb = ["cats.com", "dogs.com", "newcats.com", "newdogs.com"];

const searchInGoogle = (keyword, db) => {
  const data = db.filter((val) => {
    return val.includes(keyword);
  });
  return data;
};

// console.log(searchInGoogle("cat" , googledb));
module.exports = searchInGoogle;
