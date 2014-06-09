/**
 * Session
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

var Session = {

  attributes: {

    title: {
      type: 'STRING',
      defaultsTo: 'Unnamed Session'
    },

    messages: {
      type: 'ARRAY', // of JSONs
      defaultsTo: []
    },

    modules: {
      type: 'ARRAY', // of module IDs
      
    }
    
  }

};

module.exports = Session;