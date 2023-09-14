import express from 'express'
import { databaseRunner } from './models/dbUtils'
import dotenv from 'dotenv'
import Router from './routes/routes'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json());

(async ()=>{
   await mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(()=>{
   
   
   
       app.use(Router)
       
       app.listen(3000, ()=>{
           console.log(`server loading on PORT ${PORT}`);
       })
    })
   
})()

