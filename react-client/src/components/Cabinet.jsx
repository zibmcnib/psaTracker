import React from "react";
import locationData from "../../../js-client/models/locationData";
import CabinetRow from "./CabinetRow.jsx";

const Cabinet = props => {
  let top = [];
  let bot = [];
  switch (props.cabinet.label) {
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
  return (
    <div>
      <div className={props.cabinet.label}>
        <table>
          <tbody>
            <CabinetRow
              row={props.cabinet.top}
              order={top}
              onClick={props.onClick}
            />
            <CabinetRow
              row={props.cabinet.bot}
              order={bot}
              onClick={props.onClick}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Cabinet.propTypes = {
//   cabinet: React.propTypes.object,
//   onClick: React.propTypes.function
// };

export default Cabinet;
