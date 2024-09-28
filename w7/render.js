const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const trTextArr = ["Leon", 2, "large", 20];
    trTextArr.forEach(function (text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        table.appendChild(tr);
    })
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
    console.log(table);
}

/* If we looked at data now, it would probably be undefined? But once 
the entire function has been run, data should reference back to the cfpData global
variable in the script.js. */

/* I think I understand modules pretty well. However, 
 a question I have about modules is, is there a class equivalent to JavaScript like 
there is in C++? If there is, would it be possible to create a class based on the cfpData object
and then create modules to work with the object or class? */

export { renderTbl, renderTblHeading };