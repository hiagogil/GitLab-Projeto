import {faker} from '@faker-js/faker'
it('Criar projeto com sucesso', () => {
    const token = '1FRNEQCJdVsxEjSLSA2k'; // Fix: token should be a string
    const project = {
      name: faker.datatype.uuid(),
      description: faker.lorem.paragraph()
    };
  
    cy.ProjetoApi(token, project).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.include({
        name: project.name,
        description: project.description
      });
    });
  });