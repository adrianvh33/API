const userResolver = require('./users_resolver');
const projectResolver = require('./project_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(userResolver,projectResolver);

module.exports = resolvers;