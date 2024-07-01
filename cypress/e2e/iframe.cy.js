describe('trabalhando com irgrames', () => {
    it('Preenchendo campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funcionou')
                .should('have.value', 'funcionou')
        })
    });
});