var ConsoleEmulator;

ConsoleEmulator = (function() {
  var changeDirectory, currentPath, privateClear, privateOptimizePath;

  function ConsoleEmulator() {}

  currentPath = '/';

  ConsoleEmulator.prototype.getCurrentPath = function() {
    return currentPath;
  };

  changeDirectory = function(path) {
    currentPath = privateOptimizePath(path) + '/';
  };

  privateClear = function() {
    return currentPath = '/';
  };

  ConsoleEmulator.prototype.clear = function() {
    privateClear();
  };

  privateOptimizePath = function(path) {
    var indexOfDotDot, items;
    items = path.split('/');
    while (true) {
      indexOfDotDot = items.indexOf('..');
      if (indexOfDotDot === -1) {
        break;
      }
      items.splice(indexOfDotDot, 1);
      if (indexOfDotDot > 1) {
        items.splice(indexOfDotDot - 1, 1);
      }
    }
    if (items.length === 0) {
      items.push('');
    }
    return items.join('/');
  };

  ConsoleEmulator.prototype.optimizePath = function(path) {
    return privateOptimizePath(path);
  };

  ConsoleEmulator.prototype.load = function(items) {
    var item, output, path, _i, _len;
    output = [];
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      if (item.length === 3 && item === 'pwd') {
        output.push(currentPath);
        continue;
      }
      path = item.split(' ')[1];
      if (path[0] !== '/') {
        path = currentPath + path;
      }
      changeDirectory(path);
    }
    privateClear();
    return output;
  };

  return ConsoleEmulator;

})();
