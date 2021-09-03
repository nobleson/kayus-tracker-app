const Call = require('../model/Call')

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
}

async function getAll () {
    return await Call.find()
}

async function getById (id) {
    return await Call.findById(id)
}

async function create (callParam) {
     const call = new Call(callParam)
    return await call.save()
}

async function update (id) {
   const call = await Call.findByIdAndUpdate(id,{ $inc:{counter: 1} }, {new:true})
   return call
}

async function _delete (id) {
    await Call.findByIdAndDelete(id)
}
