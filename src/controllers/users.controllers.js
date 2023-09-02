
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

const deleteUser = catchError(async(req, res) => {

    const { id } = req.params
    const users = await Users.destroy({ where: {id} })
    return res.sendStatus(204)

})

const getOneUser = catchError(async(req, res) => {

    const { id } = req.params
    const user = await Users.findByPk(id)
    return res.json(user)

})

const putOne = catchError(async(req, res) => {

    const { id } = req.params
    const { first_name, last_name, email, password, birthday } = req.body
    const usersBody = { first_name, last_name, email, password, birthday }
    const users = await Users.update(usersBody, { where: {id}, returning: true })
    return res.json(users)

})

module.exports = {
    getAll,
    create,
    deleteUser,
    getOneUser,
    putOne
}