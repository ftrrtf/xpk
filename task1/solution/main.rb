#!/usr/bin/ruby

require './way.rb'

myway = Way.new

begin
  cmd = gets

  if cmd[0..2] == "pwd" then
    myway.pwd
  end
  if cmd[0..1] == "cd" then
    cmd.delete!("\n")
    myway.cd(cmd[3, cmd.length])
  end

end while cmd.delete("\n") != "exit"