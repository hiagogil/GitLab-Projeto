Cypress.Commands.add('Login', (env) => {
  cy.visit('users/sign_in');
  cy.get('#user_login').type(env.user_name);
  cy.get('#user_password').type(env.user_password);
  cy.get('[data-qa-selector=sign_in_button]').click();
});

Cypress.Commands.add('Logout', () => {
  cy.get('.header-user-dropdown-toggle').click()
  cy.get('.sign-out-link').click()
});

Cypress.Commands.add('Projeto', project => {
  cy.get('#js-onboarding-new-project-link').click();
  cy.get('.qa-global-new-project-link').click();
  cy.get('#project_name').type(project.name);
  cy.get('#project_description').type(`project-${project.description}`);
  cy.get('#project_initialize_with_readme').check();
  cy.contains('Create project').click();
})

Cypress.Commands.add('getToken', () => {
  return 'xVM8-bBgtzyRskSupkJ5';
});

Cypress.Commands.add('ProjetoApi', (token, project) => {
  cy.request({
    method: 'POST',
    url: 'api/v4/projects/',
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});
