class ConsoleEmulator

  currentPath = '/'

  getCurrentPath: -> 
  	currentPath
  
  changeDirectory = (path) ->
    currentPath = privateOptimizePath(path) + '/'
    return

  privateClear = ->
    currentPath = '/'

  clear: ->
    privateClear()
    return

  privateOptimizePath = (path) ->
    items = path.split '/'
    loop
      indexOfDotDot = items.indexOf '..'
      break if indexOfDotDot is -1
      items.splice indexOfDotDot, 1
      items.splice indexOfDotDot - 1, 1 if indexOfDotDot > 1
    if items.length is 0
      items.push ''
    items.join('/')
  
  optimizePath: (path) ->
    privateOptimizePath(path)
    
  load: (items) ->
    output = []
    for item in items
      if item.length is 3 and item is 'pwd'
        output.push currentPath 
        continue
      path = item.split(' ')[1]
      if path[0] isnt '/'
        path = currentPath + path 
      changeDirectory(path)
    privateClear()
    output

