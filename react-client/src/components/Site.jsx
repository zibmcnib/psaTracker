import React from "react";
import System from "./System.jsx";

const Site = props => {
  const {
    units: [u1, u2, u3]
  } = props;

  return (
    <div>
      <System cabinets={u1} unit={1} onClick={props.onClick} />
      <System cabinets={u2} unit={2} onClick={props.onClick} />
      <System cabinets={u3} unit={3} onClick={props.onClick} />
    </div>
  );
};

// Site.propTypes = {
//   // u1: React.propTypes.object,
//   // u2: React.propTypes.object,
//   // u3: React.propTypes.object,
//   onClick: React.propTypes.function
// };

export default Site;
