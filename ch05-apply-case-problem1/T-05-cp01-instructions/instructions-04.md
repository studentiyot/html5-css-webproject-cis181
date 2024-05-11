# Tablet and Desktop Devices
Go to the "Tablet and Desktop Devices: Greater than 480 pixels" section and create a media query that matches screen devices with widths greater than **480** pixels. For tablet and desktop devices, you’ll lay out the horizontal navigation list as a single row of links. Within the media query, create a style rule for the `nav.horizontal ul` selector that displays that element as a `flexbox`, oriented in the row direction with no wrapping. Set the `height` of the element to **40** pixels.

For the `nav.horizontal ul li` selector set the flex growth shrink, and basis size values to **1**, **1**, and **auto** respectively so that each list items grows and shrinks at the same rate. 

With wider screens, Devan does not want the panels to occupy their own rows as is the case with mobile devices. Instead, within the media query create style rules, define the `width` of the different classes of comic book panel images as follows:
1. Set the `width` of `size1` `img` elements to **100%**.
2. Set the `width` of `size2` `img` elements to **60%**.
3. Set the `width` of `size3` `img` elements to **40%**.
4. Set the `width` of `size4` `img` elements to **30%**.

Open the website in the preview pane to the right and click the navigation links to view the contents of the cover and first three pages. Verify that with a narrow screen the panels occupy their own rows and with a wider screen the sheets are laid out with several panels per row. Further verify that the horizontal navigation list is placed at the bottom of the page for mobile devices.

# Print Style
Devan also wants a print style that displays each comic book sheet on its own page and with none of the navigation links. Go to the *gp_print.css* style sheet in your editor. Add style rules to: 
1. In the section marked "Hidden Objects", hide the `nav`, `footer`, and `article` elements.
2. In the section marked "Comic Book Sheet Styles", set the `width` of the element referenced by the `section#sheet` selector to **6** inches. Set the top/ bottom margin of that element to **0** inches and the left/right margin to **auto** in order to center it within the printed page.
3. Set the `width` of `img` elements belong to the `size1` class to **5** inches, `size2` images to **3** inches, `size3` images to **2** inches, and `size4` images to **1.5** inches.
