function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput");
    // Validate the input and check for null
    if (!taskInput || taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }
    // Create a new list item
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(taskInput.value));
    // Add delete button to the list item
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
        deleteTask(listItem); // Call deleteTask function with listItem as a parameter
    };
    listItem.appendChild(deleteButton);
    // Get the task list and check for null
    var taskList = document.getElementById("taskList");
    if (!taskList) {
        console.error("Task list not found");
        return;
    }
    // Add the new task to the task list
    taskList.appendChild(listItem);
    // Clear the input field
    taskInput.value = "";
}
function deleteTask(taskItem) {
    // Remove the task item from the list
    taskItem.remove();
}
