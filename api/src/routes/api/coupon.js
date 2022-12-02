const express = require("express");
const router = express.Router;
const Coupon  = require('../../controller/coupon')

router.route("/").get(Coupon.get());
