/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var User = {
    attributes: {
        username: 'STRING',
        password_hash: 'STRING'
    }
};

module.exports = User;