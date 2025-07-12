import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const registerUser = async (req, res) => {
    try {
      const { FirstName,LastName, age,gender,mobileNo,address, state,district, email, password, pincode } = req.body;
  
      if (!FirstName  || !password || !email || !pincode || !LastName ||!age ||!gender ||!mobileNo ||!address ||!state ||!district ) {
        return res.json({
          success: false,
          message: "Missing details",
        });
      }
  
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email",
        });
      }
  
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Please enter a strong password",
        });
      }
      if (pincode.length != 6) {
        return res.json({
          success: false,
          message: "Please enter a valid pincode",
        });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const userData = {
        FirstName,
        LastName,
        Age:age,
        gender,
        mobile:mobileNo,
        address,
        state,
        district,
        email,
        password: hashedPassword,
        pincode
      };
  
      const newUser = new userModel(userData);
      const user = await newUser.save();
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
      res.json({ success: true, token,user });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };

  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.json({ success: false, message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (isMatch) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, message: "Login Successful", token });
      } else {
        res.json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  export {registerUser,loginUser}