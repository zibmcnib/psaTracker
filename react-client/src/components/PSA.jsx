import React from "react";

PSA.propTypes = {
  location: React.propTypes.string.isRequired,
  subgroup: React.propTypes.string.isRequired,
  group: React.propTypes.string.isRequired,
  serial: React.propTypes.string.isRequired,
  origin: React.propTypes.string,
  outage: React.propTypes.string.isRequired
};

const PSA = ({ location, subgroup, group, serial, origin, outage }) => (
  <div className="PSA" id={location}>
    <div className="subgroup">{subgroup}</div>
    <div className="group">{group}</div>
    <div className="serial">{serial}</div>
    <div className="origin">{origin}</div>
    <div className="outage">{outage}</div>
  </div>
);

export default PSA;
