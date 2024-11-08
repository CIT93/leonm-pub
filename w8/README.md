# My Understanding
- We call the renderTbl function and pass our cfpData object as the parameter.
- In the renderTbl function, we declare the table variable and set it equal to the renderTblHeading function. Then we create a table, table heading and table row elements in the document and create an array to hold our string values for the table heading.
- We then iterate through the array and for each text within the array, we create a th element and set each th element with a value equal to the current string in the loop. 
- Once the loop finishes we append the tr that contains our th's to our thead and the thead to the table. The function then finishes with returning the table. 
- We now return to the renderTbl function and declare another variable called tbody and create the tbody element in the document. 
- Now we iterate through our object and for each object, declare and create a tr element in the dom. Each time we iterate through a new object, a new tr is created for each. Same goes for the table datas for our first name, number of people in the household, the home size, and the total points. For each table data we set its text content equal to the specific referred objects data value, such as data.cfpTotal. 
- Append each td to the tr, append the tr to the table body, and the table body to the table. Each loop creates a new row with different data values. 
- After the loop ends, we append the table to the div in our document set equal to TBL in our script.js. 

## My feedback
- I thought you were incredibly thorough with the walkthrough of the code that we have so far. Really helpful that you went through literally every aspect of the code. One thing I did wish you covered was the difference between thead and th. I was a little confused as I watched you cover them as I still didn't understand the difference between the two so I did a little research on my own. So thead is like the equivalent of like an article or section elements and the th would be like the paragraphs of that article element. It's a way of defining what's in our heading and what our heading values are. Other than that, I thought your overview of the code was great. 

## Event Listener for Edit
- For the edit button, I think we can have the event listener delete all data for the current index just like we did in the delete button but have maybe another function that asks the user for updated information again perhaps? Then we could call the renderTbl function again to render the updated data. 