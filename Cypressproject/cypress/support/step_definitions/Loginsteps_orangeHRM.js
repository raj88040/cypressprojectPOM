import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('User navigating orangeHRM url',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
When('User enter username {word}',(username)=>{
    cy.get("input[name='username']").type(username);

})
And('User enter password {word}',(pass)=>{
    cy.get("input[name='password']").type(pass);

})
And('User click on login button',()=>{
    cy.get("button[type='submit']").click();

})
Then('Either user will lugged in or Error message should be displayed',()=>{
    
    cy.log('performing scenario outline')

    
})
