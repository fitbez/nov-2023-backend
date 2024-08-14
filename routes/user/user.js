const express = require("express");
const User = require("../../models/user/user");

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
