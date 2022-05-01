const requestInstance = require("../request-instance").getReqInstance;

const ENDPOINT = "https://api.cognitive.microsofttranslator.com/";

exports.getDictionaryData = (req, res, next) => {
  let texts = req.body;
  let fromLang = req.query.from;
  let toLang = req.query.to;
  return requestInstance
    .post("/dictionary/lookup", texts, {
      baseURL: ENDPOINT,
      params: {
        "api-version": "3.0",
        from: fromLang,
        to: toLang,
      },
    })
    .then((resp) => {
      res.json(resp.data);
    })
    .catch((e) => {
      res.json({
        message: "Error in dictionary lookup",
      });
    });
};
