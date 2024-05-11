"use strict";

/*
New Perspectives on HTML5 and CSS3, 8th Edition
Tutorial 10 - Case Problem 1

Author: Leslie Berrie / mazal bohbot berrie
Date:   April 21, 2024

Filename: tc_order.js -v.0.04
*/

// The item array contains the ID numbers of the items ordered by the customer
var item = ["10582", "23015", "41807", "10041"];

/*
// The itemDescription array contains the description of each item
var itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582", 
                        "Tom Landry 1955 Football Card (unsigned), Item 23015", 
                        "1916 Army-Navy Game, Framed Photo (signed), Item 41807", 
                        "Protective Card Sheets, Item 10041"];
*/


// The itemDescription array contains the description of each item
var itemDescription = new Array();

itemDescription[0] = "1975 Green Bay Packers Football (signed), Item 10582";
itemDescription[1] = "Tom Landry 1955 Football Card (unsigned), Item 23015";
itemDescription[2] = "1916 Army-Navy Game, Framed Photo (signed), Item 41807";
itemDescription[3] = "Protective Card Sheets, Item 10041";


// The itemPrice array contains the price of each item
  var itemPrice = ["149.93", "89.98", "334.93", "22.67"];


// The itemQty array contains the quantity ordered of each item
  var itemQty = ["1", "1", "1", "4"];
