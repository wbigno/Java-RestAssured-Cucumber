@geo
Feature: Having the ability to get geo location details on any state and city

  Background:
    Given Using the api for the geolocation forecast "http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json" to get details to test

  Scenario: I will confirm a response is received from our get request, and in the correct format
    When I confirm the status as 200 for the geolocation
    Then I will confirm a response is received and formatted in a json format from my api call to the geolocation api

  Scenario: I will check to see if the response is in the correct schema
    When I get the geolocation I will compare it to the schema saved for this response

  Scenario: I want to confirm the correct number on entities are in the response
    When I get the geolocation response, I will convert it to a String
    Then I will convert the string into an array where I can assert the correct number of geolocation entities are in the response
