import express from "express";
import { getProductById } from "../controllers/productcONTROLLER.JS";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
