describe('Listar projetos', () => {
    it('Listar projetos com sucesso', () =>{
        cy.request({
            method: 'GET',
            url: 'api/v4/projects/',

        }).then(response =>{
            expect(response.status).to.equal(200)
        })
    })
})

