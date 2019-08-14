import React from "react";
import PropTypes from "prop-types";
import getRowOrder from "../../../../js-client/models/getRowOrder";
import CabinetRow from "./CabinetRow.jsx";

const Cabinet = ({ cabinet, onPSAClick, changeViewState }) => {
  const rows = getRowOrder(cabinet.label);
  return (
    <div>
      <div className={cabinet.label}>
        <table>
          <tbody>
            <CabinetRow
              row={cabinet.top}
              order={rows.top}
              onPSAClick={onPSAClick}
              changeViewState={changeViewState}
            />
            <CabinetRow
              row={cabinet.bot}
              order={rows.bot}
              onPSAClick={onPSAClick}
              changeViewState={changeViewState}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cabinet.propTypes = {
  cabinet: PropTypes.object,
  onPSAClick: PropTypes.function,
  changeViewState: PropTypes.function
};

export default Cabinet;
