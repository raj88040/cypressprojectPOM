describe('BookstoScrape', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/')
    });


    it('Verify Page Title', () => {
        cy.visit('https://books.toscrape.com/')
    });
    it('Non fiction link click Functionality', () => {
        //cy.visit('https://books.toscrape.com/')
        cy.get(':nth-child(12) > a').click();
        
    });
    it('Add to Basket', () => {
        
       // cy.visit('https://books.toscrape.com/')
        cy.get(':nth-child(15) > a').click();
        cy.get(':nth-child(1) > .product_pod > .product_price > form > .btn').click();

    });
});