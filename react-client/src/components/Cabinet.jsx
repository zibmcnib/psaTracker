import React from "react";
import locationData from "../../../js-client/models/locationData";
import CabinetRow from "./CabinetRow.jsx";

// Cabinet.propTypes = {
//   top: React.propTypes.object.isRequired,
//   bot: React.propTypes.object.isRequired
// };

// Cabinet A
// {top: {…}, bot: {…}}
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
    <div className="cabinet">
      <table>
        <tbody>
          <CabinetRow row={props.cabinet.top} order={top} />
          <CabinetRow row={props.cabinet.bot} order={bot}/>
        </tbody>
      </table>
    </div>
  );
};

export default Cabinet;
