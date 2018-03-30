package cucumber.test.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import utilities.ChooseBrowser;
import utilities.DvlaPageObjects;

import java.io.File;
import java.util.List;

import static utilities.FindFilesInFolder.findFilesInfo;
import static utilities.FindFilesInFolder.returnCellData;
import static utilities.FindFilesInFolder.writeToExcel;
import static utilities.GeneralUtils.timestamp;


/**
 * Author: Jagadeesh Vendi
 * Date : 30/March/2018
 *
 */

public class DvlaCucumberStepDefs extends DvlaPageObjects {

    ChooseBrowser browser = new ChooseBrowser();
    WebDriver driver = browser.getChromeDriver();
    static File folder = new File(System.getProperty("user.dir") + "/src/main/resources/filesinfolder/");
    String screenshots = System.getProperty("user.dir") + "/target/cucumber/screenshots/";


    @Given("^As end user i want to open browser and enter home url$")
    public void as_end_user_i_want_to_open_browser_and_enter_home_url() throws Throwable {
        driver.get(home_url);
        //throw new PendingException();
    }

    @And("^click on start  button$")
    public void click_on_start_button() throws Throwable {
        driver.findElement(startnow_button).click();
        //throw new PendingException();
    }

    /**
     * -----------------------------------------> IMPORTANT AREA :) <---------------------------------------------
     * <p>
     * Step Def "read_registration_number_from_inputfolder_and_enter" will search all files and pick .xlsx file from source folder
     * Then
     * Will read .XLSx files data and write to a java list object
     * Then
     * List will be iterated to pass data to web UI  registration number field
     * Then
     * Color and make asserted  -> expected VS Actual
     * Then
     * During process file writer will write (need to reifne) Pass/Fail based on validation output ALONG WITH cucumber report
     * <p>
     * **NEED TO IMPLEMENT SOFT ASSERTION TO AVOID TERMINATION OF TEST WHEN ASSERT FAILS
     * <p>
     * **LOGIC CAN BE SIMPLIFIED
     * <p>
     * **LOGIC NEED TO BE SEPERATED FROM TEST METHOD FOR REUSABILITY AND READABILITY
     * <p>
     * **CAN GENERATE EXCEL BASED REPORT CAN USE CUCUMBER GENERATED report.json FILE RESIDE IN TARGET/CUCUMBER/
     */
    @Then("^read registration number from inputfolder and enter registration number validate color and make then generate report$")
    public void read_registration_number_from_inputfolder_and_enter() throws Throwable {
        List usefulFilesData = returnCellData(findFilesInfo(folder));
        int j = 0;
        int k = 0;
        int rowClont = 1;
        String resultToExcel;
        for (int i = 0; i <= usefulFilesData.size(); rowClont++) {
            resultToExcel = "PASS";
            writeToExcel(usefulFilesData.get(i).toString(), k, rowClont, resultToExcel);
            driver.findElement(enter_venicle_number).sendKeys(usefulFilesData.get(i).toString());
            driver.findElement(continue_button).submit();
            i = i + 1;
            try {
                Assert.assertFalse(driver.findElement(You_must_enter_your_registration_number_in_a_valid_format).isDisplayed());
            } catch (Exception e) {
            }
            Assert.assertEquals(driver.findElement(Make).getText(), usefulFilesData.get(i).toString());
            i = i + 1;
            k = k + 1;
            if (driver.findElement(Colour).getText().equals(usefulFilesData.get(i).toString())) resultToExcel = "PASS";
            else resultToExcel = "FAIL";
            writeToExcel(usefulFilesData.get(i).toString(), k, rowClont, resultToExcel);
            Assert.assertEquals(driver.findElement(Colour).getText(), usefulFilesData.get(i).toString());
            i = i + 1;
            k = k + 1;
            if (driver.findElement(Colour).getText().equals(usefulFilesData.get(i).toString())) resultToExcel = "PASS";
            resultToExcel = "PASS";
            writeToExcel(usefulFilesData.get(i).toString(), k, rowClont, resultToExcel);
            k = 0;
            j = j + 1;
            driver.navigate().back();
        }
        driver.close();
    }

    /**
     * CUCUMBER DATA DRIVEN
     * <p>
     * NICE IMPLEMENT A CONNECTOR WHICH WILL PASS DATA TO FEATURE FILE - > CUCUMBER DATA DRIVEN  FROM .XLS/CSV
     */


    @Then("^Enter registration number (.*) then validate made (.*) and color (.*)$")
    public void enterRegistrationNumberRegNumberThenValidateMadeMadeAndColorColours(String RegNumber, String Made, String Colours) throws Throwable {
        driver.findElement(enter_venicle_number).sendKeys(RegNumber);
        driver.findElement(continue_button).submit();
        screenShotPlease(driver, screenshots +RegNumber+ timestamp());
        try {
            Assert.assertFalse(driver.findElement(You_must_enter_your_registration_number_in_a_valid_format).isDisplayed());
        } catch (Exception e) {
        }
        Assert.assertEquals(driver.findElement(Make).getText(), Made);
        Assert.assertEquals(driver.findElement(Colour).getText(), Colours);
        driver.navigate().back();
        driver.close();

    }




    public static void screenShotPlease(WebDriver driver, String fileWithPath) throws Exception {
        TakesScreenshot scrShot = ((TakesScreenshot) driver);
        File SrcFile = scrShot.getScreenshotAs(OutputType.FILE);
        File DestFile = new File(fileWithPath);
        FileUtils.copyFile(SrcFile, DestFile);

    }

    public DvlaCucumberStepDefs() throws Exception {
    }

    @AfterClass

void killBrowser(){
        driver.close();
        driver.quit();


    }
}
