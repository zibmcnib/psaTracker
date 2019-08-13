import React from "react";
import locationData from "../../../js-client/models/locationData";
import PropTypes from "prop-types";
import CabinetRow from "./CabinetRow.jsx";

const Cabinet = ({ cabinet, onClick }) => {
  let top = [];
  let bot = [];
  switch (cabinet.label) {
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
      <div className={cabinet.label}>
        <table>
          <tbody>
            <CabinetRow row={cabinet.top} order={top} onClick={onClick} />
            <CabinetRow row={cabinet.bot} order={bot} onClick={onClick} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cabinet.propTypes = {
  cabinet: PropTypes.object,
  onClick: PropTypes.function
};

export default Cabinet;
