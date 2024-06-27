describe('rs academy', () => {
    it('dropdown--by value', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('').should('have.value','');
        
    });

    it.only('Dropdown2--by text', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('Select').should('have.value','');
    });
    it('dropdown--by index', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(500)
        cy.get('#dropdown-class-example').select('3');
        cy.wait(500)
        cy.get('#dropdown-class-example').select('2');
        cy.wait(500)
        cy.get('#dropdown-class-example').select('1');
        cy.wait(500)
        cy.get('#dropdown-class-example').select('0');
        
    });
});