/**
 * processPOST
 *
 * @module      :: Policy
 * @description :: To ensure that values are correctly processed from POST
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  console.log(req.query);
  _.each(_.keys(req.query), function(key){
    console.log(req.query[key]);
    req.query[key] = JSON.parse('"' + req.query[key] + '"');
  });

  return next();

};
