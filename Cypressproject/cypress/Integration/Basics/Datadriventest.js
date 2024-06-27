describe('Datadriven', () => {
    before(() => {
        
        cy.fixture('example').then((data)=>{

            globalThis.data = data;  //will fatch the data coming from example.json and store it in a variable data.

        })

    });

    it('Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[name='username']").type(data.username);//this will fatch username
        cy.get("input[name='password']").type(data.password);//this will fatch password
        cy.get('.orangehrm-login-button').click();


        
    });
    
});