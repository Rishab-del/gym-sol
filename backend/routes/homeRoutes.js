const express = require("express");
const router = express.Router();

const { getHomeData } = require("../controllers/homeController");

router.get("/:id", getHomeData);

module.exports = router;