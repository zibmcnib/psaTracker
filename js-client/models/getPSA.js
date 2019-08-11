const axios = require("axios");

module.exports = async location => {
  await axios
    .get(`http://localhost:3000/api/psas/${location}`)
    .then(psa => {
      return psa.data[0];
    })
    .catch(e => console.error(e));
};
