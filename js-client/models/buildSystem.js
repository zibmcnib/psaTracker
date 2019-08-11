const locationData = require("./locationData");
// const getPSA = require("./getPSA");

const ATop = [1, 3, 5, 7, 9];
const ABot = [2, 4, 6, 8, 10];
// const BTop = [11, 81, null, 13];
// const BBot = [12, null, null, 14];
// const CTop = [15, 17, 19, 21];
// const CBot = [16, 18, 20, 22];

let unitize = (unit, sg) => {
  let DCID = `${unit}${sg.location}`;
  sg.location = DCID;
  return sg;
};

// let getFieldData = async psas => {

// }

let buildCabinets = unit => {
  let A = { top: {}, bot: {} };

  ATop.forEach(cabinet => {
    A.top[cabinet] = { locationData: {}, fieldData: {} };

    //apply specific location data to sg in cabinet
    A.top[cabinet].locationData = unitize(unit, locationData[cabinet]);

    //apply specific field data from database
    // let DCID = A.top[cabinet].locationData.location;
    // getPSA(DCID).then(psa => {
    //   A.top[cabinet].fieldData = psa;
    // });
  });

  ABot.forEach(cabinet => {
    A.bot[cabinet] = { locationData: {}, fieldData: {} };

    //apply specific location data to sg in cabinet
    A.bot[cabinet].locationData = unitize(unit, locationData[cabinet]);

    //apply specific field data from database
    // let DCID = A.bot[cabinet].locationData.location;
    // getPSA(DCID).then(psa => {
    //   console.log(psa);
    //   A.bot[cabinet].fieldData = psa;
    // });
  });

  return A;
};

module.exports = buildCabinets;
