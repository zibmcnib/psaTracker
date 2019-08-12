const axios = require("axios");

module.exports = location => {
  return axios
    .get(`http://localhost:3000/api/psas/${location}`)
    .then(res => {
      return res.data[0];
    })
    .catch(e => e);
};
