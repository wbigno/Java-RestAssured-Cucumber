package StepFiles;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import static io.restassured.path.json.JsonPath.from;
import org.testng.Assert;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;


public class GeoLocationStepdefs {

    Response response;
    String jsonAsString;

    @Given("^Using the api for the geolocation forecast \"([^\"]*)\" to get details to test$")
    public void usingTheApiForTheGeolocationForecastToGetDetailsToTest(String arg0) {
        response = given().get(arg0);
    }

    @When("^I confirm the status as (\\d+) for the geolocation$")
    public void iConfirmTheStatusAsForTheGeolocation(int arg0) {
        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, arg0);
    }

    @Then("^I will confirm a response is received and formatted in a json format from my api call to the geolocation api$")
    public void iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormatFromMyApiCallToTheGeolocationApi() {
        String actual = response.getContentType();
        Assert.assertEquals(actual, "application/json; charset=UTF-8");
    }

    @When("^I get the geolocation I will compare it to the schema saved for this response$")
    public void iGetTheGeolocationIWillCompareItToTheSchemaSavedForThisResponse() {
        given().get("http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json").then().
                assertThat().body(matchesJsonSchemaInClasspath("geolocation.json"));
    }

    @When("^I get the geolocation response, I will convert it to a String$")
    public void iGetTheGeolocationResponseIWillConvertItToAString()  {
        jsonAsString = response.asString();
        Assert.assertNotNull(jsonAsString);
    }

    @Then("^I will convert the string into an array where I can assert the correct number of geolocation entities are in the response$")
    public void iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfGeolocationEntitiesAreInTheResponse()  {
        HashMap<Object,Map<String,?>> jsonAsArrayList = from(jsonAsString).get("");
        Assert.assertEquals(jsonAsArrayList.size(), 2);
    }
}
