/**
 * Module
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Module = {
    attributes: {
        title: 'STRING',
        description: 'STRING',
        tasks: 'ARRAY',
        notes: 'STRING',
        deliverables: 'ARRAY',
        lesson_brief: 'STRING',
        lesson_plan: 'STRING'
    }
};

module.exports = Module;