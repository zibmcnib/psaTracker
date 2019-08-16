import React from "react";
import ReactDOM from "react-dom";
import { buildSite } from "../../js-client/models/buildSystem";
import getSpares from "../../js-client/models/getSpares";
import getBroken from "../../js-client/models/getBroken";
import swapPSA from "../../js-client/models/swapPSA";
import SpareStatus from "./components/Landing/SpareStatus.jsx";
import SparePage from "./components/PSASparePage/SparePage.jsx";
import DetailPage from "./components/PSADetailPage/DetailPage.jsx";
import Site from "./components/Landing/Site.jsx";
import Legend from "./components/Landing/Legend.jsx";
import PSASwapInitial from "./components/PSADetailPage/PSASwapInitial.jsx";
import PSASwapConfirm from "./components/PSADetailPage/PSASwapConfirm.jsx";
import states from "./components/states";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = states.isLoading;
    this.onPSAClick = this.onPSAClick.bind(this);
    this.onSparePSAClick = this.onSparePSAClick.bind(this);
    this.changeViewState = this.changeViewState.bind(this);
    this.refreshSpares = this.refreshSpares.bind(this);
    this.handlePSASwap = this.handlePSASwap.bind(this);
  }

  //CONTROLLER
  changeViewState(state) {
    this.setState(state);
  }

  //MODEL
  onPSAClick(selectedPSA) {
    this.setState({ selectedPSA });
  }

  onSparePSAClick(selectedSparePSA) {
    this.setState({ selectedSparePSA });
  }

  refreshSpares() {
    getSpares().then(spareData => {
      this.setState({
        spares: spareData
      });
    });

    getBroken().then(brokenData => {
      this.setState({
        brokenPSAs: brokenData
      });
    });
  }

  async refreshEverything() {
    try {
      let { landing } = states;
      const [spares, broken, site] = await Promise.all([
        getSpares(),
        getBroken(),
        buildSite()
      ]);
      this.setState({ spares, broken, site, landing });
    } catch (e) {
      // make error state
      console.error(e);
    }
  }

  async handlePSASwap(PSAsToSwap) {
    await swapPSA(PSAsToSwap);
    this.refreshEverything();
  }

  componentDidMount() {
    const { loading } = states;
    this.setState(loading, this.refreshEverything);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/* PSA DETAIL PAGE */}
        {this.state.isLoading && <div>Loading...</div>}
        {/* LANDING PAGE */}
        {this.state.landing && (
          <div className="site">
            <div className="center">
              <h1>Palo Verde CEDMCS PSA Status</h1>
              <Site
                units={this.state.site}
                changeViewState={this.changeViewState}
                onPSAClick={this.onPSAClick}
              />
              <h3>PSA Security Advisory System</h3>
              <Legend />
              <SpareStatus
                spares={this.state.spares}
                changeViewState={this.changeViewState}
              />
            </div>
          </div>
        )}
        {/* SPARES PAGE */}
        {this.state.spareView && (
          <SparePage
            spares={this.state.spares}
            broken={this.state.brokenPSAs}
            changeViewState={this.changeViewState}
            onPSAClick={this.onPSAClick}
          />
        )}
        {/* DETAILS PAGE */}
        {this.state.detailView && (
          <div>
            <DetailPage
              spares={this.state.spares}
              currentPSA={this.state.selectedPSA}
              refreshSpares={this.refreshSpares}
              changeViewState={this.changeViewState}
            />
          </div>
        )}
        {/* INITIAL PSA SWAP PAGE  */}
        {this.state.swapPSAInitialView && (
          <PSASwapInitial
            spares={this.state.spares}
            changeViewState={this.changeViewState}
            onSparePSAClick={this.onSparePSAClick}
          />
        )}
        {/* PSA SWAP CONFIRMATION PAGE */}
        {this.state.swapPSAConfirmView && (
          <PSASwapConfirm
            selectedPSA={this.state.selectedPSA}
            selectedSparePSA={this.state.selectedSparePSA}
            handlePSASwap={this.handlePSASwap}
            changeViewState={this.changeViewState}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
