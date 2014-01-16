/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

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
    }
};

module.exports = User;