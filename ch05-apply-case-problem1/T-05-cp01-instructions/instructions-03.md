# Flex Layout Styles

Go to the "Flex Layout Styles" section and insert a style rule to display the `body` element as a `flexbox` oriented as rows with wrapping. The page `body` content has two `main` elements. The `section` element with the ID `sheet` contains the panels from the comic book page. The `article` element contains information about the comic book industry during the Golden Age. Devan wants more of the page width to be given to the comic book sheet. Add a style rule that sets the flex growth and shrink rate of the `section#sheet` selector to **3** and **1** respectively and set its flex basis size to **301** pixels.

Less page width will be given to the `article` element. Create a style rule to set its flex growth and shrink values to **1** and **3** respectively and set its flex basis size to **180** pixels. 

# Mobile Devices

Go to the "Mobile Devices" section and create a media query for screen devices with a maximum width of **480** pixels.

With mobile devices, Devan wants each comic book panel image to occupy a single row. Create a style rule that sets the `width` of `img` elements belonging to the `panel` class to **100%**. Devan wants the horizontal navigation links to other pages on the Golden Pulps website to be displayed near the bottom of the page. Within the media query, set the flex order of the `nav.horizontal` selector to **99**. Create a style rule to set the flex order of the `body > footer` selector to **100**.

