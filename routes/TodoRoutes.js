const { getTodo, addTodo, updateTodo, deleteTodos } = require("../controllers/todoController")

const router = require("express").Router()

router
    .get("/", getTodo)
    .post("/add", addTodo)
    .put("/update/:id", updateTodo)
    .delete("/delete/:id", deleteTodos)

module.exports = router