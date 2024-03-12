const Todo = require("../models/Todo")
const asyncHnadler = require("express-async-handler")
exports.addTodo = asyncHnadler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "add todo fetch success" })
})
exports.getTodo = asyncHnadler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "add todo fetch success", result })
})
exports.updateTodo = asyncHnadler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "update success" })
})
exports.deleteTodos = asyncHnadler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id, req.body)
    res.json({ message: "delete todo  success" })
})