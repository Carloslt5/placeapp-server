
const Group = require('../models/Group.model')

const getAllGroups = (req, res, next) => {

    Group
        .find()
        .populate('members')
        .sort({ name: 1 })
        .then(foundAllGroups => res.json(foundAllGroups))
        .catch(err => next(err))
}

const getOneGroup = (req, res, next) => {

    const { id: groupId } = req.body

    Group
        .find(groupId)
        .then(foundGroup => res.json(foundGroup))
        .catch(err => next(err))
}


const createGroup = (req, res, next) => {

    const { name, description, owner } = req.body

    Group
        .create({ name, description, owner })
        .then(createdGroup => res.json(createdGroup))
        .catch(err => next(err))

}

const joinGroup = (req, res, next) => {


    const { id: groupId } = req.params
    const { _id: userId } = req.payload

    console.log("ID DE GRUPO", groupId)
    console.log("ID DE USER", userId)

    Group
        .findByIdAndUpdate(groupId, { $addToSet: { members: userId } }, { new: true })
        .then(updateGroup => res.json(updateGroup))
        .catch(err => next(err))


}

const unjoinGroup = (req, res, next) => {

    const { id: groupId } = req.params
    const { _id: userId } = req.payload


    Group
        .findByIdAndUpdate(groupId, { $pull: { members: userId } }, { new: true })
        .then(updateGroup => res.json(updateGroup))
        .catch(err => next(err))


}

const deleteGroup = (req, res, next) => {

    res.json('ESTO ES GROUPS')


}



module.exports = {
    getAllGroups,
    getOneGroup,
    createGroup,
    joinGroup,
    unjoinGroup,
    deleteGroup
}