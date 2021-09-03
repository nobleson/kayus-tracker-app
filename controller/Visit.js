const visitService = require('../service/Visit')

 exports.register = function (req, res, next) {
    visitService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err))
}
exports.getById = function (req, res, next) {
    visitService.getById(req.params.id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err))
}
exports.update = function (req, res, next) {
    visitService.update(req.params.id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err))
}
exports._delete = function (req, res, next) {
    visitService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}
