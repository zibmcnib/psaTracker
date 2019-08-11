const mongoose = require("../index");

const locationSchema = new mongoose.Schema({
  location: String,
  unit: Number,
  sg: Number,
  group: String,
  fingers: Number,
  y1: Number,
  y2: Number,
  y3: Number,
  y4: Number
});

const Locations = mongoose.model("Locations", locationSchema, "locationInfo");

const selectAllLocations = async () => {
  return await Locations.find({});
};

module.exports = selectAllLocations;
