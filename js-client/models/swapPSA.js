const axios = require("axios");

module.exports = request => {
  return axios
    .post(`http://localhost:3000/api/swappsa`, request)
    .then(res => {
      return res.data;
    })
    .catch(e => console.error(e));
};
