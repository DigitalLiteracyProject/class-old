/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

var User = {
    attributes: {
        name: {
            type: 'STRING',
            required: true
        },

        username: {
            type: 'STRING',
            required: true
        },

        password_hash: {
            type: 'STRING',
            required: true
        },
        
        type: {
            type: 'STRING',
            required: true
        },

        class: {
            type: 'INTEGER',
            required: false
        }
    },

    beforeCreate: function(values, next){
        bcrypt.hash(values.password_hash, 8, function(err, hash){
            if(err){
                return next(err);
            } else {
                values.password_hash = hash;
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