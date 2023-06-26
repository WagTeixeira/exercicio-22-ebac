const data = require ("../fixtures/data.json")

const {dashboardPage, cadastroPage} = require ('../../support/pages')

describe('Checkout page', () => {
    beforeEach(() => {})
        cy.login(data.usuario, data.senha)
})

it('Should login with valid credentials', () => {
    cadastroPage.siteName.should("be.visible")
});


