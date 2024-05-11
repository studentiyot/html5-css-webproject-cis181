# Create the Homepage
Go to the *jtc_pages.txt* file in your text editor. The first section in the file contains comments made by Jedds Tree Care customers. Copy the text of the three reviews including the reviewer names. Then, go to the *jtc_index.html* file in your HTML editor and paste the copied text within the `aside` element.

Within the `aside` element, add the following content and markup:
1. Directly after the opening `<aside>` tag, insert an inline image for the *jtc_comments.png* file. Specify **Comments** as the alternate text.
2. Enclose each of the three reviewer comments within a `blockquote` element, including both the text of the quote and the name of the review.
3. Within each of the three `blockquote` elements:
    * mark the review as a paragraph,
    * mark the line containing the reviewer name as a `cite` element,
    * replace the “---” text with the `em` dash character (—) using the character reference `&mdash;`. 

Go to the `article` element and insert a `header` element containing the inline image file *jtc_ photo1.png* with the alternate text **Jedds Tree Care**.
 
Return to the *jtc_pages.txt* file in your text editor and copy the second section of text containing the description of the company and its contact information. Then, go to the *jtc_index.html* file in your HTML editor and paste the copied text in the `article` element, directly below the `article` `header`. 

 Mark up the content of the page `article` as follows:
 1. Mark the first two paragraphs using the `<p>` tag.
 2. Enclose the five lines of the contact information within an address element. Insert a line break element at the end of the first four lines so that each part of the address appears on a new line in the rendered page.
 3. Mark the text **Jedds Tree Care** in the first line of the address as a strong element.
 4. Mark the email address as a hypertext link. Make the telephone number a telephone link, including the international access code.

# Verify Your Progress
Pause and verify that the layout and appearance of the page resemble that shown in *Figure 1–51*.  Note that under the smaller screen widths associated with mobile devices, the text of the reviewer comments is not displayed.
 
 