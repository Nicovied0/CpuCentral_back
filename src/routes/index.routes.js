const express = require("express");
const router = express.Router();

const userRoute = require("./user.routes");
const payRoute = require("./payment.routes");
const authRoute = require("./auth.routes");


router.use("/user", userRoute);
router.use("/auth", authRoute);
router.use("/pay", payRoute);


module.exports = router;