describe('OrangeHRM', () => {
    it('dynamicdropdown', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();


        cy.get("input[placeholder='Type for hints...']").type('ra');
        

        cy.get('.oxd-autocomplete-optiomspan').each(($ele)=>{

            if($ele.text()=='Rahul  Das'){

                cy.wrap($ele).click();
            }  
        });
        
    });
});