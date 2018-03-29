package cucumber.test.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utilities.ChooseBrowser;
import utilities.DvlaPageObjects;
import utilities.FindFilesInFolder;
import java.io.File;
import java.util.List;
import static utilities.FindFilesInFolder.findFilesInfo;
import static utilities.FindFilesInFolder.returnCellData;
import static utilities.FindFilesInFolder.setCellData;


public class DvlaCucumberStepDefs extends DvlaPageObjects {

    ChooseBrowser browser = new ChooseBrowser();
    WebDriver driver = browser.getChromeDriver();
    static File folder = new File( System.getProperty( "user.dir" ) + "/src/main/resources/filesinfolder/" );


    @Given("^As end user i want to open browser and enter home url$")
    public void as_end_user_i_want_to_open_browser_and_enter_home_url() throws Throwable {
        driver.get( home_url );
        //throw new PendingException();
    }

    @And("^click on start  button$")
    public void click_on_start_button() throws Throwable {
        driver.findElement( startnow_button ).click();
        //throw new PendingException();
    }

    @Then("^read registration number from inputfolder and enter$")
    public void read_registration_number_from_inputfolder_and_enter() throws Throwable {
        List usefulFilesData = returnCellData(findFilesInfo(folder));
        int j =0 ; int k=0; int rowClont =1; String resultToExcel;
        for(int i=0;i<=usefulFilesData.size();rowClont++){
        resultToExcel ="PASS";
        setCellData(usefulFilesData.get( i ).toString(),k,rowClont,resultToExcel);
        driver.findElement( enter_venicle_number ).sendKeys( usefulFilesData.get( i ).toString() );
        driver.findElement( continue_button ).submit();i = i+1;
        try { Assert.assertFalse( driver.findElement( You_must_enter_your_registration_number_in_a_valid_format ).isDisplayed() ); } catch (Exception e) {   }
        Assert.assertEquals(driver.findElement(Make).getText() ,usefulFilesData.get( i ).toString()); i = i+1;k=k+1;
        if(driver.findElement(Colour).getText().equals(usefulFilesData.get( i ).toString()))
          resultToExcel="PASS";
        else resultToExcel="FAIL" ;


        setCellData(usefulFilesData.get( i ).toString(),k,rowClont,resultToExcel);
        Assert.assertEquals(driver.findElement(Colour).getText(),usefulFilesData.get( i ).toString()); i = i+1; k=k+1;if(driver.findElement(Colour).getText().equals(usefulFilesData.get( i ).toString()))  resultToExcel="PASS";  resultToExcel ="PASS"; setCellData(usefulFilesData.get( i ).toString(),k,rowClont,resultToExcel);k=0;j= j+1;
        driver.navigate().back();
        }
        driver.close();
    }


    public DvlaCucumberStepDefs() throws Exception {
    }

}
