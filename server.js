require("dotenv").config();
const express = require("express");
require("./utils/Mongoose");
const cors = require("cors");
const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API_robot St Jo",
      description: "Simple API robot[answer and response message]",
      version: "1.0.0",
    },
  },
  apis: ["./routes/v1/*.js"], // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc(options);

const app = express();
const port = process.env.PORT;
const version = process.env.VERSION_API;

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(`/api/${version}`, require(`./routes/${version}/index`));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("erreur server");
});
app.get("*", (req, res, next) => {
  res.send("Page not found");
});

app.listen(port, () => {
  console.log(
    `server listenning on port ${port} and the secret message is "${process.env.SECRET_MESSAGE}"`
  );
});
