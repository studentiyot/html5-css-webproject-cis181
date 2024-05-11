# Document Setup

Open the _mi_pricing.html_ and _mi_tables.css_ files and enter your **name** and the **date** in the comment section of each file. Next, go to the _mi_pricing.html_ file and add a link to the _mi_tables.css_ style sheet file to the document `head`.

# Create the Web Table

Directly after the paragraph in the `article` element insert a web table with the ID `pricing`. Add a `colgroup` element to the web table containing two `col` elements. The first `col` element should have the ID `firstCol`. The second `col` element should belong to the class `dataCols` and span **4** columns.

Add a `thead` row group element containing two rows. In the first row, insert five `th` elements containing the text shown in _Figure 6–53_. The first heading cell should span two rows. In the second row, add four headings cells containing the prices of the plans shown in _Figure 6–53_. Use a `br` element to display the price information on two separate lines.

Add a `tbody` row group element. In each row within the row group, add a `th` element containing the text shown in _Figure 6–53_ and four `td` elements containing the data values for each plan.

Add a `tfoot` row group element containing a single table row with a heading `th` element displaying the text **Summary**. Add four data `td` elements containing a description of each of the service plans.

> You can copy the summary text for each service plan from the _mi_data.txt_ file.
