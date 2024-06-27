describe('letskodeitPage', () => {
    beforeEach(() => {
        cy.visit('https://www.letskodeit.com/practice')
    });
  it('Radiobutton', () => {
    cy.get('#hondaradio').click();
        
    });
    it('Checkbox', () => {
        cy.get('input[type="checkbox"]').check(['benz','honda']);
    });
    it('openwindow', () => {
         cy.get('##openwindow').invoke('removeAttr', 'target').click();
        cy.origin('https://www.letskodeit.com/courses',()=>{
            cy.visit('/')
            cy.contains('All Courses').click();
            cy.log(cy.title())
        })

    });
    it('opentab', () => {
        cy.get('#opentab').invoke('removeAttr', 'onclick').click();
        cy.origin('https://www.letskodeit.com/courses',()=>{
            cy.visit('/')
            cy.contains('All Courses').click();
            cy.log(cy.title())
        })
    });
     it('Dropdown', () => {
        cy.get('#carselect').select(2)
        
     });
    it('suggesion', () => {
        cy.get('#autosuggest').type('Awesome')
        
    });
    it('Hide', () => {
        cy.get('#hide-textbox').should('be.visible')
        cy.get('#show-textbox').click();
        cy.get('#hide-textbox').should('not.be.visible')
        
    });
    it('Show', () => {
        cy.get('#show-textbox').click();
        cy.get('#hide-textbox').type('Rajkumar')
        
    });
    it('Allert', () => {
        cy.get('#alertbtn').click();
        cy.on("window:alert",(message)=>{
            expect(message).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })
        cy.get('#confirmbtn').click();
        cy.on("window:alert",(alertmsg)=>{
            expect(alertmsg).to.eq('Hello , Are you sure you want to confirm?')
            //return true;
             return false;
        })
        
    });
    it('Mousehover1', () => {

        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')

    });


    it('Mousehover2', () => {
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Reload').click({force:true}); 
        cy.url().should('not.include','top')
            
    });
    it('Table', () => {
        cy.xpath("//table[@name='cour/ses']/tbody/tr[3]/td[2]").should('include.text','Python Programming Language')
        cy.xpath("//table[@name='courses']/tbody/tr[3]/td").each(($tableele)=>{
            if($tableele.text().includes('Python Programming Language')){{
                cy.wrap($tableele).next().then((price)=>{
                    cy.log(price.text())
                })
            }}
        })
        
    });
    it('iframetest', () => {
        cy.frameLoaded('#courses-iframe')
        cy.wait(2000)
        cy.iframe().contains('BLOG').click();
    });
   
       
});