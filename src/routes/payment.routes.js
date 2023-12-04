const express = require("express");
const router = express.Router();
const { createOrder } = require('../controllers/payment.controller')


router.post("/create-order", createOrder);


router.get("/success", (req, res) => res.send("Success"));


module.exports = router;
