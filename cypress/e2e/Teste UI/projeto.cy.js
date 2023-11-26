import { faker } from '@faker-js/faker';

const options = { env: { snapshotOnly: true } };

describe('Projeto', options, () => {
  beforeEach(() => {
    cy.Logsession();
  });

  it('Projeto criado com sucesso', () => {
    const project = {
      name: faker.datatype.uuid(),
      description: faker.lorem.paragraph(),
    };

    cy.wait(1000); 
    cy.Projeto(project);

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`);
  });
});