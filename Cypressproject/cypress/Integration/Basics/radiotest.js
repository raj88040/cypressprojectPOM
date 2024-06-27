describe('rahulshettyacademy', () => {
    it('radiotest', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.attr','class','radioButton');

    });
});