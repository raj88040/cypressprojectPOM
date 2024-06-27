describe('Heroku', () => {
    it('Fileupload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('C:/Users/bhims/OneDrive/Desktop/uploadfile.docx');
        cy.get('#file-submit').click();
        cy.contains('File Uploaded!').should('be.visible')

    });
});