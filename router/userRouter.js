const express = require("express")
const userModel = require("../model/userModel")

const router = express.Router()

router.post("/users", async (req, res) => {
    try {
        const user = new userModel(req.body)
        await user.save()
        res.send("User added successfully...")
    } catch (error) {
        res.send(error.message)
    }
})

router.get("/users", async (req, res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router