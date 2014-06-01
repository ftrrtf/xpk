require_relative '../way.rb'

describe 'Way' do

  it 'should exists' do
    Way.new
  end

  it 'should have method pwd' do
    Way.new.pwd
  end

  it 'should have method cd' do
    Way.new.cd "/"
  end

  it 'cd() should change our location1' do
    way = Way.new
    way.cd "/home/vasya"
    way.get_path.should == "/home/vasya/"
    way.cd ".."
    way.get_path.should == "/home/"
    way.cd "vasya/../petya"
    way.get_path.should == "/home/petya/"
  end

  it 'cd() should change our location2' do
    way = Way.new
    way.cd "/a/b"
    way.get_path.should == "/a/b/"
    way.cd "../a/b"
    way.get_path.should == "/a/a/b/"
  end
end