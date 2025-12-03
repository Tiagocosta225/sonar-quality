const express = require("express");
const router = express.Router();

router.get("/greet", (req, res) => {
  res.status(200).json({ message: "Hello from API!" });
});

module.exports = router;
