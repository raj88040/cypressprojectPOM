import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('User navigating simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})
When('User enter firstname',()=>{
    cy.get('#firstName').type('Raj');

})
And('User enter lastname',()=>{
    cy.get('#lastName').type('Kumar');

})
And('User enter email',()=>{
    cy.get('#email').type('rajkumar12@gmail.com');

})
And('User enter contact number',()=>{
    cy.get('#number').type('9876543210');

})
And('User enter message click on submit button',()=>{
    cy.get('textarea[rows="2"]').type('Awesome')
    cy.get("input[value='submit']").click();

})
Then('forn will be submitted',()=>{
    cy.on("window:alert",(message)=>{
        expect(message).to.eq('Thank You for reaching out to us, Raj Kumar')
        return true;
    })


})