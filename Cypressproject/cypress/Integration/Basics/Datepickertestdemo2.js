describe('Datepicker', () => {
    it('datepickertest', () => {
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.iframe('').find("input[id='datepicker2']").type('02/02/2024{enter}')
        // cy.get("input[id='datepicker2']").type('02/02/2025')
        // cy.frameLoaded('.demo-frame')
        // cy.iframe('.demo-frame').find('input#datepicker').type('02/02/2024{enter}')

        // cy.get('input#datepicker').type('02/02/2025');

    });
});