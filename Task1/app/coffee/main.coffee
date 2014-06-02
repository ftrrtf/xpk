'use strict'

getCommandsFromText = (string) ->
  string.match(/[^\r\n]+/g) or []

run =  -> 
  commands = getCommandsFromText($('#inputData').val())
  consoleEmulator = new ConsoleEmulator
  result = consoleEmulator.load(commands)
  $('#outputData').val(result.join('\n'));
  return 