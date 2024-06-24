describe('esperas', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });

    it('Aguardar elemento estar disponivel', () => {
        cy.get('input[value="Resposta Demorada"]').click()
        cy.get('input[id="novoCampo"]')
            .should('exist')
            .type('funcionando')
    });

    it('Uso do find', () => {
        cy.get('input[value="Listar"]').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .find('span')//procura por um span dentro do elemento #lista li
            .should('contain', 'Item 2')
    });

    it.only('Uso do timeout', () => {
        cy.get('input[value="Resposta Demorada"]').click()
        //cy.wait(5000) // espera fixa
        cy.get('input[id="novoCampo"]', {timeout:30000})  // ele aguardara no limite até de 30000, caso o botão apareça antes ele cancela a espera
            .should('exist')
    });

});