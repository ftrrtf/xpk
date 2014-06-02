var assert = require('assert');

function replaceAll(str, find, replace) {
  if (str.indexOf(find) != -1) {
    return str.split(find).join(replace);
  } else {
    return str;
  }
}

var myStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^I am on the start page$/, function(callback) {
    this.visit('http://vgamula.github.io/console/', callback);
  });

  this.Then(/^I pass "(.*)" into input$/, function(arg1, callback) {
    arg1 = replaceAll(arg1, "\\n", '\n');
    this.browser.fill("inputData", arg1);
    callback();
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, callback) {
    var pageTitle = this.browser.text('title');
    if (title === pageTitle) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with title " + title));
    }
  });

  this.Then(/^I click on the run button$/, function(callback){
    this.browser.pressButton("btn", function(){});
    callback();
  });

  this.Then(/^I see "([^]*)" in output$/, function(arg1, callback){
    arg1 = replaceAll(arg1, "\\n", '\n');
    var output = this.browser.document.getElementById('outputData');
    assert.equal(arg1, output.value);
    callback();
  });

};

module.exports = myStepDefinitionsWrapper;