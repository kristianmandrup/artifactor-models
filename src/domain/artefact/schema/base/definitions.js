const author = require('./author');
const rating = require('./rating');
const environment = require('./environment');
const dependency = require('./environment/dependency');
const category = require('./environment/dependency');
const popularWith = require('./popular-with');

module.exports = {
  author,
  rating,
  environment,
  dependency,
  category,
  popularWith,
  name: {
    type: 'string'
  },
  version: {
    type: 'string',
    pattern: '^(\\d+\\.)?(\\d+\\.)?(\\*|\\d+)$'     
  }  
}