const { display, expect } = require('../utils');

module.exports = {
  isValidEnv: (env) => {
    expect(env).to.be.defined;
  } 
}