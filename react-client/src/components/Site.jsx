import React from "react";
import System from "./System.jsx";

// System.propTypes = {
//   cabinets: React.propTypes.array.isRequired
// };
//        U1
// (3)[{…}, {…}, {…}]

const Site = props => {
  return (
    <div>
      <div>Unit 1</div>
      <System cabinets={props.units[0]} />
      <div>Unit 2</div>
      <System cabinets={props.units[1]} />
      <div>Unit 3</div>
      <System cabinets={props.units[2]} />
    </div>
  );
};

export default Site;
