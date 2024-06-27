describe('', () => {
    it('donate', () => {
        cy.visit('https://www.unicef.org/')
        cy.get("a[data-label='Donate']").click();
        cy.wait(2000)
        cy.get('.donate-n-search > .region > .btn-donate').click();
        cy.get('#netbanking').check();
        cy.get("button[type='submit']").click();
        cy.get('#firstname').type('RAj')
        cy.get('#lastname').type('Kumar')
        cy.get('#email').type('rajkumar1@gmail.com')
        cy.get('#phonenumber').type('9876543210')
        cy.get("button[type='submit']").click();
    });
});