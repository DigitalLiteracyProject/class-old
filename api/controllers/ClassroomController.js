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
        res.view('classroom/show', {users: user_data});
      });
    })
  },

  list: function(req, res){
    Classroom.find().done(function(err, classrooms){
      res.view('classroom/list', {classrooms: classrooms});
    });
  },
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ClassController)
   */
  _config: {}

  
};
