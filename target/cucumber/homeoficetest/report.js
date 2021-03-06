$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hm.feature");
formatter.feature({
  "line": 1,
  "name": "dvla",
  "description": "",
  "id": "dvla",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Reprot Will be generated in /target/cucumber/homeoficetest.index.html"
    }
  ],
  "line": 6,
  "name": "search vehicle number in governament stite",
  "description": "",
  "id": "dvla;search-vehicle-number-in-governament-stite",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@homeoffice_excelreader"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "read registration number from inputfolder and enter registration number validate color and make then generate report",
  "keyword": "Then "
});
formatter.match({
  "location": "DvlaCucumberStepDefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 3189603649,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1689170000,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.read_registration_number_from_inputfolder_and_enter()"
});
formatter.result({
  "duration": 6267405241,
  "error_message": "java.lang.AssertionError: expected [RED] but found [BLUE]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat cucumber.test.steps.DvlaCucumberStepDefs.read_registration_number_from_inputfolder_and_enter(DvlaCucumberStepDefs.java:94)\n\tat ✽.Then read registration number from inputfolder and enter registration number validate color and make then generate report(hm.feature:9)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": ": search vehicle number in governament stite",
  "description": "",
  "id": "dvla;:-search-vehicle-number-in-governament-stite",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@homeoffice_datadriver"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter registration number \u003cRegNumber\u003e then validate made \u003cMade\u003e and color \u003cColours\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "dvla;:-search-vehicle-number-in-governament-stite;",
  "rows": [
    {
      "cells": [
        "RegNumber",
        "Made",
        "Colours"
      ],
      "line": 19,
      "id": "dvla;:-search-vehicle-number-in-governament-stite;;1"
    },
    {
      "cells": [
        "N864PPL",
        "JEEP",
        "BLUE"
      ],
      "line": 20,
      "id": "dvla;:-search-vehicle-number-in-governament-stite;;2"
    },
    {
      "cells": [
        "BK04VJF",
        "MERCEDES",
        "SILVER"
      ],
      "line": 21,
      "id": "dvla;:-search-vehicle-number-in-governament-stite;;3"
    },
    {
      "cells": [
        "WAZ2144",
        "VOLKSWAGEN",
        "RED"
      ],
      "line": 22,
      "id": "dvla;:-search-vehicle-number-in-governament-stite;;4"
    },
    {
      "cells": [
        "BK04VJF",
        "MERCEDES",
        "SILVER"
      ],
      "line": 23,
      "id": "dvla;:-search-vehicle-number-in-governament-stite;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": ": search vehicle number in governament stite",
  "description": "",
  "id": "dvla;:-search-vehicle-number-in-governament-stite;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@homeoffice_datadriver"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter registration number N864PPL then validate made JEEP and color BLUE",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DvlaCucumberStepDefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 3562104456,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1912139010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N864PPL",
      "offset": 26
    },
    {
      "val": "JEEP",
      "offset": 53
    },
    {
      "val": "BLUE",
      "offset": 68
    }
  ],
  "location": "DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(String,String,String)"
});
formatter.result({
  "duration": 1570484748,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": search vehicle number in governament stite",
  "description": "",
  "id": "dvla;:-search-vehicle-number-in-governament-stite;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@homeoffice_datadriver"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter registration number BK04VJF then validate made MERCEDES and color SILVER",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DvlaCucumberStepDefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 2162527927,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1386492601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BK04VJF",
      "offset": 26
    },
    {
      "val": "MERCEDES",
      "offset": 53
    },
    {
      "val": "SILVER",
      "offset": 72
    }
  ],
  "location": "DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(String,String,String)"
});
formatter.result({
  "duration": 1280189936,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": search vehicle number in governament stite",
  "description": "",
  "id": "dvla;:-search-vehicle-number-in-governament-stite;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@homeoffice_datadriver"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter registration number WAZ2144 then validate made VOLKSWAGEN and color RED",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DvlaCucumberStepDefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 2150665895,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1319018808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WAZ2144",
      "offset": 26
    },
    {
      "val": "VOLKSWAGEN",
      "offset": 53
    },
    {
      "val": "RED",
      "offset": 74
    }
  ],
  "location": "DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(String,String,String)"
});
formatter.result({
  "duration": 1496315351,
  "error_message": "java.lang.AssertionError: expected [RED] but found [WHITE]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat cucumber.test.steps.DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(DvlaCucumberStepDefs.java:124)\n\tat ✽.Then Enter registration number WAZ2144 then validate made VOLKSWAGEN and color RED(hm.feature:16)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": ": search vehicle number in governament stite",
  "description": "",
  "id": "dvla;:-search-vehicle-number-in-governament-stite;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@homeoffice_datadriver"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "As end user i want to open browser and enter home url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on start  button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter registration number BK04VJF then validate made MERCEDES and color SILVER",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DvlaCucumberStepDefs.as_end_user_i_want_to_open_browser_and_enter_home_url()"
});
formatter.result({
  "duration": 2208539360,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1833789381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BK04VJF",
      "offset": 26
    },
    {
      "val": "MERCEDES",
      "offset": 53
    },
    {
      "val": "SILVER",
      "offset": 72
    }
  ],
  "location": "DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(String,String,String)"
});
formatter.result({
  "duration": 2598254859,
  "status": "passed"
});
});