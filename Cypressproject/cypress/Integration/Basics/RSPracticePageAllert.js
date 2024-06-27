/// <reference types="Cypress" />
///<reference types="@cypress/xpath" />
describe('RSPracticePage', () => {
    it('Allert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click();
        //verify allert message use here cy.on()
        cy.on("window:alert",(message)=>{
            //Asserting the alert message --'expect' is the function for assertion
            expect(message).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })
        cy.get('#confirmbtn').click();
        cy.on("window:alert",(alertmsg)=>{
            expect(alertmsg).to.eq('Hello , Are you sure you want to confirm?')
            return true;
            // return false;
        })
    });
   
});