const axios = require("axios");

module.exports = () => {
  return axios
    .get(`http://localhost:3000/api/DCIDs`)
    .then(res => {
      return res.data;
    })
    .catch(e => console.error(e));
};
