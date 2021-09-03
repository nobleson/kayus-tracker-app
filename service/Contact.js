const Contact = require('../model/Contact')

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete,
}

async function getAll () {
    return await Contact.find()
}

async function getById (id) {
    return await Contact.findById(id)
}

async function create (contactParam) {
     const contact = new Contact(contactParam)
    return await contact.save()
}


async function _delete (id) {
    await Contact.findByIdAndDelete(id)
}
