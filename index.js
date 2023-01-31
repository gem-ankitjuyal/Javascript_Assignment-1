
let tableData = [
    { name: "Ankit Juyal", age: 22, DOB: "18 / 09 / 2000", email: "ankit@gmail.com", company: "Gemini Solutions" },
    { name: "Prithvi Raj", age: 24, DOB: "21 / 10 / 1998", email: "raj@gmail.com", company: "Leetcode" },
    { name: "Sakshi Chauhan", age: 22, DOB: "20 / 03 / 2000", email: "shivani@gmail.com", company: "HashedIn" },
    { name: "Suraj Chaudhary", age: 30, DOB: "18 / 12 / 1992", email: "suraj@gmail.com", company: "Gemini Solutions" },
    { name: "Priyanshi Rawat", age: 27, DOB: "13 / 06 / 1995", email: "priyanshi@gmail.com", company: "Gemini Solutions" }
]

// we divide the table into two parts : - table Head, tableBody.

let table = document.querySelector("table");

table.style.border = 'solid 2px black'
table.style.borderCollapse = "collapse"
table.style.margin = "0 auto"
table.style.maxWidth = "900px"
table.style.width = "100%"

let tableHeadings = Object.keys(tableData[0]);


/*self invoking function named generateTable that have 3 arguments :-

table - This is the variable that contains the table from HTML.

tableHeadings - This is the variable that contains the heading of the table comes from the tableData (Array of objects)
Using Object.keys(), we got the keys from the array of objects i.e headings.

tableData - This is the variable that contains the array of objects i.e the personal details

In the first for loop, we tried to append the text to th and then to the row.

In the second for loop we tried to add row and then inside it we tried to iterate through the key of the tableData (tableHeadings) and insert the values of that key in row fashion.



*/

(function generateTable() {
    let thead = table.createTHead();
    let row = thead.insertRow();


    // for loop to create the row for tableHeadings

    for (let key of tableHeadings) {
        let th = document.createElement("th");
        th.style.border = 'solid 2px black'
        th.style.padding = "10px"
        let text = document.createTextNode(key);

        th.appendChild(text);
        row.appendChild(th);
    }


    // for loop to create thr row for tableData

    for (let element of tableData) {
        let row = table.insertRow();
        // console.log(element)
        for (key in element) {
            // console.log(key)
            let cell = row.insertCell();
            cell.style.textAlign = "center"
            cell.style.padding = "10px"
            cell.style.border = "solid 2px black"
            let text = document.createTextNode(element[key]);
            // console.log(element[key])

            cell.appendChild(text);

        }
    }

})(table, tableHeadings, tableData)








