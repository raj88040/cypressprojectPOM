describe('RSAcademypageHower', () => {
    it('HowerTest', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true}); //workaround if click is not wsorking properly
        cy.url().should('include','top')
        
    });

    it('HowerTest2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Reload').click({force:true}); 
        cy.url().should('not.include','top')
        
    });
    it.only('DragandDropTest', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')

        // Trigger is used to do mouse actions
        // {which: 1} is used to specify left button of mouse
        // {which: 2} is used to specify centre button of mouse
        // {which: 3} is used to specify right button of mouse
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#droppable').trigger('mousemove',{force:true}).trigger('mouseup',{force:true})
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#dropzone2').trigger('mousemove',{force:true}).trigger('mouseup',{force:true})
        
    });

    
});