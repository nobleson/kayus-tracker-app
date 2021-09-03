User = require('../database/Schema').User;

module.exports = {
    getAll,
    getById,
    update,
    getByStreamingKey,
    delete: _delete,
}

async function getAll () {
    return await User.find()
}

async function getById (id) {
    return await User.findById(id)
}

async function getByStreamingKey (url) {

    return await User.findOne({ stream_key:'/'+url })
}

async function update (id, userParam) {
    const user = await User.findById(id)

     if (!user) throw new Error('User not found')

    Object.assign(user, userParam)

    return await user.save()
}

async function _delete (id) {
    await User.findByIdAndDelete(id)
}
