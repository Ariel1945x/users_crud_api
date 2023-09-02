const { getAll, create } = require('../controllers/users.controllers')
const express = require('express')

const usersRouter = express.Router()

usersRouter.route("/")
    .get(getAll)
    .post(create)

module.exports = usersRouter