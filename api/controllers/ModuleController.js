/**
 * LessonController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
    all: function(req,res){
        Module.find({}).done(function(err, modules){
            res.view('module/index', {modules: modules});
        });
    },

    show: function(req, res){
        Save.findOne({belongs_to: req.session.user.id, module: req.params.id}).done(function(err, save){
            if(save) {
                console.log(save);
                console.log(req.session.user);
                res.view('class/main', {save: save});
            } else {
                Save.create({belongs_to: req.session.user.id, module: req.params.id, type: 'HTML', program: ''}).done(function(err, save){
                    res.view('class/main', {save: save});
                });
            }
        });
    },

    classModules: function(req, res) {
      Class.findOne({id: req.session.user}).done(function(err, doc){
        if(doc){
          res.view('module/class_modules', {modules: doc.modules });
        } else {
          res.send('You are not in a class. Please ask your teacher to add you.');
        }
      });
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to LessonController)
   */
  _config: {}

  
};
