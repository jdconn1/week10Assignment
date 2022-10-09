let id = 0;

document.getElementById("submit-btn").addEventListener("click", () => {
    let table = document.getElementById("contact-table");
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id++}`);
    row.insertCell(0).innerHTML = document.getElementById("first-name").value;
    row.insertCell(1).innerHTML = document.getElementById("last-name").value;
    row.insertCell(2).innerHTML = document.getElementById("email").value;
    document.getElementById("first-name").value = '';
    document.getElementById("last-name").value = '';
    document.getElementById("email").value = '';
    
})
