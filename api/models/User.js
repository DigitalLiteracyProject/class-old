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
            required: true,
            notEmpty: true
        },

        email: {
            type: 'STRING',
            required: true,
            notEmpty: true
        },

        password_hash: {
            type: 'STRING',
            notEmpty: true
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

    beforeCreate: function(data, next){
      console.log('Data');
      console.log(data);
      bcrypt.hash(data.password, 8, function(err, hash){
          delete data.password;
          if(err){
              return next(err);
          } else {
              data.password_hash = hash;
              console.log(data);
              next();
          }
       });
    },

    beforeUpdate: function(data, next){
        sails.models.user.findOneByUsername(data.username).done(function(err, usr){
            if(err){
                next(err);
            } else {
                if(usr){
                    bcrypt.compare(data.password_hash, usr.password_hash, function(err, passwordMatches){
                        if(passwordMatches){
                            next();
                        } else {
                            bcrypt.hash(data.password_hash, 8, function(err, hash){
                                if(err){
                                    return next(err);
                                } else {
                                    data.password_hash = hash;
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