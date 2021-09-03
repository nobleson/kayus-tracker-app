const express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/',
    require('connect-ensure-login').ensureLoggedOut(),
    (req, res) => {
        res.render('login', {
            user : null,
            errors : {
                email : req.flash('email'),
                password : req.flash('password')
            }
        });
    });

router.post('/',function(req, res, next) {
    passport.authenticate('localLogin', function(err, user, info) {
        if (err) { 
        res.redirect('/login');
        }
        req.logIn(user, function(err) {
        if (err) { return next(err); }
        req.session.save(() => {
            return res.redirect('/');
        })
        });
    })(req, res, next)

})

/* router.post('/', passport.authenticate('localLogin', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
})); */

module.exports = router;

