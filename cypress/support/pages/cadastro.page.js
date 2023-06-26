class cadastroPage {
    txtEmail="#reg_email";
    txtPassword="#reg_password";
    btnRegister=":nth-child(4) > .button";
    lblmsg=".woocommerce-MyAccount-navigation-link--dashboard > a";
  
  
    setEmail(email) {
    cy.get(this.txtEmail).type(email);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickRegister() {
    cy.get(this.btnRegister).click();
  }

  verifyCadastro() {
    cy.get(this.lblmsg).should(
      "have.text",
      "Painel"
    );
  }
}

export default cadastroPage;
