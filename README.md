# Home office tests

-------------------
MAVEN
-----
Run Test With MAVEN

mvn integration-test -Pcucumber "-Dcucumber.options=--tags  @homeoffice_excelreader,@homeoffice_datadriver  --plugin html:target/cucumber/homeoficetest/ --plugin json:target/cucumber/homeoficetest/cucumber.json"

---------------

----------------
REPORTS
----

CUCUMBER REPORT: target/cucumber/homeoficetest/index.html

EXCEL REPORT: src/main/resources/filesinfolder/resultsoutput/results.xls (this needs refinement) 

---
DATA
---
------------
INPUT FOLDER and FILES:/src/main/resources/filesinfolder/

--------------


---------------------
BROWSER
---
-----
*****  DEFAULT BROWSER IS CHROME *****

---------------------

FOR FIREFOX (has to pass as environment vairable form maven Ex: -DBrowser = chrome/firefox)

read comments in ->  /src/main/java/utilities/ChooseBrowser.java

----------------------

----------------------
If system throw error like  "The driver is not executable:"  for LINUX or MAC then 

Step 1) opne terminal and navigate to ->  /src/test/resources/chromewebdrivers/ 

Step 2)  FOR Linux users  type ->  chmod +x linuxchromedriver     AND  For mac users -> chmod +x MacChromedriver

-----------------------

