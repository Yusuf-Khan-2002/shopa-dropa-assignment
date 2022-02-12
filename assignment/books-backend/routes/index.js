var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**Handle invalid route*/
router.use("/", (req, res) => {
  res.status(404).json({ message: "Route does not exist" });
});

module.exports = router;
