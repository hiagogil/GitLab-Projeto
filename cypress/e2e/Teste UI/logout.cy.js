describe('Logout', () => {
    beforeEach(() => {
        cy.Login();
    });
    it('Realizar logout com sucesso', () => {
        cy.Logout()
        cy.url().should('be.equal', `${Cypress.config().baseUrl}/users/sign_in`)
    });
});
