let express = require("express");
// let bodyParser = require("body-parser");
let items = require("../database-mongo");
let app = express();

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/items", function(req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
