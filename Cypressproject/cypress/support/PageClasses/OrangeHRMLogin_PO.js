class OrangeHRMLogin_PO{
    enterurl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    Login() {

        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
        

    }

    
}
export default OrangeHRMLogin_PO;