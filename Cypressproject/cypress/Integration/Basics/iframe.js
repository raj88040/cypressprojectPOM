describe('RSAiframe', () => {
    it('iframetest', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // frameloaded is used to handle the iframe and it load the iframe
        cy.frameLoaded('#courses-iframe')
        cy.wait(2000)
        // work with iframe button click or anyother use cy.iframe()
        cy.iframe().contains('Blog').click();

    });
});