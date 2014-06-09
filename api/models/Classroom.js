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

      sessions: {
        type: 'ARRAY',
        defaultsTo: []
      },
    },


    divideUsers: function(users){
      var students = [];
      var teachers = [];
      users.forEach(function(user){
        if(user.type === 'student'){
          students.push(user);
        } else if(user.type === 'teacher' || user.type == 'admin') {
          teachers.push(user);
        }
      });
      return [students, teachers];
    },
};

module.exports = Classroom;