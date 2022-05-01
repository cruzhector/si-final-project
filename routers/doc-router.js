const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const uploadDoc = require("../controller/doc-upload").uploadDoc;
const retrieveDocContent =
  require("../controller/doc-content-retrieve").retrieveDocContent;
const getFileFormats = require("../controller/doc-formats").getFileFormats;

/**
 * @swagger
 * /document/upload:
 *   put:
 *     tags:
 *       - Document
 *     description: Uploads and Translates the BLOB document
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fileName
 *         description: BLOB file name.
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: testfile
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
 *         text/plain:
 *           schema:
 *             type: string
 *             example: Hello, how are you doing
 *     responses:
 *       200:
 *         description: Success message saying document is translated.
 *       500:
 *         description: Error message.
 */
router.put("/upload", bodyParser.text(), uploadDoc);
/**
 * @swagger
 * /document/content:
 *   get:
 *     tags:
 *       - Document
 *     description: Translates the document
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fileName
 *         description: BLOB file name.
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: testfile
 *     responses:
 *       200:
 *         description: Retrieves the text from BLOB.
 *       500:
 *         description: Error message.
 */
router.get("/content", retrieveDocContent);
/**
 * @swagger
 * /document/formats:
 *   get:
 *     tags:
 *       - Document
 *     description: Gets all the supported document formats
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Retrieves all the formats.
 *       500:
 *         description: Error message.
 */
router.get("/formats", getFileFormats);

module.exports = router;
