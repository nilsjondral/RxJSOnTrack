module.exports = function (wallaby) {
  const path = require('path');
  const ts = require(path.join(wallaby.localProjectDir, 'node_modules/typescript'));
  const jestconfig = require('./package.json').jest;
  return {
    files: jestconfig.collectCoverageFrom,
    tests: ['src/**/*.spec.ts'],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      'src/**/*.ts': wallaby.compilers.typeScript(Object.assign(require('./tsconfig.jest.json'), {typescript: ts}))
    },
    testFramework: 'jest',
    debug: true,
    hints: {
      ignoreCoverage: /ignore coverage/
    }
  };
};
