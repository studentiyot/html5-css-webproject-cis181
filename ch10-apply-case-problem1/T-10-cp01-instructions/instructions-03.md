# Create the `table` to Display the Total Cost

Open the *tc_cart.js* file and in your script begin the logic for calculating a running total of the cost of the order. Start by declaring a variable named `orderTotal` and set its initial value to **0**. Then declare a variable named `cartHTML` that will contain the HTML code for the contents of the shopping cart, which will be displayed as a table. Set its initial value to the text string: 
```html
<table>
<tr>
<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>
</tr>
```

# Calculate the Total Cost of the Order

Create a `for` loop that loops through the entries in the `item` array. Each time through the loop, execute the commands described in *steps 1* through *5* listed below:
1. Add the following HTML code to the value of the `cartHTML` variable:
```html
 <tr>
<td><img src='tc_item.png' alt='item' /></td>
 ```
where **item** is the current value from the `item` array.
2. Add the following HTML code to the `cartHTML` variable to display the **description**, **price**, and **quantity** ordered of the item:
```html
<td>description</td> 
<td>$price</td>
<td>quantity</td>
```
where **description** is the current value from the `itemDescription` array, **price** is the current value from the `itemPrice` array preceded by a **$** symbol, and **quantity** is the current value from the `itemQty` array.
3. Declare a variable named `itemCost` equal to the price value multiplied by the quantity value for the current item. 
4. Add the following HTML code to the `cartHTML` variable to display the cost for the item(s) ordered, completing the table row:
```html
<td>$cost</td></tr>
```
where **cost** is the value of the `itemCost` variable, preceded by a **$** symbol.
5. Add the value of the `itemCost` variable to the `orderTotal` variable to keep a running total of the total cost of the customer order.

After the `for` loop has completed, add the following HTML code to the value of the `cartHTML` variable, completing the shopping cart table:
```html
<tr>
<td colspan='4'>Subtotal</td>
<td>$total</td>
</tr>
</table>
```
where **total** is the value of the `orderTotal` variable, preceded by a **$** symbol.

Apply the `cartHTML` value to the inner HTML of the `div` element with the ID `cart`. Document your script file with appropriate comments.

Open the website in the browser preview and verify that the page now shows the shopping cart data for the sample customer order.
