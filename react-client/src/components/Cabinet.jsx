import React from "react";
import PropTypes from "prop-types";
import getRowOrder from "../../../js-client/models/getRowOrder";
import CabinetRow from "./CabinetRow.jsx";

const Cabinet = ({ cabinet, onClick }) => {
  const rows = getRowOrder(cabinet.label);
  return (
    <div>
      <div className={cabinet.label}>
        <table>
          <tbody>
            <CabinetRow row={cabinet.top} order={rows.top} onClick={onClick} />
            <CabinetRow row={cabinet.bot} order={rows.bot} onClick={onClick} />
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
