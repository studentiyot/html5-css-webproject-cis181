# Document Setup

Open the _bc_union.html_ and _bc_today.js_ files and enter your **name** and the **date** in the comment section of each file. Next, go to the _bc_union.html_ file and directly above the closing `</head>` tag, insert a `script` element that links the page to the _bc_today.js_ file. Defer the loading of the script until after the rest of the page is loaded by the browser.

Study the contents of the file, then go to the _bc_today.js_ file and at the top of the file, insert a statement indicating that the code will be handled by the browser assuming strict usage. Note that within the file is the `getEvent()` function, which returns the HTML code for the daily events at the union given a day number ranging from 0 (Sunday) to 6 (Saturday).

# Complete the JavaScript File

Declare the `thisDate` variable containing the `Date` object for the date **October 12, 2021**. Declare the `dateString` variable containing the text of the `thisDate` variable using local conventions. Declare the `dateHTML` variable containing the following text string `<h2>date</h2>` where `date` is the value of the `dateString` variable.

Create the `thisDay` variable containing the day of the week number from the `thisDate` variable.

> Use the `getDay()` method.

Using the `thisDay` variable as the parameter value, call the `getEvent()` function to get the HTML code of that day’s events and store that value in a variable named `eventHTML`. Applying the `insertAdjacentHTML()` method to the `page` element with the ID `unionToday`, insert the value of the `dateHTML` plus the `eventHTML` variables before the end of the element contents.

Document your code with descriptive comments.

Open the bc_union.html file in the browser preview and verify that the sidebar shows both the date **10/12/2021** formatted as an `h2` heading and the daily events for that date formatted as a description list. Your content should resemble that shown in _Figure 9–45_.

Return to the _bc_today.js_ file and test your code by changing the date in the `thisDate` variable from **10/13/2021** up to **10/19/2021**. Verify that a different set of events is listed for each date when you refresh the page in the browser preview.

Return once more to the _bc_today.js_ file and change the value of the `thisDate` variable so that it uses the current date and time.

Reload the _bc_union.html_ file in the browser preview to show the date and the events for the current day of the week.
