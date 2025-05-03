import express from "express"
import {listOrders, placeOrder, updateStatus, userOrder, verifyOrder} from "../controllers/order.controller.js"
import authMiddleware from "../middleware/auth.js"

const orderRouter =  express.Router()

orderRouter.post('/place', authMiddleware , placeOrder)
orderRouter.post('/verify' , verifyOrder)
orderRouter.post('/user_order' , authMiddleware ,  userOrder)
orderRouter.get('/list' , listOrders)
orderRouter.post('/status' , updateStatus)

export default orderRouter