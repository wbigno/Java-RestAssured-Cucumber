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
  "duration": 4062940093,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I will confirm a response is received from our get request, and in the correct format",
  "description": "",
  "id": "having-the-ability-to-get-a-10-day-forecast-for-any-state-and-city;i-will-confirm-a-response-is-received-from-our-get-request,-and-in-the-correct-format",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 3203102,
  "status": "passed"
});
formatter.match({
  "location": "TenDayForecastStepdefs.iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormatFromMyApiCallToTheDayForecastApi()"
});
formatter.result({
  "duration": 109137,
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
  "duration": 378354848,
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
  "duration": 2165817356,
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
  "duration": 697582617,
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
  "duration": 520301,
  "status": "passed"
});
formatter.match({
  "location": "TenDayForecastStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfDayForecastEntitiesAreInTheResponse()"
});
formatter.result({
  "duration": 163354265,
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
  "duration": 1463324091,
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
  "duration": 157732,
  "status": "passed"
});
formatter.match({
  "location": "GeoLocationStepdefs.iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormatFromMyApiCallToTheGeolocationApi()"
});
formatter.result({
  "duration": 67150,
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
  "duration": 1009292410,
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
  "duration": 518755719,
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
  "duration": 1419184331,
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
  "duration": 530650,
  "status": "passed"
});
formatter.match({
  "location": "GeoLocationStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfGeolocationEntitiesAreInTheResponse()"
});
formatter.result({
  "duration": 13329007,
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
  "duration": 1921611791,
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
  "duration": 252887,
  "status": "passed"
});
formatter.match({
  "location": "HourlyStepdefs.iWillConfirmAResponseIsReceivedAndFormattedInAJsonFormat()"
});
formatter.result({
  "duration": 81409,
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
  "duration": 835508793,
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
  "duration": 408644918,
  "status": "passed"
});
formatter.match({
  "location": "HourlyStepdefs.iWillConfirmThatTheMatch()"
});
formatter.result({
  "duration": 83251,
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
  "duration": 882024259,
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
  "duration": 312202053,
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
  "duration": 1014738667,
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
  "duration": 1369561,
  "status": "passed"
});
formatter.match({
  "location": "HourlyStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfEntitiesInTheResponse()"
});
formatter.result({
  "duration": 26122492,
  "status": "passed"
});
formatter.uri("webcamera.feature");
formatter.feature({
  "line": 2,
  "name": "Having the ability to get forecast details on an hourly bases for any state and city",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@webcams"
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
  "name": "Using the api for the webcams \"http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json",
      "offset": 31
    }
  ],
  "location": "WebcamsStepdefs.usingTheApiForTheWebcamsToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 981165451,
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
  "name": "I confirm the status as 200 for the webcam response",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm the webcam response is received and formatted in a json format",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "WebcamsStepdefs.iConfirmTheStatusAsForTheWebcamResponse(int)"
});
formatter.result({
  "duration": 185474,
  "status": "passed"
});
formatter.match({
  "location": "WebcamsStepdefs.iWillConfirmTheWebcamResponseIsReceivedAndFormattedInAJsonFormat()"
});
formatter.result({
  "duration": 122044,
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
  "name": "Using the api for the webcams \"http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json",
      "offset": 31
    }
  ],
  "location": "WebcamsStepdefs.usingTheApiForTheWebcamsToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 706129103,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I will check to see if the response is in the correct schema",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city;i-will-check-to-see-if-the-response-is-in-the-correct-schema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I get the webcams I will compare it to the schema saved for this response",
  "keyword": "When "
});
formatter.match({
  "location": "WebcamsStepdefs.iGetTheWebcamsIWillCompareItToTheSchemaSavedForThisResponse()"
});
formatter.result({
  "duration": 929938642,
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
  "name": "Using the api for the webcams \"http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json\" to get details to test",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.wunderground.com/api/99a8db9a0f3c2e31/webcams/q/IL/Chicago.json",
      "offset": 31
    }
  ],
  "location": "WebcamsStepdefs.usingTheApiForTheWebcamsToGetDetailsToTest(String)"
});
formatter.result({
  "duration": 496150885,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I want to confirm the correct number on entities are in the response",
  "description": "",
  "id": "having-the-ability-to-get-forecast-details-on-an-hourly-bases-for-any-state-and-city;i-want-to-confirm-the-correct-number-on-entities-are-in-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I get the webcam response, I will convert it to a String",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I will convert the string into an array where I can assert the correct number of entities in the webcam response",
  "keyword": "Then "
});
formatter.match({
  "location": "WebcamsStepdefs.iGetTheWebcamResponseIWillConvertItToAString()"
});
formatter.result({
  "duration": 1620839,
  "status": "passed"
});
formatter.match({
  "location": "WebcamsStepdefs.iWillConvertTheStringIntoAnArrayWhereICanAssertTheCorrectNumberOfEntitiesInTheWebcamResponse()"
});
formatter.result({
  "duration": 27914033,
  "status": "passed"
});
});