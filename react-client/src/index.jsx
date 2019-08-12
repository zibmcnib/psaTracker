// import PSA from "./components/PSA.jsx";
// import CabinetRow from "./components/CabinetRow.jsx";
// import Cabinet from "./components/Cabinet.jsx";
// import System from "./components/System.jsx";
// import testData from "./testData/testData.js";
import React from "react";
import ReactDOM from "react-dom";
import buildSite from "../../js-client/models/buildSystem";
import Site from "./components/Site.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
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
        {!this.state.isLoading && (
          <div className="system">
            <h1>CEDMCS PSA Status</h1>
            <Site units={this.state.site} />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// this.setState({
//   testOrder: testData.testOrder,
//   testSite: testData.testSite,
//   testSystem: testData.testSystem,
//   testCabinet: testData.testCabinet,
//   testRow: testData.testRow,
//   testPSA: testData.testPSA,
//   isLoading: false
// });
///////////////test cabinet//////////////////////////////////////
// return (
//       <div>
//         {this.state.isLoading && <div>Loading.</div>}
//         {!this.state.isLoading && (
//           <div>
//             <table>
//               <tbody>
//                 <Cabinet cabinet={this.state.testCabinet} />
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     );
///////////////test psa//////////////////////////////////////
// return (
//   <div>
//     {this.state.isLoading && <div>Loading.</div>}
//     {!this.state.isLoading && (
//       <div>
//         <PSA psa={this.state.testPSA} />
//       </div>
//     )}
//   </div>
// );

//////////////test row/////////////////////////////////////
// return (
//   <div>
//     {this.state.isLoading && <div>Loading.</div>}
//     {!this.state.isLoading && (
//       <div>
//         <table>
//           <tbody>
//             <CabinetRow
//               order={this.state.testOrder}
//               row={this.state.testRow.top}
//             />
//           </tbody>
//         </table>
//       </div>
//     )}
//   </div>
// );
//////////////////test system/////////////////////////////////
//       U1         U2         U3
// (3)[Array(3), Array(3), Array(3)]
//  return (
//     <div>
//     {this.state.isLoading && <div>Loading.</div>}
//     {!this.state.isLoading && (
//       <div>
//         <h1>CEDMCS PSA Status</h1>
//         <System cabinets={this.state.testSystem} />
//       </div>
//     )}
//   </div>
// );
