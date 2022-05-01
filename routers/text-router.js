const express = require("express");
const router = express.Router();
const getTranslatedData =
  require("../controller/text-translate").getTranslatedData;
const detectLanguage = require("../controller/text-detect").detectLanguage;
router.post("/translate", getTranslatedData);
router.get("/detect", detectLanguage);

module.exports = router;
