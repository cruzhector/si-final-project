const axios = require("axios").default;

const transEnd = "https://sidocstorage.blob.core.windows.net/translated-files";
const queryParams =
  "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-05-31T06:59:06Z&st=2022-04-30T22:59:06Z&spr=https&sig=Ch19ThsntnhA5ju3eTSJqlgqmFcU%2FaHJYJDjdSTAm6c%3D";
const supportedFileExt = "txt";

exports.retrieveDocContent = (req, res, next) => {
  let fileName = req.query.fileName;
  if (fileName.includes(".")) {
    fileName = fileName.substring(0, fileName.indexOf("."));
  }
  axios
    .get(`${transEnd}/${fileName}.${supportedFileExt}?${queryParams}`)
    .then((resp3) => {
      if (resp3.status == 200) {
        var text = resp3.data;
        res.send(text);
      } else {
        res.json({
          message:
            "Could not find the Blob, please check your filename and try again.",
        });
      }
    })
    .catch((e) => {
      res.json({
        message:
          "Could not find the Blob, please check your filename and try again.",
      });
    });
};
