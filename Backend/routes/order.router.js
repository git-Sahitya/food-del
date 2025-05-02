import express from "express"
import {placeOrder, verifyOrder} from "../controllers/order.controller.js"
import authMiddleware from "../middleware/auth.js"

const orderRouter =  express.Router()

orderRouter.post('/place', authMiddleware , placeOrder)
orderRouter.post('/verify' , verifyOrder)

export default orderRouter