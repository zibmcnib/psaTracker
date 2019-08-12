const locationData = require("./locationData");
const getPSA = require("./getPSA");

let getFieldData = async (unit, subGroups) => {
  let promises = [];
  for (let subGroup of subGroups) {
    let DCID = getDCID(unit, subGroup);
    promises.push(await getPSA(DCID));
  }

  return Promise.all(promises)
    .then(fieldData => fieldData)
    .catch(e => console.error(e));
};

let getLocationData = (unit, subGroups) => {
  let locations = [];
  for (let subGroup of subGroups) {
    const DCID = getDCID(unit, subGroup);
    let data = locationData[subGroup];
    data.location = DCID;
    locations.push(data);
  }
  return locations;
};

let getDCID = (unit, sg) => {
  let location = locationData[sg].location;
  return `${unit}${location}`;
};

let buildCabinet = async (unit, cabinet) => {
  let top = [];
  let bot = [];
  switch (cabinet) {
    case "A":
      top = locationData.ATop;
      bot = locationData.ABot;
      break;
    case "B":
      top = locationData.BTop;
      bot = locationData.BBot;
      break;
    case "C":
      top = locationData.CTop;
      bot = locationData.CBot;
      break;
  }

  const fieldDataTop = await getFieldData(unit, top);
  const fieldDataBot = await getFieldData(unit, bot);
  const locationDataTop = getLocationData(unit, top);
  const locationDataBot = getLocationData(unit, bot);

  let builtCabinet = {};
  builtCabinet = { label: cabinet, top: {}, bot: {} };

  top.forEach((sg, i) => {
    builtCabinet.top[sg] = {
      fieldData: fieldDataTop[i],
      locationData: locationDataTop[i]
    };
  });

  bot.forEach((sg, i) => {
    builtCabinet.bot[sg] = {
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

module.exports = buildSite;
