export default new class registrationPage {
usernameInput = ()=> cy.get('input[data-test="username"]')
passwordInput = ()=> cy.get('input[data-test="password"]')
loginButton = () => cy.get('input[data-test="login-button"]')
itemInput = () => cy.get('class[data-test="inventory-item-name"]')
addtocartButton = () => cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]')
addtocartButton2 = () => cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
schopingcartContainer = () => cy.get('a[data-test="shopping-cart-link"]')


resultUsername = () => cy.get('[data-test="username"]')
resultPassword = () => cy.get('[data-test="password"]')
resultItem = () => cy.get('[data-test="inventory-item-name"]')


registerUser(jmeno: RegisterUser){
this.usernameInput().should('be.visible').type(jmeno.username)
this.passwordInput().should('be.visible').type(jmeno.password)
this.loginButton().should('be.visible').click()
this.addtocartButton().should('be.visible').click()
this.addtocartButton2().should('be.visible').click()
   }
openschopingcart(){
    this.schopingcartContainer().click()
     }
 }
export interface RegisterUser {
    username: string
    password: string
}