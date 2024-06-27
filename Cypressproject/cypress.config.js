
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
// implement node event listeners here
on('file:preprocessor', cucumber())
return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,

 reporterOptions: {

 charts: true,

 reportPageTitle: 'Cypress Inline Reporter',

 embeddedScreenshots: true,

 inlineAssets: true, //Adds the asserts inline

 },
  e2e: {
   setupNodeEvents,
   specPattern: 'cypress/Integration/PageTests/*.js',  //specifying path what i want to execute to cypress
  },
});
