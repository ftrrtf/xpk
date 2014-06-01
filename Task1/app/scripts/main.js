'use strict';
var getCommandsFromText, run;

getCommandsFromText = function(string) {
  return string.match(/[^\r\n]+/g);
};

run = function() {
  var commands, consoleEmulator, result;
  commands = getCommandsFromText($('#inputData').val());
  consoleEmulator = new ConsoleEmulator;
  result = consoleEmulator.load(commands);
  $('#outputData').val(result.join('\n'));
};
