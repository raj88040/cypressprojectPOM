describe('rsacademy', () => {
    it('dynemicdropdown', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('ru');

        cy.get('.ui-menu-item').each(($ele)=>{

            if($ele.text()=='Belarus'){

                cy.wrap($ele).click();
            }  
        });

    });

    it.only('dynamicdropdown-anothermethod', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('ab');

        cy.get('.ui-menu-item').contains('Saudi Arabia').click();

    });
});