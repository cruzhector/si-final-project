const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const uploadDoc = require("../controller/doc-upload").uploadDoc;
const retrieveDocContent =
  require("../controller/doc-content-retrieve").retrieveDocContent;
const getFileFormats = require("../controller/doc-formats").getFileFormats;
router.post("/upload", bodyParser.text(), uploadDoc);
router.get("/content", retrieveDocContent);
router.get("/formats", getFileFormats);

module.exports = router;
