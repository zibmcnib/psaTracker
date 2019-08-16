import locationData from "./locationDataByDCID";

let getRowOrder = label => {
  let top = [];
  let bot = [];
  switch (label) {
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
  return { top, bot };
};

export default getRowOrder;
