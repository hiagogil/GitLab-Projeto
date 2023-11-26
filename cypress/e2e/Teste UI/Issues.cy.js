import { faker } from '@faker-js/faker';
const options = { env: { snapshotOnly: true } };
describe('Issues', () => {
  const project = {
    name: faker.datatype.uuid(),
    description: faker.lorem.paragraph(),
  };
  beforeEach(() => {
    cy.Logsession();
    cy.Projeto(project);
  });
  it('Issues criada com sucesso', () => {
    const issue = {
      name: faker.datatype.uuid(),
      description: faker.lorem.paragraph(),
    };
    cy.IssueCreation(issue,project.name)
    cy.get('.breadcrumb-item-text').should('have.text', project.name)
  });
});
