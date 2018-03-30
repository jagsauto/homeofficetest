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
  "duration": 4096344688,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1412837083,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.read_registration_number_from_inputfolder_and_enter()"
});
formatter.result({
  "duration": 5481998382,
  "error_message": "java.lang.AssertionError: expected [RED] but found [BLUE]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat cucumber.test.steps.DvlaCucumberStepDefs.read_registration_number_from_inputfolder_and_enter(DvlaCucumberStepDefs.java:85)\n\tat ✽.Then read registration number from inputfolder and enter registration number validate color and make then generate report(hm.feature:9)\n",
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
  "duration": 2094849747,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1341532199,
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
  "duration": 836484597,
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
  "duration": 2067729157,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1450896594,
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
  "duration": 856288494,
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
  "duration": 2130680234,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 1347944549,
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
  "duration": 571455438,
  "error_message": "java.lang.AssertionError: expected [RED] but found [WHITE]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat cucumber.test.steps.DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(DvlaCucumberStepDefs.java:108)\n\tat ✽.Then Enter registration number WAZ2144 then validate made VOLKSWAGEN and color RED(hm.feature:16)\n",
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
  "duration": 2245228732,
  "status": "passed"
});
formatter.match({
  "location": "DvlaCucumberStepDefs.click_on_start_button()"
});
formatter.result({
  "duration": 7447327034,
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
  "duration": 70701687,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85),platform\u003dMac OS X 10.9.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 69 milliseconds\nBuild info: version: \u00272.40.0\u0027, revision: \u00274c5c0568b004f67810ee41c459549aa4b09c651e\u0027, time: \u00272014-02-19 11:13:01\u0027\nSystem info: host: \u0027priyas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/q9/f3rscxfn12j4d4d8r27z3v7w0000gn/T/.org.chromium.Chromium.GaomLo}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 73b6189eca000181287af780a1dd49fe\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:326)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:415)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:318)\n\tat cucumber.test.steps.DvlaCucumberStepDefs.enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(DvlaCucumberStepDefs.java:104)\n\tat ✽.Then Enter registration number BK04VJF then validate made MERCEDES and color SILVER(hm.feature:16)\n",
  "status": "failed"
});
});