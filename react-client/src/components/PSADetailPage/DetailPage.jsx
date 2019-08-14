import React from "react";
import PropTypes from "prop-types";
import PSAInUnitDetail from "./PSAInUnitDetail.jsx";
import SpareDetail from "./SpareDetail.jsx";

const DetailPage = ({
  currentPSA,
  onBackClick,
  onSpareStatusClick,
  refreshSpares
}) => {
  if (currentPSA.fieldData !== undefined) {
    return (
      <PSAInUnitDetail currentPSA={currentPSA} onBackClick={onBackClick} />
    );
  } else {
    return (
      <SpareDetail
        currentPSA={currentPSA}
        onSpareStatusClick={onSpareStatusClick}
        refreshSpares={refreshSpares}
      />
    );
  }
};

DetailPage.propTypes = {
  currentPSA: PropTypes.object,
  onBackClick: PropTypes.function,
  onSpareStatusClick: PropTypes.function,
  refreshSpares: PropTypes.function
};

export default DetailPage;
