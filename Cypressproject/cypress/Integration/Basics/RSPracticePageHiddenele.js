describe('RSPracticePageHidden', () => {
    it('Hideanele', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')


    });
    it('Show', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').type('Rajkumar')
        
    });
});