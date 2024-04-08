import { Router } from "express";
import {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} from "../controllers/product.controller.js";

export const router = Router();

router
  .get("/getAllProducts", fetchAllProducts)
  .post("/create", createProduct)
  .get("/:id", fetchProductById)
  .patch("/update/:id", updateProduct);
