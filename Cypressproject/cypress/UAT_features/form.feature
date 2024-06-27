Feature: simpleform
Scenario: to validate simple form
Given User navigating simple form url
When User enter firstname
And User enter lastname
And User enter email
And User enter contact number
And User enter message click on submit button
Then forn will be submitted