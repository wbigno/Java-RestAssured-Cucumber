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

public class WebcamsStepdefs {

    Response response;
    String jsonAsString;

    @Given("^Using the api for the webcams \"([^\"]*)\" to get details to test$")
    public void usingTheApiForTheWebcamsToGetDetailsToTest(String arg0) {
        response = given().get(arg0);
    }

    @When("^I confirm the status as (\\d+) for the webcam response$")
    public void iConfirmTheStatusAsForTheWebcamResponse(int arg0) {
        int statusCode = response.getStatusCode();
        Assert.assertEquals(statusCode, arg0);
    }

    @Then("^I will confirm the webcam response is received and formatted in a json format$")
    public void iWillConfirmTheWebcamResponseIsReceivedAndFormattedInAJsonFormat() {
        String actual = response.getContentType();
        Assert.assertEquals(actual, "application/json; charset=UTF-8");
    }

    @When("^I get the webcams I will compare it to the schema saved for this response$")
    public void iGetTheWebcamsIWillCompareItToTheSchemaSavedForThisResponse() {
        given().get("http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json").then().
                assertThat().body(matchesJsonSchemaInClasspath("webcams.json"));
    }

    @When("^I get the webcam response, I will convert it to a String$")
    public void iGetTheWebcamResponseIWillConvertItToAString() {
        jsonAsString = response.asString();
        Assert.assertNotNull(jsonAsString);
    }

    @Then("^I will convert the string into an array where I can assert the correct number of entities in the webcam response$")
    public void iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfEntitiesInTheWebcamResponse() {
        HashMap<Object,Map<String,?>> jsonAsArrayList = from(jsonAsString).get("");
        Assert.assertEquals(jsonAsArrayList.size(), 2);
    }
}
