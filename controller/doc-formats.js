const axios = require("axios");

exports.getFileFormats = (req, res, next) => {
  let endpoint =
    "https://si-translator.cognitiveservices.azure.com/translator/text/batch/v1.0";
  let route = "/documents/formats";

  let config = {
    method: "get",
    url: endpoint + route,
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.AZURE_API_KEY,
    },
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.json({
        message: "Error getting file formats",
      });
    });
};
