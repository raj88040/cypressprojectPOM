Feature: Login
Scenario Outline: Login OrangeHRM
Given User navigating orangeHRM url
When User enter username <username>
And User enter password <pass>
And User click on login button
Then Either user will lugged in or Error message should be displayed

Examples:
    | username | pass     |
    | admin12  | Adm123   |
    | user12   | Admin123 |
    | Admin    | admin123 |