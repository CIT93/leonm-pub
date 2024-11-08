const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    TBL.innerHTML = "";
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

function renderBtn(index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function (e) {
        data.splice(index, 1);
        renderTbl(data);
    })
    btnEdit.addEventListener('click', function (e) {
        
    })
    return td;
}

function renderBody(data) {
    const tbody = document.createElement("tbody");
    data.forEach(function (obj, index) {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {
            if (key !== "cfpLastName" && key !== "cfpHousePTS" && key !== "cfpSizePTS") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };