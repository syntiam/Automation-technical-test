This repository contains an End to End test in the purpose of automating a purchase scenario on the __DEMOQA__ platform ('http://shop.demoqa.com/') which is an e-commerce website.
--------------------------------------------------------------------------------------------
__Feature__: as a customer, I would like to buy an item on the website

__scenarios__: the customer adds a product in the cart

    __Given__ a customer in the homepage
    
    __When__ he chooses a product with specifying the options
   
    __And__ adds the article to the cart 
    
    __Then__ a succes message should be displayed
   
    __And__ the article should be added to the cart
    

__Scenario__: the customer proceeds to checkout

    __Given__ a customer in the checkout step
    
    __When__ he fills valid informations
    
    __And__ he places order
    
    __Then__ a succes message should be displayed 
    
    __And__ the purchase order should be detailed
    

__Framework__: Tests are coded in javaScript programming langage with the Cypress framework vrsion 6.9.1

--------------------------------------------------------------------------------------------
__How to test__:

--------------------------------------------------------------------------------------------
git clone https://github.com/syntiam/Automation-technical-test.git

cd Automation-technical-test

if you do not have Cypress already installed on your machine, then:

npm install cypress --save-dev

but, if you already have Cypress then you can just do:

* npm install 

* npx cypress open

In the Cypress Test Runner choose the test to execute 

The 'test.spec.js' has been conceived with cypress commands

The 'scenarii.spec.js' has been conceived using a custom commands (Both have the same purpose)

To generate a Mochawesome report, install the mochawsome dependencies:

--------------------------------------------------------------------------------------------
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

just run this command: "cy:run:report"

it will delete the old report and generate a new one

![myimage-alt-tag](https://user-images.githubusercontent.com/78595629/116811763-485ec780-ab4b-11eb-9f5e-46be9f60aa3b.png)


__Have a good one!!!__
