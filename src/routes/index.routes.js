const express = require("express");
const router = express.Router();

const userRoute = require("./user.routes");
const payRoute = require("./payment.routes");


router.use("/user", userRoute);
router.use("/pay", payRoute);


module.exports = router;