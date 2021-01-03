/*
    To-Do Page operations:::
*/
// Global Vars
var username = "Mary Smith";
var tasks = [];
var task = [];
/*
// Create JS object from JSON String
var user = '{"name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse(user);
//alert(obj.name);

// Create JSON string from JS object
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

// Create JSON string from JS array::: SEND TO SERVER
var arr = ["John", "Peter", "Sally", "Jane"];
var myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;

//document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
*/
window.onload = function onloadData() {
    task.push("taskName", "category", "priority", "moneyCost", "timeCost", "dueDate", "status");
    tasks.push(task);
    task = [];
    task.push("taskName2", "category2", "priority2", "moneyCost2", "timeCost2", "dueDate2", "status2");
    tasks.push(task);
    task = [];

    var i;
    for (i = 0; i < tasks.length; i++) {
        var frmData = readDBData(tasks[i]);
        insertNewRecord(frmData);
    }
}

var selectedRow = null;

function onFormSubmit() {
    var frmData = readFormData();

    if (selectedRow == null)
        insertNewRecord(frmData);
    else
        updateRecord(frmData)
    resetForm();
}
// CRUD Operation::: Create
function insertNewRecord(data) {
    var table = document.getElementById("ToDoList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.taskName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.priority;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.moneyCost;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.timeCost;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.dueDate;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.status;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = "<a href='#' onClick='onEdit(this)'>Edit</a>" +
        "<a href='#' onClick='onDelete(this)'> Delete</a>";
}
// CRUD Operation::: Read
function readDBData(task) {
    var frmData = {};
    frmData["taskName"] = task[0];
    frmData["category"] = task[1];
    frmData["priority"] = task[2];
    frmData["moneyCost"] = task[3];
    frmData["timeCost"] = task[4];
    frmData["dueDate"] = task[5];
    frmData["status"] = task[6];
    return frmData;
}
function readFormData() {
    var frmData = {};
    frmData["taskName"] = document.getElementById("taskName").value;
    frmData["category"] = document.getElementById("category").value;
    frmData["priority"] = document.getElementById("priority").value;
    frmData["moneyCost"] = document.getElementById("moneyCost").value;
    frmData["timeCost"] = document.getElementById("timeCost").value;
    frmData["dueDate"] = document.getElementById("dueDate").value;
    frmData["status"] = document.getElementById("status").value;
    return frmData;
}

// CRUD Operation::: Update
function updateRecord(frmData) {
    selectedRow.cells[0].innerHTML = frmData.taskName;
    selectedRow.cells[1].innerHTML = frmData.category;
    selectedRow.cells[2].innerHTML = frmData.priority;
    selectedRow.cells[3].innerHTML = frmData.moneyCost;
    selectedRow.cells[4].innerHTML = frmData.timeCost;
    selectedRow.cells[5].innerHTML = frmData.dueDate;
    selectedRow.cells[6].innerHTML = frmData.status;
}
function resetForm() {
    document.getElementById("taskName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("moneyCost").value = "";
    document.getElementById("timeCost").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("status").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("taskName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("priority").value = selectedRow.cells[2].innerHTML;
    document.getElementById("moneyCost").value = selectedRow.cells[3].innerHTML;
    document.getElementById("timeCost").value = selectedRow.cells[4].innerHTML;
    document.getElementById("dueDate").value = selectedRow.cells[5].innerHTML;
    document.getElementById("status").value = selectedRow.cells[6].innerHTML;
}
// CRUD Operation::: Delete
function onDelete(td) {
    if (confirm("Please Confirm the deletion of record:")) {
        row = td.parentElement.parentElement;
        document.getElementById("ToDoList").deleteRow(row.rowIndex);
        resetForm();
    }
}