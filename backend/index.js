const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const jobRoutes = require("./routes/jobRoutes");
const { pool } = require("./config/database").default;
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Swagger documentation
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//Routes

app.use("/api/jobs", jobRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
