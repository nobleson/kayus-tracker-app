const builderService = require('../service/Profile');
const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '') 
    try {
/*         const builder = await builderService.getById(token);
        if (!builder) {
            throw new Error()
        } */
        req.uid = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth
