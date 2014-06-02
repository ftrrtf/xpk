(->
  'use strict'

  describe 'TDD tests', ->

    describe 'Math tests', ->

      it 'Simple sum test', ->
        assert.equal 2+2, 4
        return

      it 'Pow test', ->
        assert.equal Math.pow(2, 2),  4
        return
      return
      
    describe 'String parser tests', ->

      it 'Test 1 line', ->
        commands = getCommandsFromText '1'
        expected = ['1']
        assert.deepEqual commands, expected;
        return

      it 'Test two lines', ->
        commands = getCommandsFromText '1\n2'
        expected = ['1','2'];
        assert.deepEqual commands, expected;
        return
        
      it 'Test two lines #2', ->
        commands = getCommandsFromText '1\n2\n'
        expected = ['1','2'];
        assert.deepEqual commands, expected;
        return

      it 'Test two lines #3', ->
        commands = getCommandsFromText '1\n2\n\n'
        expected = ['1','2'];
        assert.deepEqual commands, expected;
        return
      return

    describe 'Console emulator tests', ->
      consoleEmulator = null

      beforeEach (done) ->
        consoleEmulator = new ConsoleEmulator()
        consoleEmulator.clear()
        done()
        return
      
      afterEach (done) ->
        consoleEmulator = null
        done()
        return

      it 'Test current path #1', ->
        assert.equal consoleEmulator.getCurrentPath() , '/'
        return

      it 'Test current path #2', ->
        input = ['pwd'];
        expected = ['/'];
        assert.deepEqual consoleEmulator.load(input) , expected
        return

      it 'Optimize path test #1', ->
        assert.equal consoleEmulator.optimizePath('/a/../b/../c/'), '/c/'
        return

      it 'Optimize path test #2', ->
        assert.equal consoleEmulator.optimizePath('/a/../../b/../c/'), '/c/'
        return

      it 'Optimize path test #3', ->
        assert.equal consoleEmulator.optimizePath('/../../../../'), '/'
        return

      it 'Real test #1', ->
        input = ['pwd', 'pwd']
        expected = ['/', '/']
        assert.deepEqual consoleEmulator.load(input), expected;
        return

      it 'Real test #2', ->
        input = ['cd vasa', 'pwd']
        expected = ['/vasa/']
        assert.deepEqual consoleEmulator.load(input), expected;
        return

      it 'Real test #3', ->
        input = ['pwd', 'cd /home/vasya', 'pwd', 'cd ..', 'pwd', 'cd vasya/../petya', 'pwd']
        expected = ['/', '/home/vasya/', '/home/', '/home/petya/']
        assert.deepEqual consoleEmulator.load(input), expected;
        return

      it 'Real test #4', ->
        input = ['cd /a/b', 'pwd', 'cd ../a/b', 'pwd']
        expected = ['/a/b/', '/a/a/b/']
        assert.deepEqual consoleEmulator.load(input), expected;
        return
      return

    return  

  return  
  )()