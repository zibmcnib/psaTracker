const axios = require("axios");

module.exports = serial => {
  return axios
    .post(`http://localhost:3000/api/makebroke/${serial}`)
    .then(res => {
      return res.data;
    })
    .catch(e => console.error(e));
};
