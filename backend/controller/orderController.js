import OrderModel from "../models/orderModel.js";
import UserModel from "../models/userModel.js";
import ExchangeRequestModel from "../models/exchangeRequestModel.js";
import ProductModel from "../models/productModel.js";

const createOrder = async (req, res) => {
  try {
    const { buyerId, sellerId, buyType, productId } = req.body;

    if (!buyerId || !sellerId || !buyType || !productId) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const buyer = await UserModel.findById(buyerId);
    const seller = await UserModel.findById(sellerId);
    const product = await ProductModel.findById(productId);
    const points = product.price
    if(sellerId != product.userId){
        return res.json({ success: false, message: "seller and product userid not match" });
    }
    if (!buyer || !seller) {
      return res.json({ success: false, message: "Invalid buyer or seller ID" });
    }

    if (buyType === "point") {
      if (!points || points <= 0) {
        return res.json({ success: false, message: "Invalid or missing points" });
      }

      if (buyer.points < points) {
        return res.json({ success: false, message: "Insufficient points" });
      }

      // Update points
      buyer.points -= points;
      seller.points += points;
      product.soldOut = true;
      await buyer.save();
      await seller.save();
      await product.save();
    }

    const newOrder = new OrderModel({ buyerId, sellerId, buyType, productId });
    const order = await newOrder.save();

    if (buyType === "exchange") {
      const exchangeRequest = new ExchangeRequestModel({
        buyerId,
        sellerId,
        productId
      });
      await exchangeRequest.save();
    }

    res.json({
      success: true,
      message: buyType === "exchange" ? "Exchange request sent" : "Order placed successfully",
      order
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default createOrder;
