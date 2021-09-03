const userService = require('../service/User')


exports.getAll = function (req, res, next) {
    userService.getAll()
        .then(user => res.json(user))
        .catch(err => next(err))
}

exports.getById = function (req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err))
}
exports.getByStreamingKey = function(req, res, next) {
    userService.getByStreamingKey(req.params.id)
        .then(user => user ? res.send(user) : res.sendStatus(404))
        .catch(err => next(err));
} 
exports.update = function (req, res, next) {
    userService.update(req.session.passport.user._id, req.body)
    .then((user) => res.status(200).send(user))
    .catch(err => next(err))
}

exports._delete = function (req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}
