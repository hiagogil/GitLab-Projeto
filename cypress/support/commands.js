Cypress.Commands.add('Login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password')
) => {
  cy.visit('users/sign_in');
  cy.get('#user_login').type(user);
  cy.get('#user_password').type(password, { log: false });
  cy.get('[data-qa-selector=sign_in_button]').click();
})
Cypress.Commands.add('Logsession', (
  username = Cypress.env('user_name'),  
  password = Cypress.env('user_password')) => {
  const login = () => cy.Login(username, password);
  cy.session(username, login)
})
Cypress.Commands.add('Logout', () => {
  cy.get('.header-user-dropdown-toggle').click()
  cy.get('.sign-out-link').click()
});
Cypress.Commands.add('Projeto', project => {
  cy.visit('projects/new')
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

Cypress.Commands.add('IssueCreation', (issue) => {
  cy.get('#js-onboarding-new-project-link > .s16').click();
  cy.contains('New issue').click();
  cy.get('#issue_title').type(issue.name);
  cy.get('#issue_description').type(issue.description);
  cy.contains('Submit issue').click();
});
