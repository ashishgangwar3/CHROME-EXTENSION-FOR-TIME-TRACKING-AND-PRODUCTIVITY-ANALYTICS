
const express = require("express");
const router = express.Router();
const Log = require("../db");

router.post("/", async (req, res) => {
  const { domain, duration } = req.body;
  const log = new Log({ domain, duration, timestamp: new Date() });
  await log.save();
  res.sendStatus(200);
});

module.exports = router;
