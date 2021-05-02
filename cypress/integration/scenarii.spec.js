describe('project scenari', () => {
    let researchs = require('../fixtures/productChoice.json')
    researchs.forEach(research => {

        it('research ${research.article}: ${research.color}: ${research.size}', () => {
            cy.visit('http://shop.demoqa.com/')
            cy.setArticleChoice(research.article, research.color, research.size)
            cy.get('[class="single_add_to_cart_button button alt"]').click()
            cy.get('.woocommerce-message').should('contain', '“pink drop shoulder oversized t shirt” has been added to your cart.')
            cy.get('[class="button wc-forward"]').click()
            cy.get('.cart-name-and-total').should('contain', '₹15.00')
            cy.get('[class="checkout-button button alt wc-forward"]').click()
            cy.setPersonnalInformations(research.firstName, research.lastName, research.country, research.adress, research.additionalAdress, research.postCode, research.city, research.phone, research.email)
            cy.get('#terms').check()
            cy.get('#place_order').click()
            cy.get('.woocommerce-thankyou-order-received').should('contain', 'Thank you. Your order has been received.')


        })





    })
})
