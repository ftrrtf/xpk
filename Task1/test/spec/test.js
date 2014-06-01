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
                consoleEmulator.clear();
                done();
            });

            afterEach(function(done){
                consoleEmulator = null;
                done();
            });

            it('Test current path #1', function() {
                assert.equal(consoleEmulator.getCurrentPath(), '/');
            })

            it('Test current path #2', function() {
                var input = [
                    'pwd'
                ];
                var expected = [
                    '/'
                ];
                assert.deepEqual(consoleEmulator.load(input), expected);
            });

            it('Optimize path test #1' , function() {
                assert.equal(consoleEmulator.optimizePath('/a/../b/../c/'), '/c/');
            });

            it('Optimize path test #2' , function() {
                assert.equal(consoleEmulator.optimizePath('/a/../../b/../c/'), '/c/');
            });

            it('Optimize path test #3' , function() {
                assert.equal(consoleEmulator.optimizePath('/../../../../'), '/');
            });

            it('Real test #1', function() {
                var input = [
                    'pwd',
                    'pwd'
                ];
                var expected = [
                    '/',
                    '/'
                ];
                assert.deepEqual(consoleEmulator.load(input), expected);
            });

            it('Real test #2', function() {
                var input = [
                    'cd vasa',
                    'pwd'
                ];
                var expected = [
                    '/vasa/'
                ];
                assert.deepEqual(consoleEmulator.load(input), expected);
            });

            it('Real test #3', function() {
                var input = [
                    'pwd',
                    'cd /home/vasya',
                    'pwd',
                    'cd ..',
                    'pwd',
                    'cd vasya/../petya',
                    'pwd'
                ];
                var expected = [
                    '/',
                    '/home/vasya/',
                    '/home/',
                    '/home/petya/'
                ];
                assert.deepEqual(consoleEmulator.load(input), expected);
            });


            it('Real test #4', function() {
                var input = [
                    'cd /a/b',
                    'pwd',
                    'cd ../a/b',
                    'pwd'
                ];
                var expected = [
                    '/a/b/',
                    '/a/a/b/'
                ];
                assert.deepEqual(consoleEmulator.load(input), expected);
            });
        });
    });

    describe('BDD tests', function(){
    
        describe('String parser tests', function() {

            it('Test 1 line', function() {
                var commands = getCommandsFromText('1');
                var expected = ['1'];
                expect(commands).to.be.deep.equal(expected);
            });

            it('Test two lines', function() {
                var commands = getCommandsFromText('1\n2');
                var expected = [
                    '1',
                    '2'
                ];
                expect(commands).to.be.deep.equal(expected);
            });
            it('Test two lines #2', function() {
                var commands = getCommandsFromText('1\n2\n');
                var expected = [
                    '1',
                    '2'
                ];
                expect(commands).to.be.deep.equal(expected);
            });
            it('Test two lines #3', function() {
                var commands = getCommandsFromText('1\n2\n\n');
                var expected = [
                    '1',
                    '2'
                ];
                expect(commands).to.be.deep.equal(expected);
            });
        });

        describe('Console emulator tests', function() {
            var consoleEmulator;

            beforeEach(function(done){
                consoleEmulator = new ConsoleEmulator();
                consoleEmulator.clear();
                done();
            });

            afterEach(function(done){
                consoleEmulator = null;
                done();
            });

            it('Test current path #1', function() {
                consoleEmulator.getCurrentPath().should.equal('/');
            })

            it('Test current path #2', function() {
                var input = [
                    'pwd'
                ];
                var expected = [
                    '/'
                ];
                expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
            });

            it('Optimize path test #1' , function() {
                expect(consoleEmulator.optimizePath('/a/../b/../c/')).to.be.deep.equal('/c/');
            });

            it('Optimize path test #2' , function() {
                expect(consoleEmulator.optimizePath('/a/../../b/../c/')).to.be.deep.equal('/c/');
            });

            it('Optimize path test #3' , function() {
                expect(consoleEmulator.optimizePath('/../../../../')).to.be.deep.equal('/');
            });

            it('Real test #1', function() {
                var input = [
                    'pwd',
                    'pwd'
                ];
                var expected = [
                    '/',
                    '/'
                ];
                expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
            });

            it('Real test #2', function() {
                var input = [
                    'cd vasa',
                    'pwd'
                ];
                var expected = [
                    '/vasa/'
                ];
                expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
            });

            it('Real test #3', function() {
                var input = [
                    'pwd',
                    'cd /home/vasya',
                    'pwd',
                    'cd ..',
                    'pwd',
                    'cd vasya/../petya',
                    'pwd'
                ];
                var expected = [
                    '/',
                    '/home/vasya/',
                    '/home/',
                    '/home/petya/'
                ];
                expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
            });


            it('Real test #4', function() {
                var input = [
                    'cd /a/b',
                    'pwd',
                    'cd ../a/b',
                    'pwd'
                ];
                var expected = [
                    '/a/b/',
                    '/a/a/b/'
                ];
                expect(consoleEmulator.load(input)).to.be.deep.equal(expected);
            });
        });
    });
})();
