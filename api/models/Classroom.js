/**
* Classroom.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Classroom = {
    attributes: {
      name: {
        type: 'STRING',
        required: true
      },

      students: {
        type: 'ARRAY',
        defaultsTo: [],
      },

      teachers: {
        type: 'ARRAY',
        defaultsTo: []
      },

      modules: {
        type: 'ARRAY',
        defaultsTo: []
      },

      activeModule: {
        type: 'INTEGER',
        defaultsTo: 0
      }
    }
};

module.exports = Classroom;