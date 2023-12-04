const express = require("express");
const router = express.Router();
const { createOrder, receiveWebhook } = require('../controllers/payment.controller')


router.post("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));


module.exports = router;
