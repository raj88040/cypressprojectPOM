import OrangeHRMLogin_PO from "../../support/PageClasses/OrangeHRMLogin_PO"
import OrangeHrmLogout_PO from "../../support/PageClasses/OrangeHrmLogout_PO";
import OrangeHRMLink_PO from "../../support/PageClasses/OrangeHRMLink_PO";

describe('', () => {
    const Login_PO = new OrangeHRMLogin_PO();
    const Logout_PO = new OrangeHrmLogout_PO();
    const Link_PO =  new OrangeHRMLink_PO();

    

    it('login and logout test', () => {
        Login_PO.enterurl();
        Login_PO.Login();
        Link_PO.clickonlink('Admin');
        Link_PO.clickonlink('Leave');
        cy.wait(1000)
        Logout_PO.Logout();



        
    });
});