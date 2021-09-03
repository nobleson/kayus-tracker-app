User = require('../database/Schema').User
const auth = async(req, res, next) => {
    let route = req.originalUrl.split("/");
    console.log(route)
    try {
       // const user = await User.findOne({stream_key: stream_key});
       const userRole = req.session.passport.user.userRole
        if (!userRole.isAdmin) {
            throw new Error()
        }
        req.requestStatus = true
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}

module.exports = auth
