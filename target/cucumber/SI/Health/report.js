$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hm.feature");
formatter.feature({
  "line": 1,
  "name": "dvla",
  "description": "",
  "id": "dvla",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "search vehicle number in governament stite",
  "description": "",
  "id": "dvla;search-vehicle-number-in-governament-stite",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@hmp"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "read registration number from inputfolder and enter",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 4569431628,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_on_start_button()"
});
formatter.result({
  "duration": 1705549392,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.read_registration_number_from_inputfolder_and_enter()"
});
formatter.result({
  "duration": 748524243,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat org.testng.Assert.assertFalse(Assert.java:73)\r\n\tat cucumber.test.steps.MyStepdefs.read_registration_number_from_inputfolder_and_enter(MyStepdefs.java:49)\r\n\tat ✽.Then read registration number from inputfolder and enter(hm.feature:7)\r\n",
  "status": "failed"
});
});