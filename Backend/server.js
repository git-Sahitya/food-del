import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import foodRouter from './routes/food.router.js'
import userRouter from './routes/user.router.js'


//app config 
 const app = express()
 const port = 4000


 //middleware
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())  
  
 
 dotenv.config({
   path: "./.env",
 });

 //db connection
connectDB()

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images' ,express.static('uploads') )
app.use('/api/user' , userRouter)



app.get('/',(req,res)=>{
   res.send('Api working')
})

 app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
    
 })

 