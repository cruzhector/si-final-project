const requestInstance = require("../request-instance").getReqInstance;

const ENDPOINT = "https://api.cognitive.microsofttranslator.com/";

exports.getTranslatedData = (req, res, next) => {
  let texts = req.body;
  let fromLang = req.query.from;
  let toLang = req.query.to;
  return requestInstance
    .post("/translate", texts, {
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
      console.log(e);
    });
};
