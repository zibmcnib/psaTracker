import React from "react";
import ReactDOM from "react-dom";
import buildSite from "../../js-client/models/buildSystem";
import getSpares from "../../js-client/models/getSpares";
import getBroken from "../../js-client/models/getBroken";
import SpareStatus from "./components/Landing/SpareStatus.jsx";
import SparePage from "./components/PSASparePage/SparePage.jsx";
import DetailPage from "./components/PSADetailPage/DetailPage.jsx";
import Site from "./components/Landing/Site.jsx";
import Legend from "./components/Landing/Legend.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      detailView: false,
      spareView: false,
      brokenPSAs: []
    };
    this.onPSAClick = this.onPSAClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.onSpareStatusClick = this.onSpareStatusClick.bind(this);
  }

  onPSAClick(selectedPSA) {
    this.setState({ selectedPSA, detailView: true, spareView: false });
  }

  onBackClick() {
    this.setState({ detailView: false, spareView: false });
  }

  onSpareStatusClick() {
    this.setState({ detailView: false, spareView: true });
  }

  componentDidMount() {
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

    buildSite().then(siteData => {
      this.setState({
        site: siteData,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {!this.state.isLoading &&
          this.state.detailView &&
          !this.state.spareView && (
            <div>
              <DetailPage
                onBackClick={this.onBackClick}
                currentPSA={this.state.selectedPSA}
                onSpareStatusClick={this.onSpareStatusClick}
              />
            </div>
          )}
        {!this.state.isLoading &&
          !this.state.detailView &&
          !this.state.spareView && (
            <div className="site">
              <div className="center">
                <h1>Palo Verde CEDMCS PSA Status</h1>
                <Site units={this.state.site} onClick={this.onPSAClick} />
                <h3>PSA Security Advisory System</h3>
                <Legend />
                <SpareStatus
                  spares={this.state.spares}
                  onSpareStatusClick={this.onSpareStatusClick}
                />
              </div>
            </div>
          )}
        {!this.state.isLoading &&
          !this.state.detailView &&
          this.state.spareView && (
            <SparePage
              spares={this.state.spares}
              broken={this.state.brokenPSAs}
              onBackClick={this.onBackClick}
              onPSAClick={this.onPSAClick}
            />
          )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
