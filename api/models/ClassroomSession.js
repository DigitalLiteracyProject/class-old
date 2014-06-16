/**
 * ClassroomSession
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var ClassroomSession = {
  attributes: {
    messages: {
      type: 'ARRAY',
      defaultsTo: []
    },

    modules: {
      type: 'ARRAY',
      defaultsTo: []
    }
  }
};

module.exports = ClassroomSession;