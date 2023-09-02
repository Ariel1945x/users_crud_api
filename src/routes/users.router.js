const { getAll, create, deleteUser, getOneUser, putOne } = require('../controllers/users.controllers')
const express = require('express')

const usersRouter = express.Router()

usersRouter.route("/")
    .get(getAll)
    .post(create)

usersRouter.route("/:id")
    .delete(deleteUser)
    .get(getOneUser)
    .put(putOne)

module.exports = usersRouter