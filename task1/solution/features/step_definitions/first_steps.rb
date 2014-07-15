#encoding: utf-8
Given(/^I run program$/) do
	@way = Way.new
end

When(/^I enter command pwd$/) do
  	@way.pwd
end

Then(/^I should see "(.*?)"$/) do |arg|
	@way.get_path.should == arg
end

When(/^I enter command cd "(.*?)"/) do |arg|
  	@way.cd arg
end

When(/^second cd "(.*?)"$/) do |arg|
  	@way.cd arg
end

