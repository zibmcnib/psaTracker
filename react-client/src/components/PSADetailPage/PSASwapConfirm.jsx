import React from "react";
import PropTypes from "prop-types";
import states from "../states";

const PSASwapConfirm = ({
  selectedPSA,
  selectedSparePSA,
  handlePSASwap,
  changeViewState
}) => {
  const serialOfGood = selectedSparePSA.serial;
  const serialOfBad = selectedPSA.fieldData.serial;
  const locationOfBad = selectedPSA.fieldData.location;
  return (
    <div>
      <h1>Confirm Replacement:</h1>
      <h2>
        Move PSA <em>{serialOfBad}</em> from <em>{locationOfBad}</em> to Spare
        Pool
      </h2>
      <h2>
        Move Spare PSA <em>{serialOfGood}</em> from spares to{" "}
        <em>{locationOfBad}</em>.
      </h2>
      <h1>Are you sure?</h1>
      <button onClick={() => changeViewState(states.detailView)}>Cancel</button>
      <button
        onClick={() => {
          handlePSASwap({ serialOfGood, locationOfBad });
        }}
      >
        Confirm
      </button>
    </div>
  );
};

PSASwapConfirm.propTypes = {
  selectedPSA: PropTypes.object,
  selectedSparePSA: PropTypes.object,
  changeViewState: PropTypes.function,
  handlePSASwap: PropTypes.function
};

export default PSASwapConfirm;
