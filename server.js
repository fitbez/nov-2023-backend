const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product/product");
const userRouter = require("./routes/user/user");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
