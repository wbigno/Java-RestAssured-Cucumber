package TestRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions (
        features = {"src/test/java/FeatureFiles/"},
        glue = {"StepFiles"},
        monochrome = true,
        tags="@webcams",
        plugin = {"pretty", "html:target/cucumber",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
        }

)

public class WebcamsRunner {
}
