describe('elements', () => {
before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
});
it('interagindo com texto', () => {
    cy.title().should('contain', 'Campo de Treinamento')
    cy.get('h3').should('be.visible')
});

it('interagindo com links', () => {
    cy.get('a').click()
    cy.get('#resultado').should('have.text', 'Voltou')
});

it('interagindo com campos de texto', () => {
    cy.get('input[id="formNome"]').type('teste')
    cy.get('input[id="formNome"]').clear()
    cy.get('input[id="formNome"]').type('teste123')
    cy.get('input[id="formSobrenome"]').type('teste245')
});

it('interagindo com radioBox', () => {
    cy.get('input[value="M"]').click()
    cy.get('input[value="F"]').click().should('be.checked')
});

it('interagindo com checkBox', () => {
    cy.get('input[type="checkbox"][id="formComidaCarne"]').click().should('be.checked')
    cy.get('input[value="pizza"]').should('not.be.checked')
});

it('interagindo com comboBox', () => {
    cy.get('select[id="formEscolaridade"]').select('superior')
    cy.get('select[id="formEscolaridade"]')
        .select('2grauincomp')
        .should('have.value', '2grauincomp')
});

it.only('interagindo com combo multiplo', () => {
    cy.get('select[id="formEsportes"]')
        .select('natacao', 'natacao', 'Corrida', 'Karate')
});


});