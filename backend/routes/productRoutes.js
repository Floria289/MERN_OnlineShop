import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {})
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {})
);

export default router;
