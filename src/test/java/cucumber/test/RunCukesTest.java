
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


/**
 * Author : Jagadeesh Vendi
 * Date : 30/March/2018
 * I have used CUCUMBER-JVM with TestNg framework
 *
 * When we run RunCuckesTest Directly then local given then will be executed
 * if we run tets from mavan then maven tags will be executed
 *
 * EX: mvn integration-test -Pcucumber "-Dcucumber.options=--tags @hmp  --plugin  html:target/cucumber/SI/Health/   --plugin  json:target/cucumber/SI/Health/cucumber.json"
 */

@CucumberOptions(monochrome = true, plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json" },
        tags = {"@homeoffice_datadriver"},features = "src/test/resources/feature")
public class RunCukesTest extends AbstractTestNGCucumberTests {

}


