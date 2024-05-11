"use strict";

/*
New Perspectives on HTML5 and CSS3, 8th Edition
Tutorial 10 - Case Problem 1

Author: Leslie Berrie / mazal bohbot berrie
Date:   April 21, 2024

Filename: tc_cart.js -v.0.04
*/

var orderTotal = 0;

var cartHTML = "<table>" + 
               "<tr>" + 
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" + 
               "</tr>";

// Loop through item array
for (var i =0; i < item.length; i++) {
  cartHTML += "<tr>" + 
              "<td>" + "<img src='img/tc_" + item[i] + ".png'>" + "</td>";

  cartHTML += "<td>" + itemDescription[i] + "</td>" + 
              "<td>" + "$" + itemPrice[i] + "</td>" + 
              "<td>" + itemQty[i] + "</td>";

  var itemCost = itemPrice[i] * itemQty[i];

  cartHTML += "<td>" + "$" + itemCost + "</td></tr>";
  orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr>" +
            "<td colspan='4'>Subtotal</td>" + 
            "<td>" + "$" + orderTotal + "</td>" + 
            "</tr>" +
            "</table>";

/* Write the cart to the element with the id "cart" */
document.getElementById("cart").innerHTML = cartHTML;

console.log(149.93 + 89.98 + 334.93 + (22.67*4));

