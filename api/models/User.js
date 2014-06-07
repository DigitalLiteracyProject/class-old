/**
 * User
 *
 * @module      :: Model
 * @description :: 
 */

var bcrypt = require('bcrypt');

var User = {
    attributes: {
        name: {
            type: 'STRING',
            required: true
        },

        email: {
            type: 'STRING',
            required: true
        },

        password_hash: {
            type: 'STRING',
            required: false
        },
        
        type: {
            type: 'STRING',
            defaultsTo: 'student'
        },

        classes: {
            type: 'ARRAY',
            defaultsTo: []
        }
    },

    beforeCreate: function(values, next){
        bcrypt.hash(values.password, 8, function(err, hash){
            if(err){
                return next(err);
            } else {
                values.password_hash = hash;
                console.log('password_hash');
                console.log(values);
                next();
            }
         });
    },

    beforeUpdate: function(values, next){
        sails.models.user.findOneByUsername(values.username).done(function(err, usr){
            if(err){
                next(err);
            } else {
                if(usr){
                    bcrypt.compare(values.password_hash, usr.password_hash, function(err, passwordMatches){
                        if(passwordMatches){
                            next();
                        } else {
                            bcrypt.hash(values.password_hash, 8, function(err, hash){
                                if(err){
                                    return next(err);
                                } else {
                                    values.password_hash = hash;
                                    next();
                                }
                            });
                        }
                    });
                } else {
                    next(err);
                }
            }
        });
    }
};

module.exports = User;