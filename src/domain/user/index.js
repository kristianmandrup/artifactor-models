const create = require('./create')

module.exports = {
  create: create,
  faker: require('./faker'),
  get: require('./get'),
  domain: create
}