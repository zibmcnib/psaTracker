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

const findPSA = async (location) => {
  return await PSAs.find({location});
};

module.exports = findPSA;
