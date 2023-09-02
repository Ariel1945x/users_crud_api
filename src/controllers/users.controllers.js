
const catchError = require('../utils/catchError');
const Users = require('../models/Users');

const getAll = catchError(async(req, res) => {

    const users = await Users.findAll()
    return res.json(users)

});

const create = catchError(async(req, res) => {

    const { first_name, last_name, email, password, birthday } = req.body
    const usersBody = { first_name, last_name, email, password, birthday }
    const users = await Users.create(usersBody)
    return res.status(201).json(users)

})

module.exports = {
    getAll,
    create
}