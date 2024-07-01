describe('trabalhando com alerts', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });

    beforeEach(() => {
        cy.reload()
    });
    
    it('Alert', () => {
        cy.get('input[id="alert"]').click()
        cy.on('window:alert', msg =>{ //pega eventos que ocorrem na tela, no caso desse o alert.
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    });

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('input[id="alert"]').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    });

    it('Confirm', () => {
        cy.get('input[id="confirm"]').click()
        cy.on('window:confirm', msg =>{ //pega eventos que ocorrem na tela, no caso desse o alert.
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{ //pega eventos que ocorrem na tela, no caso desse o alert.
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })
    });

    it.only('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg =>{ 
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg =>{ 
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
    });

});