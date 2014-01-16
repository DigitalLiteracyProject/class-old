/**
 * Save
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Save = {
    attributes: {
        belongs_to: 'INTEGER',
        module: 'INTEGER',
        type: 'STRING',
        program: 'STRING'
    }
};

module.exports = Save;
    