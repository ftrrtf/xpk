Feature: Example feature
  I want to use Cucumber.js as a test tool

  Scenario: Visiting site and checking title
    Given I am on the start page
    Then I should see "xpk" as the page title

  Scenario: Test #1
    Given I am on the start page
    Then I pass "pwd" into input
    Then I click on the run button
    Then I see "/" in output

  Scenario: Test #2
    Given I am on the start page
    Then I pass "pwd\npwd\npwd" into input
    Then I click on the run button
    Then I see "/\n/\n/" in output

  Scenario: Real test #1
    Given I am on the start page
    Then I pass "pwd\ncd /home/vasya\npwd\ncd ..\npwd\ncd vasya/../petya\npwd" into input
    Then I click on the run button
    Then I see "/\n/home/vasya/\n/home/\n/home/petya/" in output

  Scenario: Real test #2
    Given I am on the start page
    Then I pass "cd /a/b\npwd\ncd ../a/b\npwd" into input
    Then I click on the run button
    Then I see "/a/b/\n/a/a/b/" in output
