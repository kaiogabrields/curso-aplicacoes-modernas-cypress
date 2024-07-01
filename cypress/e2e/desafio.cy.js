import { faker } from '@faker-js/faker';

describe('Desafios', () => { 
    let nome = faker.person.firstName()
    let sobrenome = faker.person.lastName()

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });


    it('Desafio aula 36, resolvido por mim', () => {
        cy.get('#formCadastrar').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })
        cy.get('#formNome').type(nome)
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })
        cy.get('[data-cy=dataSobrenome]').type(sobrenome)
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
 
        cy.get('#resultado').should('contain', 'Cadastrado')
    })

})