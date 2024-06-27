/// <reference types="Cypress" />
///<reference types="@cypress/xpath" />
describe('RSPracticePage', () => {
    it('1stTabledatafind', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[2]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($tableele)=>{
            if($tableele.text().includes('Python')){{
                cy.wrap($tableele).next().then((price)=>{
                    cy.log(price.text())
                })
            }}
        })

    });
    it.only('2ndTable', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[4]/td[2]").should('include.text','Receptionist')
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[4]/td").each(($table2ele)=>{
            if($table2ele.text().includes('Receptionist')){{
                cy.wrap($table2ele).next().then((city)=>{
                    cy.log(city.text())
                })
            }}
        })


        
    });
});