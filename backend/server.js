import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/',(req, res)=>{
    res.send("API running")
})

app.use('/api/contacts',contactRoutes)

app.listen(5000, console.log("Serer running on port 5000"))