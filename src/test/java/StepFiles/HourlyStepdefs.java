package StepFiles;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import static io.restassured.path.json.JsonPath.from;
import org.testng.Assert;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class HourlyStepdefs {

    Scenario scenario;
    Response response;
    List<Integer> windchill = null;
    List<Integer> feelslike = null;
    String jsonAsString;

    @Given("^Using the api for the hourly forecast \"([^\"]*)\" to get details to test$")
    public void UsingTheApiForTheHourlyForecastToGetDetailsToTest(String arg0) {
        response = given().get(arg0);

    }

    @When("^I confirm the status as (\\d+)$")
    public void iConfirmTheStatusAs(int arg0) {
        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, arg0);
    }

    @Then("^I will confirm a response is received and formatted in a json format$")
    public void iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormat() {
        String actual = response.getContentType();
        Assert.assertEquals(actual, "application/json; charset=UTF-8");
    }

    @When("^I get the windchill and the feelslike readings to compare them$")
    public void iGetTheWindchillAndTheFeelslikeReadingsToCompareThem() {
        windchill = response.jsonPath().get("hourly_forecast.windchill.english");
        feelslike = response.jsonPath().get("hourly_forecast.feelslike.english");

    }

    @Then("^I will confirm that the match$")
    public void iWillConfirmThatTheMatch() {
        if (windchill.size() == feelslike.size()) {
                int list = windchill.size();
            for (int i = 0; i < list; i++) {
                Assert.assertEquals(windchill.get(i), feelslike.get(i));
            }

        }else { scenario.write("Unable to compare lists as they did match up in size equally");

        }
    }

    @When("^I get the hourly forecast I will compare it to the schema saved for this response$")
    public void iGetTheHourlyForecastIWillCompareItToTheSchemaSavedForThisResponse() {
        given().get("http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json").then().
        assertThat().body(matchesJsonSchemaInClasspath("hourly.json"));
    }

    @When("^I get the response, I will convert it to a String$")
    public void iGetTheResponseIWillConvertItToAString() {
        jsonAsString = response.asString();
        Assert.assertNotNull(jsonAsString);
    }

    @Then("^I will convert the string into an array where I can assert the correct number of entities in the response$")
    public void iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfEntitiesInTheResponse() {
        HashMap<Object,Map<String,?>> jsonAsArrayList = from(jsonAsString).get("");
        Assert.assertEquals(jsonAsArrayList.size(), 2);
    }
}
