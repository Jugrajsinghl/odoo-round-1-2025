import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
buyerId:{
    type:String,
    required:true
},
sellerId:{
    type:String,
    required:true
},
buyType:{
    type:String,
    enum: ['exchange', 'point'],
    required:true
},
productId:{
    type:String,
    required:true
}
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;