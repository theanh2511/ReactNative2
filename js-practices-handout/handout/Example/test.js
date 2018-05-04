const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const fs = require('fs');

const Reporter = require('jasmine-spec-reporter').SpecReporter;
const customReporter = require('./customReporter');
jasmine.jasmine.getEnv().clearReporters();
jasmine.jasmine.getEnv().addReporter(new Reporter({
  spec: {
    displaySuccessful: false,
    displayPending: true,
    displayFailed: false
  }
}));
jasmine.jasmine.getEnv().addReporter(customReporter);

const decision = require(process.argv[2] || './decision.js');

console.log(`Starting decision test...`);
Array.from({ length: 50 }).forEach((item, index) => {
  describe(`Test no.${index + 1}`, function () {
    const start = process.hrtime();
    const result = decision([{ yours: true, theirs: false }]);
    const end = process.hrtime(start);

    it(`Must return within 500ms`, () => {
      expect(end[0] * 1e9 + end[1]).toBeLessThan(500000000);
    });
    it(`Must return either true or false`, () => {
      expect(result === true || result === false).toBeTruthy();
    })
  })
});

jasmine.execute();
