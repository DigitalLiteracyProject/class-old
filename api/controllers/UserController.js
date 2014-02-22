/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    loginView: function(req, res) {
        if(req.session.user){
            res.redirect('modules');
        } else {
            res.view('user/login');
        }
    },

    signupView: function(req, res) {
        if(req.session.user) {
            res.send('Already signed in!');
        } else {
            res.view('user/signup');
        }
    },
    
    signup: function(req, res) {
        res.send('Welcome!');
        var username = req.param('username');
        var password = req.param('password');

        User.findOneByUsername(username).done(function(err, usr){
            if(err){
                console.log('Database error when creating user');
                res.send(500, {error: 'Database Error'});
            } else if(usr) {
                res.send(400, {error: 'Username already taken'});
            } else {
                var bcrypt = require('bcrypt');
                User.create({values: req.params}).done(function(err, user){
                    if(err){
                        req.flash.error('Error, try again');
                        res.redirect('/signup');
                    } else {
                        req.session.user = user;
                        res.send('Successfully Signed Up!');
                    }
                });
            }
        });
    },

    login: function(req, res){
        var bcrypt = require('bcrypt');

        var username = req.param("username");
        var password = req.param("password");

        User.findOneByUsername(username).done(function(err, usr){
            if(err){
                res.send(500, {error: "Database error"});
            } else {
                if(usr){
                    bcrypt.compare(password, usr.password_hash, function(err, passwordMatches){
                        if(passwordMatches){
                            req.session.user = usr;
                            res.redirect('/modules');
                        } else {
                            req.flash.error('Incorrect username or password');
                            res.redirect('/login');
                        }
                    });
                } else {
                    req.flash.error('Incorrect username or password');
                    res.redirect('/login');
                }
            }
        });
    },

    logout: function(req, res) {
        if(req.session.user){
            req.session.user = null;
            res.redirect('/login');
        } else {
            res.send('You must first sign in to logged out.');
        }
    },
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
