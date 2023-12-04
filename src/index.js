const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/mongo");
const routes = require("./src/routes/index");