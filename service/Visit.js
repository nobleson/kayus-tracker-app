const Visit = require('../model/Visit')

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
}

async function getAll () {
    return await Visit.find()
}

async function getById (id) {
    return await Visit.findById(id)
}

async function create (visitParam) {
     const visit = new Visit(visitParam)
    return await visit.save()
}

async function update (id) {
   const visit = await Visit.findByIdAndUpdate(id,{ $inc:{counter: 1} }, {news:true})
   return visit
}

async function _delete (id) {
    await Visit.findByIdAndDelete(id)
}
