describe('Helpers', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')
    });

    it('Its', () => {
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User') //passamos o objeto que queremos acessar no wrap, e o metodo its vai obter o valor de uma propriedade no caso 'Nome'
    });

    it('Invoke', () => {
        const getvalue = () => {
            return 1
        }
        const soma = (a,b) => {
            return a + b
        }
        cy.wrap({fn: getvalue}).invoke('fn').should('be.equal', 1) //invoke -> serve para executar uma função
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7) // passando uma função com parametros
    });
});