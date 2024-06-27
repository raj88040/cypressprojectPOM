describe('Datadriven', () => {
    before(() => {
        
        cy.fixture('example').then((data)=>{

            globalThis.data = data;  

        })

    });

    it('Test', () => {
        cy.visit('https://v1.training-support.net/selenium/simple-form')

        cy.get('#firstName').type(data.firstname);
        cy.get('#lastName').type(data.lastname);
        cy.get('#email').type(data.email);
        cy.get('#number').type(data.contect);
        cy.get("input[value='submit']").click();


        
    });
    
});