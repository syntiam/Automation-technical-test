
describe('Buying an article in demoqa plateform', () => {
    beforeEach(() => {
        cy.visit('http://shop.demoqa.com/')
        
    })

    it('choose an article', () => {
        //cy.wait(3000)
        // cy.get(".second-img").eq(6).click({force:true})
        //cy.get('[class="noo-product-inner noo-product-inner2"]').eq(0).find('[href="http://shop.demoqa.com/product/pink-drop-shoulder-oversized-t-shirt/"]').first()
            //.click({ force: true })
        cy.contains("pink drop shoulder oversized t shirt").click({ force: true })

        cy.get('#pa_color').select('Pink')
            .should('have.value', 'pink')
        cy.get('#pa_size').select('38')
            .should('have.value', '38')
        cy.get('[class="single_add_to_cart_button button alt"]').click()
        cy.get('.woocommerce-message').should('contain', '“pink drop shoulder oversized t shirt” has been added to your cart.')
        cy.get('[class="button wc-forward"]').click()
        cy.get('.cart-name-and-total').should('contain', '₹15.00')
        cy.get('[class="checkout-button button alt wc-forward"]').click()
        cy.get('#billing_first_name').type('Jane')
            .should('have.value', 'Jane')
        cy.get('#billing_last_name').type('Bie')
            .should('have.value', 'Bie')
        cy.get('#select2-billing_country-container').click().type('France' + '{enter}')
        cy.get('#billing_address_1').clear().type('150 avanue des roses')
            .should('have.value', '150 avanue des roses')
        cy.get('#billing_address_2').clear().type('Appt 26')
            .should('have.value', 'Appt 26')
        cy.get('#billing_postcode').clear().type('26000')
            .should('have.value', '26000')
        cy.get('#billing_city').clear().type('Valence')
            .should('have.value', 'Valence')
        cy.get('#billing_phone').clear().type('0666789034')
            .should('have.value', '0666789034')
        cy.get('#billing_email').clear().type('janefoo@hotmail.com')
            .should('have.value', 'janefoo@hotmail.com')
        cy.get('#terms').check()

        cy.get('#place_order').click()
        cy.get('.woocommerce-thankyou-order-received').should('contain', 'Thank you. Your order has been received.')








    })
})