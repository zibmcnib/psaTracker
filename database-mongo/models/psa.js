const mongoose = require("../index");

const psaSchema = new mongoose.Schema({
  quantity: Number,
  description: String,
  serial: String,
  location: String,
  replaced: Number,
  coil: String,
  y1: Number,
  y2: Number,
  y3: Number,
  y4: Number,
  failed: Number,
  wecRefurb: Number,
  breakerRep: Number,
  terrorist: Number,
  wpps: Number,
  spare: Number,
  comments: String
});

const PSAs = mongoose.model("PSAs", psaSchema, "psas");

const find = async location => {
  return await PSAs.find({ location }).exec();
};

const getSpares = async () => {
  return await PSAs.find({ spare: 1 }).exec();
};

const getBroken = async () => {
  return await PSAs.find({ spare: 0 })
    .where("location")
    .in(["U1 Hot Shop", "U1 HOT SHOP", "WEC", "Simulator", "PVSER", "PVS"])
    .exec();
};

const installSpareInUnit = async (serialOfGood, locationOfBroke) => {
  await PSAs.updateOne({ location: locationOfBroke }, { location: "PVSER" }) 
  .then(await PSAs.updateOne(
      { serial: serialOfGood },
      { location: locationOfBroke }
  )).catch(e => console.error(e));
};

const makeSpare = async serial => {
  return await PSAs.updateOne({ serial }, { spare: 1 });
};

const makeBroke = async serial => {
  return await PSAs.updateOne({ serial }, { spare: 0 });
};

module.exports = {
  find,
  getSpares,
  getBroken,
  makeSpare,
  makeBroke,
  installSpareInUnit
};
