import express from "express";
import { createProduct, deleteProduct } from "../controller/productController";
const productRouter = express.Router();
productRouter.post('/createProduct',createProduct)
productRouter.delete('/deleteProduct',deleteProduct)
export default productRouter;