import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import connectDB from './config/db.js'


import foodRouter from './routes/food.router.js'
import userRouter from './routes/user.router.js'
import cartRouter from './routes/cart.router.js'
import orderRouter from './routes/order.router.js'


//app config 
 const app = express()
 const port = process.env.PORT || 4000


 //middleware
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())  
  
 

 //db connection
connectDB()

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images' ,express.static('uploads') )
app.use('/api/user' , userRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)


app.get('/',(req,res)=>{
   res.send('Api working')
})

 app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
    
 })

 