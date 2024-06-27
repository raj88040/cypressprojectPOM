class OrangeHRMLink_PO{
    clickonlink(link){

        cy.contains(link).click();
    }
}
export default OrangeHRMLink_PO;