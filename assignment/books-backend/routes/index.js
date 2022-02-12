var express = require("express");
var router = express.Router();

/**Handle invalid route*/
router.use("/", (req, res) => {
  res.status(404).json({ message: "Route does not exist" });
});

module.exports = router;
