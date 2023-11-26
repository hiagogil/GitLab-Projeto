describe('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.Login()
    cy.get('.blank-state-welcome-title').should('be.visible');
  });
});
