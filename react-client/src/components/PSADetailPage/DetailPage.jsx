import React from "react";
import PropTypes from "prop-types";
import InUnitDetail from "./InUnitDetail.jsx";
import SpareDetail from "./SpareDetail.jsx";

const DetailPage = ({ spares, currentPSA, refreshSpares, changeViewState }) => {
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
        refreshSpares={refreshSpares}
        changeViewState={changeViewState}
      />
    );
  }
};

DetailPage.propTypes = {
  currentPSA: PropTypes.object,
  onBackClick: PropTypes.func,
  onSpareStatusClick: PropTypes.func,
  refreshSpares: PropTypes.func
};

export default DetailPage;
