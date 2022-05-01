const axios = require("axios").default;
require("dotenv").config();

const docEnd = "https://sidocstorage.blob.core.windows.net/input-files";
const transEnd = "https://sidocstorage.blob.core.windows.net/translated-files";
const queryParams =
  "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-05-31T06:59:06Z&st=2022-04-30T22:59:06Z&spr=https&sig=Ch19ThsntnhA5ju3eTSJqlgqmFcU%2FaHJYJDjdSTAm6c%3D";
const supportedFileExt = "txt";
const tranlaterEndPoint =
  "https://si-translator.cognitiveservices.azure.com/translator/text/batch/v1.0/batches";

exports.uploadDoc = (req, res, next) => {
  let fileName = req.query.fileName;
  let to = req.query.to;
  let targetLang = [];
  if (typeof to === "string") {
    targetLang.push({
      targetUrl: `${transEnd}/${fileName}-${to}.${supportedFileExt}?${queryParams}`,
      language: to,
    });
  } else {
    for (var i = 0; i < to.length; i++) {
      targetLang.push({
        targetUrl: `${transEnd}/${fileName}-${to[i]}.${supportedFileExt}?${queryParams}`,
        language: to[i],
      });
    }
  }
  let content = req.body;
  console.log(content);
  let headers = {
    "x-ms-date": new Date().toUTCString(),
    "x-ms-version": "2021-04-10",
    "x-ms-blob-type": "BlockBlob",
  };
  let data = {
    inputs: [
      {
        storageType: "File",
        source: {
          sourceUrl: `${docEnd}/${fileName}.${supportedFileExt}?${queryParams}`,
        },
        targets: targetLang,
      },
    ],
  };
  let fullPath = `${docEnd}/${fileName}.${supportedFileExt}?${queryParams}`;
  axios
    .put(fullPath, content, { headers: headers })
    .then((resp) => {
      console.log(resp.status);
      if (resp.status == 200 || resp.status == 201 || resp.status == 202) {
        axios
          .post(tranlaterEndPoint, data, {
            headers: {
              "Ocp-Apim-Subscription-Key": process.env.AZURE_API_KEY,
            },
          })
          .then((resp2) => {
            console.log(resp2.status);
            if (resp2.status == 200 || resp2.status == 202) {
              let filesArr = [];
              targetLang.forEach((item) => {
                console.log(item);
                filesArr.push(
                  item.targetUrl
                    .replace(`${transEnd}/`, "")
                    .replace(`?${queryParams}`, "")
                );
              });
              return res.json({
                message:
                  "Files sucessfully sent for translation. Please allow sometime for the files to be translated and try the content retriever API for the translated content.",
                files: filesArr,
              });
            } else {
              res.json({
                message: "Error occured while translating.",
              });
            }
          })
          .catch((e) => {
            console.log(e);
            res.json({
              message: "Error occured while translating.",
            });
          });
      } else {
        res.json({
          message: "Could not write into BLOB.",
        });
      }
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Could not write into BLOB.",
      });
    });
};
