import React from "react";
import System from "./System.jsx";

const Site = props => {
  const {
    units: [u1, u2, u3]
  } = props;

  return (
    <div>
      <System cabinets={u1} unit={1} />
      <System cabinets={u2} unit={2} />
      <System cabinets={u3} unit={3} />
    </div>
  );
};

// Site.propTypes = {
//   units: React.propTypes.array.isRequired
// };

export default Site;
