const { getTodo, addTodo, updateTodo, deleteTodos } = require("../controllers/todoController")

const router = require("express").Router()

router
    .get("/", getTodo)
    .post("/add-todo", addTodo)
    .put("/update-todo/:id", updateTodo)
    .delete("/delete-todo/:id", deleteTodos)

module.exports = router