/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) =>{
    const fd = new FormData()
    fd.append('log', user)
    fd.append('pwd', pass)
    fd.append('wp-submit', "Acessar")
    fd.append('redirec_to', `wp-admin`)
    fd.append('testcookie', 1)
    
    cy.request({
        url: 'wp-login.php',
        method: 'POST',
        body: fd
    }).then(reso => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';') [0]
            const divisor = firtPart.indexOf('=')
            const key = firtPart.substring(0, divisor)
            const value = firtPart.substring(divisor + 1)

            cy.setCookie(key, value)
        })
    })
    cy.visit('wp-admin')
})




/// <reference types="cypress" />



