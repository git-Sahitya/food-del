import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZOPAY_KEY_ID,
  key_secret: process.env.RAZOPAY_KEY_SECRET,
});

const placeOrder = async (req, res) => {
  const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173"; 
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();

    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const totalAmount = req.body.items.reduce((total, item) => {
      return total + item.price * item.quantity * 100; 
    }, 0) + 200;

    // Create a Razorpay order
    const options = {
      amount: totalAmount,
      currency: "INR",
      receipt: `order_${newOrder._id}`, 
    };

    const razorpayOrder = await razorpay.orders.create(options);

    res.json({
      success: true,
      orderId: newOrder._id,
      razorpayOrderId: razorpayOrder.id,
      amount: totalAmount,
      currency: "INR",
      session_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      session_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error placing order" });
  }
};

const verifyOrder = async (req,res) => {
  const {orderId, success} = req.body
  try {
    if (success == "false") {
      await orderModel.findByIdAndUpdate(orderId,{payment: true})
      res.json({success: true, message:"Paid"})
    }else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false,message:"Not paid yet!!"})
    }
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
}

export { placeOrder , verifyOrder };