@hourly
Feature: Having the ability to get forecast details on an hourly bases for any state and city

  Background:
    Given Using the api for the hourly forecast "http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json" to get details to test

  Scenario: I will confirm a response is received from our get request, and in the correct format
    When I confirm the status as 200
    Then I will confirm a response is received and formatted in a json format

  Scenario: I will confirm the windchill and feelslike readings match in the response
    When I get the windchill and the feelslike readings to compare them
    Then I will confirm that the match

  Scenario: I will check to see if the response is in the correct schema
    When I get the hourly forecast I will compare it to the schema saved for this response

  Scenario: I want to confirm the correct number on entities are in the response
    When I get the response, I will convert it to a String
    Then I will convert the string into an array where I can assert the correct number of entities in the response


