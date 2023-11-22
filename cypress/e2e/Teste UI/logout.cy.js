describe('Logout', () => {
    const env = {
        user_name: "hiago-gil@hotmail.com",
        user_password: "102938gau",
    }

    beforeEach(() => {
        cy.Login(env);
    });

    it('Realizar logout com sucesso', () => {
        
        cy.Logout()
        cy.url().should('be.equal', `${Cypress.config().baseUrl}users/sign_in`)
    });
});
