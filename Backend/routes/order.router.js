import express from "express"
import {placeOrder, userOrder, verifyOrder} from "../controllers/order.controller.js"
import authMiddleware from "../middleware/auth.js"

const orderRouter =  express.Router()

orderRouter.post('/place', authMiddleware , placeOrder)
orderRouter.post('/verify' , verifyOrder)
orderRouter.post('/user_order' , authMiddleware ,  userOrder)

export default orderRouter