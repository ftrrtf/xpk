(function() {
  'use strict';
  describe('TDD tests', function() {
    describe('Math tests', function() {
      it('Simple sum test', function() {
        assert.equal(2 + 2, 4);
      });
      it('Pow test', function() {
        assert.equal(Math.pow(2, 2), 4);
      });
    });
    describe('String parser tests', function() {
      it('Test 1 line', function() {
        var commands, expected;
        commands = getCommandsFromText('1');
        expected = ['1'];
        assert.deepEqual(commands, expected);
      });
      it('Test two lines', function() {
        var commands, expected;
        commands = getCommandsFromText('1\n2');
        expected = ['1', '2'];
        assert.deepEqual(commands, expected);
      });
      it('Test two lines #2', function() {
        var commands, expected;
        commands = getCommandsFromText('1\n2\n');
        expected = ['1', '2'];
        assert.deepEqual(commands, expected);
      });
      it('Test two lines #3', function() {
        var commands, expected;
        commands = getCommandsFromText('1\n2\n\n');
        expected = ['1', '2'];
        assert.deepEqual(commands, expected);
      });
    });
    describe('Console emulator tests', function() {
      var consoleEmulator;
      consoleEmulator = null;
      beforeEach(function(done) {
        consoleEmulator = new ConsoleEmulator();
        consoleEmulator.clear();
        done();
      });
      afterEach(function(done) {
        consoleEmulator = null;
        done();
      });
      it('Test current path #1', function() {
        assert.equal(consoleEmulator.getCurrentPath(), '/');
      });
      it('Test current path #2', function() {
        var expected, input;
        input = ['pwd'];
        expected = ['/'];
        assert.deepEqual(consoleEmulator.load(input), expected);
      });
      it('Optimize path test #1', function() {
        assert.equal(consoleEmulator.optimizePath('/a/../b/../c/'), '/c/');
      });
      it('Optimize path test #2', function() {
        assert.equal(consoleEmulator.optimizePath('/a/../../b/../c/'), '/c/');
      });
      it('Optimize path test #3', function() {
        assert.equal(consoleEmulator.optimizePath('/../../../../'), '/');
      });
      it('Real test #1', function() {
        var expected, input;
        input = ['pwd', 'pwd'];
        expected = ['/', '/'];
        assert.deepEqual(consoleEmulator.load(input), expected);
      });
      it('Real test #2', function() {
        var expected, input;
        input = ['cd vasa', 'pwd'];
        expected = ['/vasa/'];
        assert.deepEqual(consoleEmulator.load(input), expected);
      });
      it('Real test #3', function() {
        var expected, input;
        input = ['pwd', 'cd /home/vasya', 'pwd', 'cd ..', 'pwd', 'cd vasya/../petya', 'pwd'];
        expected = ['/', '/home/vasya/', '/home/', '/home/petya/'];
        assert.deepEqual(consoleEmulator.load(input), expected);
      });
      it('Real test #4', function() {
        var expected, input;
        input = ['cd /a/b', 'pwd', 'cd ../a/b', 'pwd'];
        expected = ['/a/b/', '/a/a/b/'];
        assert.deepEqual(consoleEmulator.load(input), expected);
      });
    });
  });
})();
