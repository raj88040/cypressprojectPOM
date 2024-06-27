describe('demokaPage', () => {
    it('Doubleclick', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick();


    });
});