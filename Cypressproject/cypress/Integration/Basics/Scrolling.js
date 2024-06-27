describe('Scrolling', () => {
    it('Test1', () => {
        cy.visit('https://www.google.com/');
        cy.get("[title='Search']").type('Masai{enter}')  //{enter} will press enter on keyboard
        cy.scrollTo(0,2000); //scroll to a particular value
        cy.wait(1000)
        cy.scrollTo(0,-2000)

        cy.contains('Maasai people').scrollIntoView().click();

    });
});