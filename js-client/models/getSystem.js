const axios = require("axios");

module.exports = () => {
  return axios
    .get(`http://localhost:3000/api/CEDMCSStatus`)
    .then(res => {
      return res.data[0];
    })
    .catch(e => console.error(e));
};
