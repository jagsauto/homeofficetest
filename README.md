# homeofficetests

A) Run Test With MAVEN

mvn integration-test -Pcucumber "-Dcucumber.options=--tags @hmp  --plugin  html:target/cucumber/homeoficetest/   --plugin  json:target/cucumber/homeoficetest/cucumber.json"

***** if system error shown "The driver is not executable:"  for LINUX or MAC the 

Step 1) opne terminal and navigate to ->   ..../src/test/resources/chromewebdrivers/    
       
Step 2) the type ->  chmod +x linuxchromedriver    FOR Linux users   AND   chmod +x linuxchromedriver MacChromedriver   For mac users
