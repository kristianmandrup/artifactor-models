const jsf = require('json-schema-faker')
const { merge } = require('lodash');
const { display } = require('../utils')
const { display } = require('../utils')

function domainFor(name) {
  return require('./' + name);
}

module.exports = class Generator {
  constructor(name, count = 1) {
    this.name = name;
    this.count = count;
    this.schema = domainFor(name).schema;
  }

  get fakerSchema() {
    return merge({}, this.schema.domain, this.schema.faker);
  }

  createOne() {
    return jsf(this.fakerSchema);
  }

  createMany(count) {
    count = count || this.count;
    return new Array(count).map(n => this.createOne()));
  }

  generate(count = 1) {
    count = count || this.count;
    return count == 1 ? createOne() : createMany(this.count);
  }
}

