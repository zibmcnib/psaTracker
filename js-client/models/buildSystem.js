// const locationData = require("./locationData");
// const getPSA = require("./getPSA");
const getFieldDCIDs = require("./getFieldDCIDs");
const locationDataByDCID = require("./locationDataByDCID");

let newGetFieldData = async (unit, DCIDs) => {
  let psas = [];
  for (let DCID of DCIDs) {
    let unitizedDCID = unitizeDCID(unit, DCID);
    let fieldPSAs = await getFieldDCIDs().then(res => {
      return res;
    });
    psas.push(
      fieldPSAs.filter(psa => {
        return psa.location === unitizedDCID;
      })[0]
    );
  }
  return psas;
};

let newGetLocationData = (unit, DCIDs) => {
  let locations = [];
  for (let DCID of DCIDs) {
    locations.push(locationDataByDCID.locationDCIDS[DCID]);
  }
  return locations;
};

let unitizeDCID = (unit, DCID) => {
  if (DCID === "HBPSA" || DCID === "blank" || DCID === "HBCP") {
    return DCID;
  } else {
    return `${unit}${DCID}`;
  }
};

let buildCabinet = async (unit, cabinet) => {
  let top = [];
  let bot = [];
  switch (cabinet) {
    case "A":
      top = locationDataByDCID.ATop;
      bot = locationDataByDCID.ABot;
      break;
    case "B":
      top = locationDataByDCID.BTop;
      bot = locationDataByDCID.BBot;
      break;
    case "C":
      top = locationDataByDCID.CTop;
      bot = locationDataByDCID.CBot;
      break;
  }

  const fieldDataTop = await newGetFieldData(unit, top);
  const fieldDataBot = await newGetFieldData(unit, bot);
  const locationDataTop = newGetLocationData(unit, top);
  const locationDataBot = newGetLocationData(unit, bot);

  let builtCabinet = {};
  builtCabinet = { label: cabinet, top: {}, bot: {} };

  top.forEach((DCID, i) => {
    let unitizedDCID = unitizeDCID(unit, DCID);
    builtCabinet.top[unitizedDCID] = {
      fieldData: fieldDataTop[i],
      locationData: locationDataTop[i]
    };
  });

  bot.forEach((DCID, i) => {
    let unitizedDCID = unitizeDCID(unit, DCID);
    builtCabinet.bot[unitizedDCID] = {
      fieldData: fieldDataBot[i],
      locationData: locationDataBot[i]
    };
  });

  return await builtCabinet;
};

let buildSystem = async unit => {
  let promises = [
    buildCabinet(unit, "A"),
    buildCabinet(unit, "B"),
    buildCabinet(unit, "C")
  ];

  return Promise.all(promises)
    .then(system => system)
    .catch(e => console.error(e));
};

let buildSite = async () => {
  let promises = [buildSystem(1), buildSystem(2), buildSystem(3)];

  return Promise.all(promises)
    .then(site => site)
    .catch(e => console.error(e));
};

module.exports = {
  buildSite,
  buildSystem,
  buildCabinet,
  newGetLocationData,
  newGetFieldData,
  unitizeDCID
};
