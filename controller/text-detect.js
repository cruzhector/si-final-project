const requestInstance = require("../request-instance").getReqInstance;

const ENDPOINT = "https://api.cognitive.microsofttranslator.com/";

exports.detectLanguage = (req, res, next) => {
  let texts = req.body;
  return requestInstance
    .post("/detect", texts, {
      baseURL: ENDPOINT,
      params: {
        "api-version": "3.0",
      },
    })
    .then((resp) => {
      res.json(resp.data);
    })
    .catch((e) => {
      res.json({
        message: "Error detecting text",
      });
    });
};
