'use strict';
var getCommandsFromText, run, two;

getCommandsFromText = function(string) {
  return string.match(/[^\r\n]+/g);
};

run = function() {
  var commands;
  commands = getCommandsFromText($('#inputData').val());
  console.log(commands);
};

two = 2;
