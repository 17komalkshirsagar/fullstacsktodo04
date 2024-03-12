const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: "./.env" })
const app = express()

//middlreware
app.use(cors(
    { origin: process.env.FRONTED_URL, credentials: true }
)) //dont server la join krte credentials ah cookie sathi pahije aste
app.use(express.json()) //req.body data yeteo
app.use(express.static("dist"))

app.use("/api/todo", require("./routes/TodoRoutes"))
//db
mongoose.connect(process.env.MONGO_URL)



//404
app.use("*", (req, res) => {

    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

//error handalder
app.use((err, req, res, next) => {

    res.status(500).json({ message: err.message || "something went wrong" })
})

mongoose.connection.once("open", () => {
    console.log("mongoose CONNCENT")
    app.listen(process.env.PORT, console.log("SERVER Runinng"))
})