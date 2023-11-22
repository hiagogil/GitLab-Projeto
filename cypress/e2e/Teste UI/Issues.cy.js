import { faker } from '@faker-js/faker';

describe('Issues', () => {

  beforeEach(() => {
    const env = {
      user_name: "gil",
      user_password: "102938gau",
    };

    const project = {
      name: faker.datatype.uuid(),
      description: faker.lorem.paragraph()
    };

    cy.Login(env);
    cy.Projeto(project);
  });

  it.only('Issues criada com sucesso', () => {

    const issue = {
      name: faker.datatype.uuid(),
      description: faker.lorem.paragraph()
      
    }

    const project = {
      name: faker.datatype.uuid(),
      description: faker.lorem.paragraph()
    };

    const env = {
      user_name: "gil",
      user_password: "102938gau",
    };
    

    cy.get('#js-onboarding-new-project-link > .s16').click()
    cy.contains('New issue').click()
    cy.get('#issue_title').type(issue.name)
    cy.get('#issue_description').type(issue.description)
    cy.contains('Submit issue').click()
    cy.url().should('be.visible', project.name)
   
  });
})
