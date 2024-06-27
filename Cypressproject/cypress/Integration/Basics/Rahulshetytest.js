describe('Rahul sheety Practice Page', () => {
    //
    before(() => {
        cy.log('Log message used in before hook')
    });
    //
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    it('validate url test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //To assert URL
        cy.url().should('include','AutomationPractice/')
        //To Asserting title of web page
        cy.title().should('equal','Practice Page')
        
        cy.get('input#autocomplete').type('Cypress session')
        //Asserting that a particular webelement is visible, chained with one more assertion
        //asserting whether it is having an attribute called id and also asserting the id value
        cy.get('input#autocomplete').should('be.visible').and('have.attr','id','autocomplete')

        //home
        // cy.get('a > .btn')
        cy.get('a > .btn').should('be.visible').and('have.attr','class','btn btn-primary').and('contain','Home')
        //Practice
        // cy.get('.jumbotron > div > :nth-child(2)')
        cy.get('.jumbotron > div > :nth-child(2)').should('be.visible').and('have.attr','class','btn btn-primary').and('contain','Practice')
        //Login
        cy.xpath("//button[@class='btn btn-primary'][2]").should('be.visible').and('have.attr','class','btn btn-primary').and('have.text','Login')
        //signup
        cy.xpath("//button[@class='btn btn-primary'][3]").should('be.visible').and('have.attr','class','btn btn-primary').and('have.text','Signup')
        
        
        


    });
    it('assert text field value', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input#autocomplete').type('India').should('have.value','India')

        
    });
    it('checkbox test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cheking chekbox 1 and asserting to be cheked
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //cheking chekbox 1 and asserting to be uncheked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        
        cy.get("input[type='checkbox']").check();



    });
    it('Multiple check test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[type='checkbox']").check('option2');
        
    });
//this will run after each test case
afterEach(() => {
    cy.log('Log message used after each')
});
//this will run after all the test cases
after(() => {
    cy.log('Log for After')
});

});