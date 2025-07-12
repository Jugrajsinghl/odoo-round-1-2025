import mongoose from "mongoose";

const exchangeRequestSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  },
  requestedAt: {
    type: Date,
    default: Date.now
  }
});

const ExchangeRequestModel = mongoose.models.ExchangeRequest || mongoose.model("ExchangeRequest", exchangeRequestSchema);
export default ExchangeRequestModel;
