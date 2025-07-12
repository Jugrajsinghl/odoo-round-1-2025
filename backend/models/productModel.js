import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    productName:{
        type :String,
        reuired:true,
    },
    productdesc:{
        type :String,
        required:true,
    },
    orignalPurchaseDate:{
        type:Date,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const ProductModel = mongoose.models.product || mongoose.model("user", ProductSchema);
export default ProductModel;