import React from "react";
import PropTypes from "prop-types";
import states from "../states";

/// Where you left off...

// You currently have access to the psa selected from the landing page and the psa selected
// from the spare pool. Now you just need to use your CRUD routes to perform the swap.

const PSASwapConfirm = ({ state, onPSAClick, changeViewState }) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <button onClick={() => changeViewState(states.detailView)}>
          {console.log(state)}
        </button>
      </div>
    </div>
  );
};

PSASwapConfirm.propTypes = {
  onPSAClick: PropTypes.function,
  changeViewState: PropTypes.function,
  spares: PropTypes.array
};

export default PSASwapConfirm;
