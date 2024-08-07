const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const User = require("./models/user/user");
const ProductItem = require("./models/product/product");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Creating a product (storing the product data in the DB)
app.post("/product-item", async (req, res) => {
  try {
    console.log("request object", req);
    const productItem = await ProductItem.create(req.body);
    res.status(201).send(productItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all the product data from the DB
app.get("/product-items", async (req, res) => {
  try {
    const productItems = await ProductItem.findAll();
    res.status(200).send(productItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a product information
app.put("/product-item/:id", async (req, res) => {
  try {
    const updatedProduct = await ProductItem.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a product information
app.patch("/product-item/:id", async (req, res) => {
  try {
    const updatedProduct = await ProductItem.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a product from our DB
app.delete("/:id", async (req, res) => {
  try {
    await ProductItem.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(`Product is deleted successfully!`);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
