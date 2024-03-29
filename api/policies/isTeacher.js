/**
 * isTeacher
 *
 * @module      :: Policy
 * @description :: Simple policy to only allow teachers into a page
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  // User is teacher or admin, proceed to the next policy, 
  if (req.session.user.type == "teacher" || req.session.user.type == "admin") {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('Sorry, only teachers or admins can do that!');
};
