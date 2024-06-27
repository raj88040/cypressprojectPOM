describe('Guru99Page', () => {
    it('Doubleclick', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('button[ondblclick="myFunction()"]').dblclick();
        cy.contains('right click me').rightclick()


    });
});