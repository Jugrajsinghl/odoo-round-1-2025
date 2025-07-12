import express from "express";
import createOrder from "../controller/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/createorder", createOrder);

export default orderRouter;