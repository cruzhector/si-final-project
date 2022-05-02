//App imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//Route imports
const textRouter = require("./routers/text-router");
const docRouter = require("./routers/doc-router");

const PORT = process.env.PORT || 3000;
const app = express();

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Azure Text and Document translator",
      version: "1.0.0",
      description:
        "Using Azure congnitive services Translate text and document",
      contact: {
        name: "Ramakrishna Kolipaka",
        url: "https://github.com/cruzhector/",
        email: "rkolipak@uncc.edu",
      },
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: ["./*.js", "./routers/*.js"],
};

const specs = swaggerJsDoc(options);
app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/text", textRouter);
app.use("/document", docRouter);
app.get("/", (req, res) => {
  res.send(
    "<span><h3>Welcome to Azure Text and Document translator, please explore the documentation.</h3><a href='https://github.com/cruzhector/si-final-project/blob/master/README.md'>Documentation link</a><br/><br/><a href='http://137.184.49.245:3000/api-docs/'>Swagger API Playground</a></span>"
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
