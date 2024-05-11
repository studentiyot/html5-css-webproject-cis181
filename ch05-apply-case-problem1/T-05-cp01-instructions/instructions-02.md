# Document Setup

Open the *gp_cover.html*, *gp_page1.html*, *gp_page2.html*, *gp_page3.html*, *gp_layout.css*, and *gp_print.css* files and enter your **name** and the **date** in the comment section of each file. Next, go to the *gp_cover.html* file and add a `viewport` `meta` tag to the document `head`, setting the `width` of the layout viewport to the device width and setting the initial scale of the viewport to **1.0**. 

Create links to the following style sheets:
1. the *gp_reset.css* file to be used with all devices,
2. the *gp_layout.css* file to be used with screen devices, and
3. the *gp_print.css* file to be used for printed output.

Take some time to study the contents and structure of the file. Note each panel from the comic book is stored as a separate inline image with the class name panel along with class names of `size1` to `size4` indicating the size of the `panel`. `Size1` is the largest panel down to `size4`, which is the smallest panel. 

Repeat the above step, adding the stylesheet links and the viewport information to each of the *gp_page1.html*, *gp_page2.html*, and *gp_page3.html* files. Finally, go to the *gp_layout.css* file and create the layout styles for mobile and desktop devices. Note that Devan has used the `@import` rule to import the *gp_designs.css* file, which contains several graphical and typographical style rules. 