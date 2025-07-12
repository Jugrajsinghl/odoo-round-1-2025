import mongoose from 'mongoose';

const connectDB = async () => {

  mongoose.connection.on('connected',()=>console.log("Database connected"))
  await mongoose.connect(`${process.env.MONGODB_URI}/odoo2025`)
}

export default connectDB;