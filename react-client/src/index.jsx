import React from "react";
import ReactDOM from "react-dom";
import System from "./components/System";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinets: {}
    };
  }

  componentDidMount() {}

  render() {
    const { cabinets } = this.state.cabinets;
    return (
      <div>
        <h1>CEDMCS PSA Status</h1>
        <System cabinets={cabinets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
