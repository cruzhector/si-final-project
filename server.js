const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const textRouter = require("./routers/text-router");
const docRouter = require("./routers/doc-router");
const PORT = process.env.PORT || 3000;
const app = express();
const swaggerDocument = require("./swagger.json");

app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/text", textRouter);
app.use("/document", docRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
