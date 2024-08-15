import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import "dotenv/config"
import productRouter from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config `
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB("mongodb://ivieosoiye:ivie123@cluster0-shard-00-00.tpmam.mongodb.net:27017,cluster0-shard-00-01.tpmam.mongodb.net:27017,cluster0-shard-00-02.tpmam.mongodb.net:27017/?ssl=true&replicaSet=atlas-dqizzx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
 

// api endpoint
app.use("/api/product", productRouter)
app.use("/images", express.static('uploads')) 
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})
