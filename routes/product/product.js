const express = require("express");
const ProductItem = require("../../models/product/product");

const router = express.Router();

// Creating a product (storing the product data in the DB)
router.post("/product-item", async (req, res) => {
  try {
    console.log("request object", req);
    const productItem = await ProductItem.create(req.body);
    res.status(201).send(productItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all the product data from the DB
router.get("/product-items", async (req, res) => {
  try {
    const productItems = await ProductItem.findAll();
    res.status(200).send(productItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a product information
router.put("/product-item/:id", async (req, res) => {
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
router.patch("/product-item/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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

module.exports = router;
