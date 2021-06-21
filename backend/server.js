import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

const __dirname = path.resolve()

app.use('/api/contacts',contactRoutes)
app.use('/api/users',userRoutes)


if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req, res) => res.sendFile(path.resolve(__dirname, "frontend",'build', 'index.html')))
}else{
    app.get('/',(req, res)=>{
        res.send("API running")
    })
}

app.listen(5000, console.log("Serer running on port 5000"))