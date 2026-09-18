const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./router/userRouter")

const app = express()

app.use(express.json())
app.use("/api", userRouter)

mongoose.connect("mongodb://127.0.0.1:27017/userDatabase")
    .then(() => {
        console.log("MongoDB connected successfully...")
        app.listen(8000, () => {
            console.log("Server running on port 8000...")
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed...")
        console.log(error.message)
    })