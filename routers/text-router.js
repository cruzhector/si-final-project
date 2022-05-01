const express = require("express");
const router = express.Router();
const getTranslatedData =
  require("../controller/text-translate").getTranslatedData;
const detectLanguage = require("../controller/text-detect").detectLanguage;
const getDictionaryData =
  require("../controller/text-dictionary").getDictionaryData;
/**
 * @swagger
 * /text/translate:
 *   post:
 *     tags:
 *       - Text
 *     description: Translates the text
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: from
 *         description: From language.
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: en
 *       - name: to
 *         description: To language.
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: fr
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *           schema:
 *             type: string
 *             example: [{"text": "Hello World!"}]
 *     responses:
 *       200:
 *         description: Translated texts.
 *       500:
 *         description: Error message.
 */
router.post("/translate", getTranslatedData);

/**
 * @swagger
 * /text/detect:
 *   post:
 *     tags:
 *       - Text
 *     description: Detects the text.
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *           schema:
 *             type: string
 *             example: [{
        "text": "Ich würde wirklich gern Ihr Auto um den Block fahren ein paar Mal."
}]
 *     responses:
 *       200:
 *         description: Retrieves information regarding the text.
 *       500:
 *         description: Error message.
 */
router.post("/detect", detectLanguage);

/**
 * @swagger
 * /text/dict-lookup:
 *   post:
 *     tags:
 *       - Text
 *     description: Dictionary lookup for the text.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: from
 *         description: From language.
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: en
 *       - name: to
 *         description: To language.
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: fr
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *           schema:
 *             type: string
 *             example: [{"text": "shark"}]
 *     responses:
 *       200:
 *         description: Alternate translated texts.
 *       500:
 *         description: Error message.
 */
router.post("/dict-lookup", getDictionaryData);

module.exports = router;
