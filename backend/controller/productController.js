import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import ProductModel from "../models/productModel.js";

const createProduct = async (req, res) => {
try {
    const {userId,productName, productdesc,orignalPurchaseDate,image,price} = req.body
    if(!userId || !productName || !productdesc || !orignalPurchaseDate || !image || !price){
        return res.json({
            success: false,
            message: "Missing details",
          });
    }
    const productData = {
        userId,
        productName,
        productdesc,
        orignalPurchaseDate,
        image,
        price
    }

    const newProduct = new ProductModel(productData)
    const product = await newProduct.save();
    res.json({ success: true, message:"product added succesfully",product });
} catch (error) {
    res.json({ success: false, message: error.message });

}
}

const deleteProduct = async (req, res) => {
    try {
      const { productId } = req.body;
  
      if (!productId) {
        return res.json({
          success: false,
          message: "Product ID is required",
        });
      }
  
      const deletedProduct = await ProductModel.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.json({
          success: false,
          message: "Product not found or already deleted",
        });
      }
  
      res.json({
        success: true,
        message: "Product deleted successfully",
        product: deletedProduct,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };
  

export {createProduct,deleteProduct}