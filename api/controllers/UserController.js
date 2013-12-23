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
                bcrypt.hash(password, 8, function(err, hash){
                    User.create({username: username, password_hash: hash}).done(function(err, user){
                        if(err){
                            res.send(500, {error: "Database error"});
                        } else {
                            req.session.user = user;
                            res.send('Successfully Signed Up!');
                        }
                    });
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
                            console.log(req.session.user);
                            res.send('Successfully signed in!');
                        } else {
                            res.send(400, {error: "Wrong Username or Password!"});
                        }
                    });
                } else {
                    res.send(404, {error: "User not found."});
                }
            }
        });
    },
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
