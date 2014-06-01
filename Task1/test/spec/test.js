/* global describe, it */

(function () {
    'use strict';
    
    //var test = require('./../app/scripts/test.js');
    describe('TDD tests', function(){

        describe('Mathematics tests', function () {

            it('simple sum test', function () {
                assert.equal(2 + 2, 4);
            });

            it('pow test', function() {
                assert.equal(Math.pow(2,2), 4);
            });
        });
    
        describe('String parser tests', function() {

            it('Test 1 line', function() {
                var commands = getCommandsFromText('1');
                var expected = ['1'];
                assert.deepEqual(commands, expected);
            });

            it('Test two lines', function() {
                var commands = getCommandsFromText('1\n2');
                var expected = [
                    '1',
                    '2'
                ];
                assert.deepEqual(commands, expected);
            });
            it('Test two lines #2', function() {
                var commands = getCommandsFromText('1\n2\n');
                var expected = [
                    '1',
                    '2'
                ];
                assert.deepEqual(commands, expected);
            });
            it('Test two lines #3', function() {
                var commands = getCommandsFromText('1\n2\n\n');
                var expected = [
                    '1',
                    '2'
                ];
                assert.deepEqual(commands, expected);
            });
        });

        describe('Console emulator tests', function() {
            var consoleEmulator;

            beforeEach(function(done){
                consoleEmulator = new ConsoleEmulator();
                done();
            });

            after(function(done){
                console.log('hello!');
                done();
            });

            it('Test current path', function() {
                assert.equal(consoleEmulator.getCurrentPath(), '/');
            })
        });
    });

})();
