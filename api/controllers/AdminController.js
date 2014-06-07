/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  adminPanel: function(req, res){
    res.view('admin/index');
  }
	
};

