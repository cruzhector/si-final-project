const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const location = "eastus";

exports.getReqInstance = axios.create({
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.AZURE_API_KEY,
    "Ocp-Apim-Subscription-Region": location,
    "Content-type": "application/json",
    "X-ClientTraceId": uuidv4().toString(),
  },
  responseType: "json",
});
