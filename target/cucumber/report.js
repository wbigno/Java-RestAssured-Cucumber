$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("10dayForecast.feature");
formatter.feature({
  "line": 2,
  "name": "Having the ability to get a 10 day forecast for any state and city",
  "description": "",
  "id": "having-the-ability-to-get-a-10-day-forecast-for-any-state-and-city",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the \u002710day\u0027 forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json",
      "offset": 40
    }
  ],
  "location": "TenDayForecastStepdefs.usingTheApiForTheDayForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 2412226364,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I will confirm a response is received from our get request, and in the correct format",
  "description": "",
  "id": "having-the-ability-to-get-a-10-day-forecast-for-any-state-and-city;i-will-confirm-a-response-is-received-from-our-get-request,-and-in-the-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I confirm the status as 200 for the \u002710day\u0027 forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm a response is received and formatted in a json format from my api call to the \u002710day\u0027 forecast api",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "TenDayForecastStepdefs.iConfirmTheStatusAsForTheDayForecast(int)"
});
formatter.result({
  "duration": 3109908,
  "status": "passed"
});
formatter.match({
  "location": "TenDayForecastStepdefs.iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormatFromMyApiCallToTheDayForecastApi()"
});
formatter.result({
  "duration": 100265,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the \u002710day\u0027 forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json",
      "offset": 40
    }
  ],
  "location": "TenDayForecastStepdefs.usingTheApiForTheDayForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 310711277,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I will check to see if the response is in the correct schema",
  "description": "",
  "id": "having-the-ability-to-get-a-10-day-forecast-for-any-state-and-city;i-will-check-to-see-if-the-response-is-in-the-correct-schema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I get the \u002710day\u0027 forecast I will compare it to the schema saved for this response",
  "keyword": "When "
});
formatter.match({
  "location": "TenDayForecastStepdefs.iGetTheDayForecastIWillCompareItToTheSchemaSavedForThisResponse()"
});
formatter.result({
  "duration": 1177759394,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the \u002710day\u0027 forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/IL/Chicago.json",
      "offset": 40
    }
  ],
  "location": "TenDayForecastStepdefs.usingTheApiForTheDayForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 440872010,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I want to confirm the correct number on entities are in the response",
  "description": "",
  "id": "having-the-ability-to-get-a-10-day-forecast-for-any-state-and-city;i-want-to-confirm-the-correct-number-on-entities-are-in-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I get the \u002710day\u0027 forecast response, I will convert it to a String",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I will convert the string into an array where I can assert the correct number of \u002710day\u0027 forecast entities are in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "TenDayForecastStepdefs.iGetTheDayForecastResponseIWillConvertItToAString()"
});
formatter.result({
  "duration": 580467,
  "status": "passed"
});
formatter.match({
  "location": "TenDayForecastStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfDayForecastEntitiesAreInTheResponse()"
});
formatter.result({
  "duration": 361462226,
  "status": "passed"
});
formatter.uri("geolookup.feature");
formatter.feature({
  "line": 2,
  "name": "Having the ability to get geo location details on any state and city",
  "description": "",
  "id": "having-the-ability-to-get-geo-location-details-on-any-state-and-city",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@geo"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the geolocation forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json",
      "offset": 44
    }
  ],
  "location": "GeoLocationStepdefs.usingTheApiForTheGeolocationForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 546495371,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I will confirm a response is received from our get request, and in the correct format",
  "description": "",
  "id": "having-the-ability-to-get-geo-location-details-on-any-state-and-city;i-will-confirm-a-response-is-received-from-our-get-request,-and-in-the-correct-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I confirm the status as 200 for the geolocation",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm a response is received and formatted in a json format from my api call to the geolocation api",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "GeoLocationStepdefs.iConfirmTheStatusAsForTheGeolocation(int)"
});
formatter.result({
  "duration": 968288,
  "status": "passed"
});
formatter.match({
  "location": "GeoLocationStepdefs.iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormatFromMyApiCallToTheGeolocationApi()"
});
formatter.result({
  "duration": 77211,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the geolocation forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json",
      "offset": 44
    }
  ],
  "location": "GeoLocationStepdefs.usingTheApiForTheGeolocationForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 684114014,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I will check to see if the response is in the correct schema",
  "description": "",
  "id": "having-the-ability-to-get-geo-location-details-on-any-state-and-city;i-will-check-to-see-if-the-response-is-in-the-correct-schema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I get the geolocation I will compare it to the schema saved for this response",
  "keyword": "When "
});
formatter.match({
  "location": "GeoLocationStepdefs.iGetTheGeolocationIWillCompareItToTheSchemaSavedForThisResponse()"
});
formatter.result({
  "duration": 723936113,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the geolocation forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/geolookup/q/IL/Chicago.json",
      "offset": 44
    }
  ],
  "location": "GeoLocationStepdefs.usingTheApiForTheGeolocationForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 599149766,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I want to confirm the correct number on entities are in the response",
  "description": "",
  "id": "having-the-ability-to-get-geo-location-details-on-any-state-and-city;i-want-to-confirm-the-correct-number-on-entities-are-in-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I get the geolocation response, I will convert it to a String",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I will convert the string into an array where I can assert the correct number of geolocation entities are in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "GeoLocationStepdefs.iGetTheGeolocationResponseIWillConvertItToAString()"
});
formatter.result({
  "duration": 475242,
  "status": "passed"
});
formatter.match({
  "location": "GeoLocationStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfGeolocationEntitiesAreInTheResponse()"
});
formatter.result({
  "duration": 18488999,
  "status": "passed"
});
formatter.uri("hourly.feature");
formatter.feature({
  "line": 2,
  "name": "Having the ability to get forecast details on an hourly bases for any state and city",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@hourly"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the hourly forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json",
      "offset": 39
    }
  ],
  "location": "HourlyStepdefs.UsingTheApiForTheHourlyForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 691842366,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I will confirm a response is received from our get request, and in the correct format",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city;i-will-confirm-a-response-is-received-from-our-get-request,-and-in-the-correct-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I confirm the status as 200",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm a response is received and formatted in a json format",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "HourlyStepdefs.iConfirmTheStatusAs(int)"
});
formatter.result({
  "duration": 171228,
  "status": "passed"
});
formatter.match({
  "location": "HourlyStepdefs.iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormat()"
});
formatter.result({
  "duration": 59393,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the hourly forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json",
      "offset": 39
    }
  ],
  "location": "HourlyStepdefs.UsingTheApiForTheHourlyForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 497111236,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I will confirm the windchill and feelslike readings match in the response",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city;i-will-confirm-the-windchill-and-feelslike-readings-match-in-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I get the windchill and the feelslike readings to compare them",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I will confirm that the match",
  "keyword": "Then "
});
formatter.match({
  "location": "HourlyStepdefs.iGetTheWindchillAndTheFeelslikeReadingsToCompareThem()"
});
formatter.result({
  "duration": 445040633,
  "status": "passed"
});
formatter.match({
  "location": "HourlyStepdefs.iWillConfirmThatTheMatch()"
});
formatter.result({
  "duration": 118492,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the hourly forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json",
      "offset": 39
    }
  ],
  "location": "HourlyStepdefs.UsingTheApiForTheHourlyForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 780610275,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I will check to see if the response is in the correct schema",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city;i-will-check-to-see-if-the-response-is-in-the-correct-schema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I get the hourly forecast I will compare it to the schema saved for this response",
  "keyword": "When "
});
formatter.match({
  "location": "HourlyStepdefs.iGetTheHourlyForecastIWillCompareItToTheSchemaSavedForThisResponse()"
});
formatter.result({
  "duration": 713438337,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Using the api for the hourly forecast \"http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/IL/Chicago.json",
      "offset": 39
    }
  ],
  "location": "HourlyStepdefs.UsingTheApiForTheHourlyForecastToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 602470060,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I want to confirm the correct number on entities are in the response",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city;i-want-to-confirm-the-correct-number-on-entities-are-in-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I get the response, I will convert it to a String",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I will convert the string into an array where I can assert the correct number of entities in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "HourlyStepdefs.iGetTheResponseIWillConvertItToAString()"
});
formatter.result({
  "duration": 680977,
  "status": "passed"
});
formatter.match({
  "location": "HourlyStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfEntitiesInTheResponse()"
});
formatter.result({
  "duration": 44735692,
  "status": "passed"
});
});