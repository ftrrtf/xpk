(->
  'use strict'

  describe 'BDD tests', ->

    describe 'String parser tests', ->

      it 'Test 1 line', ->
        commands = getCommandsFromText '1'
        expected = ['1']
        expect(commands).to.be.deep.equal expected;
        return

      it 'Test two lines', ->
        commands = getCommandsFromText '1\n2'
        expected = ['1','2'];
        expect(commands).to.be.deep.equal expected;
        return
        
      it 'Test two lines #2', ->
        commands = getCommandsFromText '1\n2\n'
        expected = ['1','2'];
        expect(commands).to.be.deep.equal expected;
        return

      it 'Test two lines #3', ->
        commands = getCommandsFromText '1\n2\n\n'
        expected = ['1','2'];
        expect(commands).to.be.deep.equal expected;
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
        consoleEmulator.getCurrentPath().should.equal '/'
        return

      it 'Test current path #2', ->
        input = ['pwd'];
        expected = ['/'];
        expect(consoleEmulator.load(input)).to.be.deep.equal expected
        return

      it 'Optimize path test #1', ->
        expect(consoleEmulator.optimizePath('/a/../b/../c/')).to.be.deep.equal '/c/'
        return

      it 'Optimize path test #2', ->
        expect(consoleEmulator.optimizePath('/a/../../b/../c/')).to.be.deep.equal '/c/'
        return

      it 'Optimize path test #3', ->
        expect(consoleEmulator.optimizePath('/../../../../')).to.be.deep.equal '/'
        return

      it 'Real test #1', ->
        input = ['pwd', 'pwd']
        expected = ['/', '/']
        expect(consoleEmulator.load(input)).to.be.deep.equal expected;
        return

      it 'Real test #2', ->
        input = ['cd vasa', 'pwd']
        expected = ['/vasa/']
        expect(consoleEmulator.load(input)).to.be.deep.equal expected;
        return

      it 'Real test #3', ->
        input = ['pwd', 'cd /home/vasya', 'pwd', 'cd ..', 'pwd', 'cd vasya/../petya', 'pwd']
        expected = ['/', '/home/vasya/', '/home/', '/home/petya/']
        expect(consoleEmulator.load(input)).to.be.deep.equal expected;
        return

      it 'Real test #4', ->
        input = ['cd /a/b', 'pwd', 'cd ../a/b', 'pwd']
        expected = ['/a/b/', '/a/a/b/']
        expect(consoleEmulator.load(input)).to.be.deep.equal expected;
        return
      return

    return  

  return  
  )()