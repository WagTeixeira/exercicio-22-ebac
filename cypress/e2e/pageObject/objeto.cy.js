import { faker } from '@faker-js/faker';
import cadastroPage from "../../support/pages/cadastro.page.js"
describe('pom', () => {
   /* it('CadastroTest', () => {
        cy.visit('my-account/')

        cy.get("#reg_email").click().type(faker.internet.email())
        cy.get("#reg_password").click().type(faker.internet.password())
        cy.get(":nth-child(4) > .button").click()
        cy.get(".woocommerce-MyAccount-navigation-link--dashboard > a").should(
            "have.text",
            "Painel"
          );
        
    })=*/

    
    it('CadastroTest Object', () => {
        let fakerEmail = faker.internet.email()
        let fakerPass = faker.internet.password()
        
        cy.visit('my-account/')

        const ln=new cadastroPage();
        ln.setEmail(fakerEmail)
        ln.setPassword(fakerPass)
        ln.clickRegister();
        ln.verifyCadastro();
    });
});