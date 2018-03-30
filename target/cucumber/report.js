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
  "location": "DvlaCucumberStepDefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 3280812252,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1271335243,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.read_registration_number_from_inputfolder_and_enter()"
});
formatter.result({
  "duration": 5768057761,
  "error_message": "java.lang.AssertionError: expected [RED] but found [BLUE]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\n\tat org.testng.Assert.assertEquals(Assert.java:125)\n\tat org.testng.Assert.assertEquals(Assert.java:178)\n\tat org.testng.Assert.assertEquals(Assert.java:188)\n\tat cucumber.test.steps.DvlaCucumberStepDefs.read_registration_number_from_inputfolder_and_enter(DvlaCucumberStepDefs.java:54)\n\tat ✽.Then read registration number from inputfolder and enter(hm.feature:7)\n",
  "status": "failed"
});
});