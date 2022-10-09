# tesoro
Tesoro is the paypal for cash and delivery.

Problem: Cash on delivery is a very popular payment method for online shopping in the developing world, however, its is very costly for merchants because of the high rate of returned orders. If an ordered is not completed successfully, then merchantes need to absorb the shipping cost. 

Solution: Payment method that allows merchants to offer cash on delivery with the shipping cost as collateral. If a customer makes a COD order and its not succesful, then the merchant gets the shipping cost. This solves the problem because merchants no longer loose money on returned orders. 

Necessary Steps to Complete Happy Path
1. Merchant integrates tesoro checkout button to his website
2. Customer downloads tesoro app and creates an account with web3auth


Solution Flow: 
1. Customer clicks on tesoro checkout button
2. Customer creates order and authorizes the transaction
3. Customer enters his phone in checkout
4. Customer accepts order in app
5. Order gets created
6. Tesoro sends whats app message to user telling him that order is confirmed!
7. Order’s Shipping Cost gets collaterized in customer's account
8. Merchant ships product to customer
9. Customer pays the total amount to the delivery company in cash
10. Shipping cost in customer’s account gets unfrozen 

Situation Handling

¿What happens if the order is returned?
Shipping cost collateral gets deposited to merchant.

¿How does Tesoro validate that the order was delivered?
Orders have a QR code that the customer scans to mark order as delivered. Collateral shipping cost gets unfrozen after the order is marked as complete. 
