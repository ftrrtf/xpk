'use strict'
getCommandsFromText = (string) ->
  string.match(/[^\r\n]+/g)
run =  -> 
  commands = getCommandsFromText($('#inputData').val())
  console.log commands
  return   
two = 2
