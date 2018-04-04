package StepFiles;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.testng.Assert;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static io.restassured.path.json.JsonPath.from;

public class TenDayForecastStepdefs {

    Response response;
    String jsonAsString;

    @Given("^Using the api for the '10day' forecast \"([^\"]*)\" to get details to test$")
    public void usingTheApiForTheDayForecastToGetDetailsToTest(String arg1) {
        response = given().get(arg1);
    }

    @Then("^I will confirm a response is received and formatted in a json format from my api call to the '10day' forecast api$")
    public void iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormatFromMyApiCallToTheDayForecastApi() {
        String actual = response.getContentType();
        Assert.assertEquals(actual, "application/json; charset=UTF-8");
    }

    @When("^I get the '10day' forecast I will compare it to the schema saved for this response$")
    public void iGetTheDayForecastIWillCompareItToTheSchemaSavedForThisResponse() {
        given().get("http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json").then().
                assertThat().body(matchesJsonSchemaInClasspath("10dayForecast.json"));
    }

    @When("^I confirm the status as (\\d+) for the '10day' forecast$")
    public void iConfirmTheStatusAsForTheDayForecast(int arg0) {
        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, arg0);
    }

    @When("^I get the '10day' forecast response, I will convert it to a String$")
    public void iGetTheDayForecastResponseIWillConvertItToAString() {
        jsonAsString = response.asString();
        Assert.assertNotNull(jsonAsString);
    }

    @Then("^I will convert the string into an array where I can assert the correct number of '10day' forecast entities are in the response$")
    public void iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfDayForecastEntitiesAreInTheResponse() {
        HashMap<Object,Map<String,?>> jsonAsArrayList = from(jsonAsString).get("");
        Assert.assertEquals(jsonAsArrayList.size(), 2);
    }
}
