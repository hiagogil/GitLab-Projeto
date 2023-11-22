import {faker} from '@faker-js/faker'
describe('Projeto', () => {
    beforeEach(() => {
      const env = {
        user_name: "gil",
        user_password: "102938gau",
      };
      cy.Login(env);
    });

    const project = {
        name: faker.datatype.uuid(),
        description: faker.lorem.paragraph()
      }

    it('Projeto criado com sucesso', () => {

        const env = {
            user_name: "gil",
            user_password: "102938gau",
          };
    
      cy.Projeto(project)
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}${env.user_name}/${project.name}`);
    });
  });
