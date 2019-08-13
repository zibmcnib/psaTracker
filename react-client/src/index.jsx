import React from "react";
import ReactDOM from "react-dom";
import buildSite from "../../js-client/models/buildSystem";
import getSpares from "../../js-client/models/getSpares";
import SparesTable from "./components/SparesTable.jsx";
import DetailView from "./components/DetailView.jsx";
import Site from "./components/Site.jsx";
import Legend from "./components/Legend.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      detailView: false
    };
    this.onPSAClick = this.onPSAClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onPSAClick(selectedPSA) {
    this.setState({ selectedPSA, detailView: true });
  }

  onBackClick() {
    this.setState({ detailView: false });
  }

  componentDidMount() {
    getSpares().then(spareData => {
      this.setState({
        spares: spareData,
        isLoading: true
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
        {this.state.isLoading && <div>Loading.</div>}
        {!this.state.isLoading && this.state.detailView && (
          <div>
            <DetailView onClick={this.onBackClick} currentPSA={this.state.selectedPSA} />
          </div>
        )}
        {!this.state.isLoading && !this.state.detailView && (
          <div className="site">
            <div className="center">
              <h1>Palo Verde CEDMCS PSA Status</h1>
              <Site units={this.state.site} onClick={this.onPSAClick} />
              <h3>Legend</h3>
              <Legend />
              <h3>Spare PSAs Ready For Install</h3>
              <SparesTable spares={this.state.spares} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
