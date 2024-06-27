describe('RSAcademypagenewtabnewwindow', () => {
    it('NewTab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click();
        
        //after we remove targrt and click on the link
        //origin() is used to work with the new tab
        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.visit('/')
            cy.contains('Access all our Courses').click();
            cy.log(cy.title()) //this will print the title of page
        })

        //cy.go("back")

    });
    it('newWindow', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#openwindow').invoke('removeAttr', 'onclick').click();
        
        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.visit('/')
            cy.contains('Access all our Courses').click();
            cy.log(cy.title())
        })

        
    });
    it.only('openwindowtopasteurlinsamepage', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opetab').then(($linkele)=>{
           const href1 = $linkele.attr('href')  //this $linkele('href') will fatch the href attribute
           cy.visit(href1)

           cy.origin(href1,()=>{
            cy.visit('/')
           
           cy.contains('Access all our Courses').click();
           cy.log(cy.title())
          })
        })
        
    });
});