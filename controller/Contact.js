const contactService = require('../service/Contact')

 exports.register = function (req, res, next) {
    contactService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err))
}
exports.getAll = function (req, res, next) {
    contactService.getAll()
        .then(category => res.json(category))
        .catch(err => next(err))
}

exports.getById = function (req, res, next) {
    contactService.getById(req.params.id)
        .then(category => category ? res.json(category) : res.sendStatus(404))
        .catch(err => next(err))
}
exports._delete = function (req, res, next) {
    contactService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}
