/// <reference types="Cypress" />
describe('', () => {
    it('login', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        
    });
    it('login using xpath', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.xpath("//input[@name='username']").type('tomsmith');
        cy.xpath("//input[@name='password']").type('SuperSecretPassword!');
        cy.xpath("//button[@type='submit']").click();

    });
    it.only('using contains', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.xpath("//input[@name='username']").type('tomsmith');
        cy.xpath("//input[@name='password']").type('SuperSecretPassword!');
        cy.xpath("//button[@type='submit']").click();
        cy.contains('Login').click();
    });
});