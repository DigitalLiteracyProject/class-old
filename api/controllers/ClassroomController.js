/**
 * ClassroomController
 *
 * @description :: Server-side logic for managing classrooms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
  show: function(req, res){
    Classroom.findOne( {id: req.params.id} ).done(function(err, classroom){
      users = classroom.students.concat(classroom.teachers);
      User.find().where({ id: users }).exec(function(err, user_data){
        res.view('classroom/show', {users: user_data, classroom: classroom});
      });
    })
  },

  list: function(req, res){
    Classroom.find().done(function(err, classrooms){
      res.view('classroom/list', {classrooms: classrooms});
    });
  },

  edit: function(req, res){
    Classroom.findOne({id: req.params.id}).done(function(err, classroom){
      if(err) throw err;
      sails.models.user.find().done(function(err, all_users){
        if(err) throw err;
        var divided = Classroom.divideUsers(all_users);
        var students = divided[0];
        var teachers = divided[1];
        sails.models.session.find().done(function(err, sessions){
          res.view('classroom/edit', {classroom: classroom, students: students, teachers: teachers, sessions: sessions});
        });
      });
    })
  },

  update: function(req, res){
    console.log('Classroom edited');
    Classroom.findOne(req.params.id).done(function(err, classroom){

    })
  },
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ClassController)
   */
  _config: {}

  
};
