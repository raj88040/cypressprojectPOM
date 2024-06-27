describe('OrangeHRM', () => {
    it.only('LoginorangeHRM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").then(($password_ele)=>{

            expect($password_ele).to.have.attr('placeholder','Password')
            cy.wrap($password_ele).type('admin123')
        })
        cy.get("button[type='submit']").then(($Login_ele)=>{
            expect($Login_ele).to.have.text(' Login ');
            cy.wrap($Login_ele).click();

        })



        cy.get('.oxd-userdropdown-tab').click();

        //i want to iterate it in a loop
        //each function
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($ele)=>{

            if($ele.text().includes('Logout')){

                cy.wrap($ele).click(); //cy.wrwp we are using because directly we cannot click on $ele
            }  
        });
        // cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    });

    it('for recurment', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();

        cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').each(($ele)=>{

            if($ele.text()=='Recruitment'){

                cy.wrap($ele).click();
            }  
        });

    });
});