/**
 * SessionController
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

  show: function(req, res){
    console.log(req.params.id);
    session.findOne({id: req.params.id}).done(function(err, session){
      res.view('session/show', {session: session});
    });
  },

  edit: function(req, res){
    console.log(req.params.id);
    res.view('session/edit', {params: req.params});
  },

  studentView: function(req, res){
    res.view('session/studentView');
  },
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SessionController)
   */
  _config: {}

  
};
