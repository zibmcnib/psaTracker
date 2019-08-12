const express = require("express");
const bodyParser = require("body-parser");
const findPSA = require("../database-mongo/models/psa");
const cors = require("cors");
let app = express();

const buildSite = require("../js-client/models/buildSystem");

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/psas/:location", (req, res) => {
  const { location } = req.params;
  findPSA(location)
    .then(psa => {
      res.send(psa);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.get("/api/CEDMCSStatus", (req, res) => {
  buildSite().then(data => res.send(data));
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
