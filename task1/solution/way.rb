class Way
  @path

  def initialize
    @path = Array.new
  end

  def pwd
    print '/'
    @path.each {|e| print e.to_s + '/'}
    puts
  end

  def get_path
    s = '/'
    @path.each {|e| s += e.to_s + '/'}
    return s
  end



  def cd(path)
    if path[0] == '/' then
      @path = []
      newpath = path[1..path.length-1];
      cd(newpath)
    else
      if path[0..1] == '..' then
       @path.delete(@path.last)
       if path.index('/') != nil then
        newpath = path[3..path.length-1]
        cd(newpath)
       end
      else
        if path.index('/') != nil then
          @path.push(path[0, path.index('/')])
          newpath = path[path.index('/')+1, path.length]
          cd(newpath)
        else
          @path.push(path[0, path.length])
        end
      end
    end

  end

end