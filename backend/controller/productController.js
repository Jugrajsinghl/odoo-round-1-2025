import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createProduct = async (req, res) => {
try {
    const {userId,productName, productdesc,orignalPurchaseDate,image,price} = req.body
} catch (error) {
    
}
}