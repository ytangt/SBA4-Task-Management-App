
const tasks = [];

//UI
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const deadlineInput = document.getElementById("deadlineInput");
const statusSelect = document.getElementById("statusSelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const startFilterBtn = document.getElementById("startFilterBtn");
const message = document.getElementById("message");
// Handler functions
addTaskBtn.addEventListener('click', ()=>{
    const text = taskInput.value;
    const category = categorySelect.value;
    const deadline = deadlineInput.value;
    const status = statusSelect.value;

    const newTask = createTask(text, category, deadline, status);
    tasks.push(newTask);

    displayAllTasks();

    // clear the input
    taskInput.value = "";
    categorySelect.value = "Categories";
    deadlineInput.value = "";
    statusSelect.value = "Status";
})

//display all task in diaplay table
function displayAllTasks (){
    tasks.forEach(task => {
        const taskRow = document.createElement("tr");
        taskRow.innerHTML = `<td>${task.text}</td> 
                             <td>${task.category}</td> 
                             <td>${task.deadline}</td> 
                             <td>${task.status}</td> `;
        taskTable.appendChild(taskRow);
    });
}
//createTask function 
function createTask(text, category = "General", deadline = "No deadline", status = "pending") {
  return {
    text,
    category,
    deadline,
    status,
  };
}