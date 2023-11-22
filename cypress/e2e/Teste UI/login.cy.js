describe('Login', () => {
  it('Realizar login com sucesso', () => {
    const env = {
      user_name: "hiago-gil@hotmail.com",
      user_password: "102938gau",
    }
    cy.Login(env);
    cy.get('.blank-state-welcome-title').should('be.visible');
  });
});
