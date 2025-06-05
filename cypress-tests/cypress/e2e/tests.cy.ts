import registrationPage, {RegisterUser} from "../pages/registrationPage";


const registrUser: RegisterUser ={
    username: "standard_user",
    password: "secret_sauce"
}

describe('Registration tests', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
        });

  it('validate object on page', () => {
    registrationPage.registerUser(registrUser)
    registrationPage.resultItem().should('contain.text','Sauce Labs Backpack')
    registrationPage.resultItem().should('contain.text','Sauce Labs Bolt T-Shirt')
})

it('Over ze jmeno a heslo nesouhlasi',() => {
  registrationPage.usernameInput().type(registrUser.username)
  registrationPage.passwordInput().type('123')
  registrationPage.loginButton().click()
  cy.contains('Username and password do not match any user in this service').should('be.visible');
})

it('Login test and validate name of item', ()=> {
  registrationPage.registerUser(registrUser)
  registrationPage.openschopingcart()
  cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
  cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bolt T-Shirt')
  })
})