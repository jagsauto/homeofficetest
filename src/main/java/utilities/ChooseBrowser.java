package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class ChooseBrowser {


    /**
     * Author: Jagadeesh vendi
     * Date : 30/March/2018
     * This class will decide which chromdriver need to be returned based on operating system
     * all webdrivers are being maintained part of project under
     * src/test/resources/chromewebdrivers/ folder
     *
     *
     */

    public WebDriver getChromeDriver() throws Exception {
        if ( System.getProperty("os.name").toLowerCase().contains("mac")) {
            System.setProperty("webdriver.chrome.driver", "src/test/resources/chromewebdrivers/MacChromedriver");
        }

        else if ( System.getProperty("os.name").toLowerCase().contains("linux")) {
            System.setProperty("webdriver.chrome.driver","src/test/resources/chromewebdrivers/linuxchromedriver");
        }

        else { System.setProperty("webdriver.chrome.driver",  "src/test/resources/chromewebdrivers/Chromedriver.exe"); }

        /**
         *      To run in Firefox then replace
         *       WebDriver driver = new ChromeDriver();
         *       With
         *       WebDriver driver = new FirefoxDriver();
         *
         */

        WebDriver driver = new ChromeDriver();


        return driver;
    }
}
