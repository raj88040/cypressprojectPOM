describe('Datepicker', () => {
    it('login', () => {
        cy.visit('https://jqueryui.com/datepicker/')
        // cy.frameLoaded('.demo-frame')
        cy.iframe('.demo-frame').find('input#datepicker').type('02/02/2024{enter}')

        // cy.get('input#datepicker').type('02/02/2025');

    });
});