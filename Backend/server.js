import express from 'express'
import cors from 'cors'


//app config 
 const app = express()
 const port = 4000

 //middleware
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())   

app.get('/',(req,res)=>{
   res.send('Api working')
})

 app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
    
 })