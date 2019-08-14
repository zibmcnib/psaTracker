import React from "react";
import PropTypes from "prop-types";
import InUnitDetail from "./InUnitDetail.jsx";
import SpareDetail from "./SpareDetail.jsx";

const DetailPage = ({
  spares,
  currentPSA,
  refreshSpares,
  onSpareStatusClick,
  changeViewState
}) => {
  if (currentPSA.fieldData !== undefined) {
    return (
      <InUnitDetail
        spares={spares}
        currentPSA={currentPSA}
        changeViewState={changeViewState}
      />
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
