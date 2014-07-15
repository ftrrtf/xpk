#encoding: utf-8
Feature: Get Path
	In order to get simple path
	As a typical user
	I want to be told where am I at start

	Scenario: Get local start path
		Given I run program
		When I enter command pwd
		Then I should see "/"

	Scenario: Get local start path
		Given I run program
		When I enter command cd "/home/vasya"
		And second cd ".."
		And second cd "vasya/../petya"
		Then I should see "/home/petya/"

	Scenario: Get local start path
		Given I run program
		When I enter command cd "/a/b"
		And second cd "../a/b"
		Then I should see "/a/a/b/"