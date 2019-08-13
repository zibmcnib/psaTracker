const express = require("express");
const bodyParser = require("body-parser");
const PSA = require("../database-mongo/models/psa");
const cors = require("cors");
let app = express();

const buildSite = require("../js-client/models/buildSystem");

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/psas/:location", (req, res) => {
  const { location } = req.params;
  PSA.find(location)
    .then(psa => {
      res.send(psa);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.get("/api/broken", (req, res) => {
  PSA.getBroken()
    .then(broken => {
      res.send(broken);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.get("/api/spares", (req, res) => {
  PSA.getSpares()
    .then(spares => {
      res.send(spares);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.get("/api/CEDMCSStatus", (req, res) => {
  buildSite()
    .then(data => res.send(data))
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
