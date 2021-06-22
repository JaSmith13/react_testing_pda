describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the running total', () => {
    cy.get('#number2').click()
    cy.get('#number1').click()
    cy.get('#number7').click()
    cy.get('.display').should('contain', '217')
  })

  it('should update the display with the result when the arithmetical operations are performed', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number8').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number8').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '20')
  })

  it('should be able to handle negative, decimal and large numbers', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
    cy.get('#operator-multiply').click()
    cy.get('#number5').click()
    cy.get('#decimal').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-10.4')
    cy.get('#operator-multiply').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-57777777772')
  })

  it('should return an error if a number is divided by 0', () => {
    cy.get('#number8').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'cant divide by zero')

  })

})