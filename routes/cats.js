var express = require("express");
var router = express.Router();
const token = process.env.GITHUB_TOKEN;
const catsCtrl = require("../controller/cats");

router.get("/facts", catsCtrl.getCats);
module.exports = router;
