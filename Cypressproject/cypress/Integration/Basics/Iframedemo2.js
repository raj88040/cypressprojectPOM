describe('iframe', () => {
    it('iframetest', () => {
        cy.visit('https://v1.training-support.net/selenium/iframes')
        
        cy.frameLoaded('iframe[src="/selenium/frame1"]')
        cy.wait(2000)
        
        cy.iframe('iframe[src="/selenium/frame1"]').find('button').first().click();

    });
    
});