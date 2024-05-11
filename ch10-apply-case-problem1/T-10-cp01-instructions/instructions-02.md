# Document Setup

Open the *tc_cart.html*, *tc_cart.js* and *tc_order.js* files and enter your **name** and the **date** in the comment section of each file. Next, go to the *tc_cart.html* file in your editor. Directly above the closing `</head>` tag, insert `script` elements to link the page to the *tc_order.js* and *tc_cart.js* files in that order. Defer the loading and running of both script files until after the page has loaded.

# Create the Shopping Cart

Scroll down the file and directly below the `h1` heading titled **Shopping Cart** insert a `div` element with the ID `cart`.

Within the *tc_order.js* file, you will create arrays containing information on a sample customer order. Create an array named `item` that will contain the ID numbers of the items purchased by the customer. Add the following four item numbers to the array: **10582**, **23015**, **41807**, and **10041**. Create an array named `itemDescription` containing the following item descriptions:
* 1975 Green Bay Packers Football (signed), Item 10582
* Tom Landry 1955 Football Card (unsigned), Item 23015
* 1916 Army-Navy Game, Framed Photo (signed), Item 41807
* Protective Card Sheets, Item 10041

Create an array named `itemPrice` containing the following item prices: **149.93**, **89.98**, **334.93**, and **22.67**.

Create an array named `itemQty` containing the following quantities that the customer ordered of each item: **1**, **1**, **1**, and **4**.

