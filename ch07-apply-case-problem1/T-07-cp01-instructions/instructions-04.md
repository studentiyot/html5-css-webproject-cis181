# Validation Styles

Return to the *cg_validate.css* file and create styles for validating data entry. Within the "Validation Styles" section, add the following style rules:
1. Display all `input`, `select`, and `textarea` elements that have the focus with a background color of **rgb(245, 245, 140)**.
2. When the `fnBox`, `lnBox`, `mailBox`, `phoneBox`, and `idBox` controls have the focus and are valid, change the background color to **rgb(220, 255, 220)** and display the *cg_valid.png* image with no tiling in the right side of the background contained within the box.
3. When the `fnBox`, `lnBox`, `mailBox`, `phoneBox`, and `idBox` controls have the focus and are not valid, change the background color to **rgb(255, 232, 232)** and display the image *cg_invalid.png* with no tiling in the right side of the background contained within the box.

Lastly, open *cg_register.html* in the browser preview. Verify that the content and layout of the form resemble that shown in *Figure 7–65*. Verify that you must enter all required field values in the proper format for the form to be submitted successfully. Confirm that the browser performs inline validation on the `firstName`, `lastName`, `address`, `email`, `phoneNumber`, and `acgipID` fields.
