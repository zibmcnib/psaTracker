const express = require("express");
const bodyParser = require("body-parser");
const PSA = require("../database-mongo/models/psa");
const cors = require("cors");
let app = express();

const buildSite = require("../js-client/models/buildSystem");

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/DCIDs", (req, res) => {
  PSA.getInstalled()
    .then(DCIDs => {
      res.send(DCIDs);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

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

app.post("/api/swappsa", (req, res) => {
  const { serialOfGood, locationOfBad } = req.body;
  PSA.installSpareInUnit(serialOfGood, locationOfBad)
    .then(response => {
      res.send(response);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.post("/api/makespare/:serial", (req, res) => {
  const { serial } = req.params;
  PSA.makeSpare(serial)
    .then(res.sendStatus(202))
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

app.post("/api/makebroke/:serial", (req, res) => {
  const { serial } = req.params;
  PSA.makeBroke(serial)
    .then(res.sendStatus(202))
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
