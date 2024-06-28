
function createTask(task) {
    let taskListItem = document.createElement("li")
    taskListItem.classList.toggle("delete")
    let deleteListItemButton = document.createElement("button")
    deleteListItemButton.innerText = "delete"
    deleteListItemButton.addEventListener("click", function () {
        taskListItem.remove()
    })

    let taskTextSpan = document.createElement("span")
    taskTextSpan.innerText = task
    taskListItem.appendChild(taskTextSpan)
    taskListItem.appendChild(deleteListItemButton)

    document.getElementById("tasks-list").appendChild(taskListItem)

}
let tasks = (localStorage.tasks && JSON.parse(localStorage.tasks)) || [];
for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
createTask(task)
}
document.getElementById("add-task-button").addEventListener("click", function () {
    let taskTextField = document.getElementById("task-text-field")
    if (taskTextField.value === "") {
        alert("Are you retarded?")

    } else {

        tasks.push(taskTextField.value)
        localStorage.tasks = JSON.stringify(tasks)
        createTask(taskTextField.value)
         taskTextField.value = ""
    }
})