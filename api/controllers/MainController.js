/**
 * MainController
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

    index: function(req, res){
        res.redirect('/modules');
    },

    class: function(req, res){
        res.view('class/main');
    },

    show: function(req, res){
      var attributes = Object.keys(sails.models[req.params.model].attributes);

      sails.models[req.params.model].findOneById(req.params.id, function(err, doc){
        if(err)
          res.send('Error fetching item');
        res.view('_show', {model: doc, modelName: req.params.model, attributes: attributes});
      });
    },

    edit: function(req, res){
      var attributes = Object.keys(sails.models[req.params.model].attributes);

      sails.models[req.params.model].findOneById(req.params.id, function(err, doc){
        if(err)
          res.send('Error rendering edit form');
        res.view('_edit', {model: doc, modelName: req.params.model, attributes: attributes});
      });
    },

    list: function(req, res){

      sails.models[req.params.model].find().done(function(err, docs){
        if(err)
          res.send('Error getting list');
        res.view('_list', {models: docs, modelName: req.params.model});
      });
    },

    new: function(req, res){
      var attributes = Object.keys(sails.models[req.params.model].attributes);

      res.view('_new', {modelName: req.params.model, attributes: attributes});
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MainController)
   */
  _config: {}

  
};
