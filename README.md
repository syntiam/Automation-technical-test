This repository contains an End to End test in the purpose of automating a purchase scenario on the DEMOQA platform ('http://shop.demoqa.com/') which is an e-commerce website.

Feature: as a customer, I would like to buy an item on the website
scenarios: the customer adds a product in the cart
    Given a customer in the homepage
    When he chooses a product with specifying the options
    And adds the article to the cart 
    Then a succes message should be displayed
    And the article should be added to the cart

Scenario: the customer proceeds to checkout
    Given a customer in the checkout step
    When he fills valid informations
    And he places order 
    Then a succes message should be displayed 
    And the purchase order should be detailed

Framework: Tests are coded in javaScript programming langage with the Cypress framework vrsion 6.9.1

How to test:
git clone https://github.com/syntiam/Automation-technical-test.git
cd Automation-technical-test

if you do not have Cypress already installed on your machine, then:

npm install cypress --save-dev

but, if you already have Cypress then you can just do:

npm install 

npx cypress open

In the Cypress Test Runner choose the test to execute 
The 'test.spec.js' has been conceived with cypress commands
The scenarii.spec.js has been conceived using a custom commands (Both have the same purpose)

To generate a Mochawesome report, install the mochawsome dependencies:
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
just run this command: "cy:run:report"
it will delete the old report and generate a new one.

Have a good one!!!