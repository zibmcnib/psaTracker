const locationData = require("./locationData");
const getPSA = require("./getPSA");

let getFieldData = async (unit, subGroups) => {
  let promises = [];
  for (let subGroup of subGroups) {
    let DCID = getDCID(unit, subGroup);
    promises.push(await getPSA(DCID));
  }

  return Promise.all(promises).then(fieldData => fieldData);
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
      top = [1, 3, 5, 7, 9];
      bot = [2, 4, 6, 8, 10];
      break;
    case "B":
      top = [11, 81, "blank", 13];
      bot = [12, "HBPSA", "HBCP", 14];
      break;
    case "C":
      top = [15, 17, 19, 21];
      bot = [16, 18, 20, 22];
      break;
  }

  const fieldDataTop = await getFieldData(unit, top);
  const locationDataTop = getLocationData(unit, top);
  const fieldDataBot = await getFieldData(unit, bot);
  const locationDataBot = getLocationData(unit, bot);

  let builtCabinet = { top: {}, bot: {} };

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

module.exports = buildCabinet;
