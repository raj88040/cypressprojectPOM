describe('AutomationStore', () => {
    it('Contectus', () => {
        cy.visit('https://automationteststore.com/')
       
    
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        //url assertion
        cy.url().should('include','rt=content/contact')

        cy.get('#ContactUsFrm_first_name').type('Rajkumar').then(($firstname_ele)=>{
            expect($firstname_ele).to.have.value('Rajkumar')
        })
            //.type('Rajkumar');


        cy.get('#ContactUsFrm_email').type('raj123@gmail.com').then(($email_ele)=>{
            expect($email_ele).to.have.value('raj123@gmail.com')
        })


        cy.get('#ContactUsFrm_enquiry').type('This web site is aweasome!').then(($query_ele)=>{
            expect($query_ele).to.have.value('This web site is aweasome!')
        })


        cy.get("[title=Submit]").then(($submit_ele)=>{

            expect($submit_ele).to.have.attr('title','Submit')
            cy.wrap($submit_ele).click();
        })//.click();
         cy.go('back')

         cy.go('forward')

     
    });
});