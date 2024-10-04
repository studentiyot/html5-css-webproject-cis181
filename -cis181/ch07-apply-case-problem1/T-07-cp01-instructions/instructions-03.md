# Create the Form Continued...

Create a data list named `titleList` containing the suggestions: **Mr.**, **Mrs.**, **Ms.**, **Prof.**, **Dr.**, **Assist. Prof.**, and **Assoc. Prof**. Apply the `titleList` data list to the `titleBox` control.

Apply the regular expression pattern `^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$` to the `phoneNumber` field. Apply the regular expression pattern `^acgip\-\d{6}$` to the `acgipID` field.

> You can copy the regular expression code for the `phoneNumber` field from the _cg_regex.txt_ file.

Add the **Registration Category** `label` associated with the `regList` control. Add a selection list with the ID `regList` that stores values in the `registerType` field. Populate the selection list with the option text: **ACGIP Member ($695)**, **Non-Member ($795)**, **Student ($310)**, **Poster ($95)**, and **Guest ($35)**. Make the corresponding option values equal to **member**, **nonmember**, **student**, **poster**, and **guest**.

Within the form, add a paragraph containing a submit button with the text **continue**.
