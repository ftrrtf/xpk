(function() {
  'use strict';
  describe('BDD tests', function() {
    describe('String parser tests', function() {
      it('Test 1 line', function() {
        var commands, expected;
        commands = getCommandsFromText('1');
        expected = ['1'];
        expect(commands).to.be.deep.equal(expected);
      });
      it('Test two lines', function() {
        var commands, expected;
        commands = getCommandsFromText('1\n2');
        expected = ['1', '2'];
        expect(commands).to.be.deep.equal(expected);
      });
      it('Test two lines #2', function() {
        var commands, expected;
        commands = getCommandsFromText('1\n2\n');
        expected = ['1', '2'];
        expect(commands).to.be.deep.equal(expected);
      });
      it('Test two lines #3', function() {
        var commands, expected;
        commands = getCommandsFromText('1\n2\n\n');
        expected = ['1', '2'];
        expect(commands).to.be.deep.equal(expected);
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
        consoleEmulator.getCurrentPath().should.equal('/');
      });
      it('Test current path #2', function() {
        var expected, input;
        input = ['pwd'];
        expected = ['/'];
        expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
      });
      it('Optimize path test #1', function() {
        expect(consoleEmulator.optimizePath('/a/../b/../c/')).to.be.deep.equal('/c/');
      });
      it('Optimize path test #2', function() {
        expect(consoleEmulator.optimizePath('/a/../../b/../c/')).to.be.deep.equal('/c/');
      });
      it('Optimize path test #3', function() {
        expect(consoleEmulator.optimizePath('/../../../../')).to.be.deep.equal('/');
      });
      it('Real test #1', function() {
        var expected, input;
        input = ['pwd', 'pwd'];
        expected = ['/', '/'];
        expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
      });
      it('Real test #2', function() {
        var expected, input;
        input = ['cd vasa', 'pwd'];
        expected = ['/vasa/'];
        expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
      });
      it('Real test #3', function() {
        var expected, input;
        input = ['pwd', 'cd /home/vasya', 'pwd', 'cd ..', 'pwd', 'cd vasya/../petya', 'pwd'];
        expected = ['/', '/home/vasya/', '/home/', '/home/petya/'];
        expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
      });
      it('Real test #4', function() {
        var expected, input;
        input = ['cd /a/b', 'pwd', 'cd ../a/b', 'pwd'];
        expected = ['/a/b/', '/a/a/b/'];
        expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
      });
    });
  });
})();
