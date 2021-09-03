const callService = require('../service/Call')

 exports.register = function (req, res, next) {
    callService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err))
}
exports.getAll = function (req, res, next) {
    callService.getAll()
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err))
}
exports.getById = function (req, res, next) {
    callService.getById(req.params.id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err))
}
exports.update = function (req, res, next) {
    callService.update(req.params.id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err))
}
exports._delete = function (req, res, next) {
    callService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}
