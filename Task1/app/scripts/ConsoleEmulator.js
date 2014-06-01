var ConsoleEmulator, three;

ConsoleEmulator = (function() {
  var currentPath;

  function ConsoleEmulator() {}

  currentPath = '/';

  ConsoleEmulator.prototype.getCurrentPath = function() {
    return currentPath;
  };

  return ConsoleEmulator;

})();

three = 3;
