const tasks = [];

//UI
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const deadlineInput = document.getElementById("deadlineInput");
const statusSelect = document.getElementById("statusSelect");
const message = document.getElementById("message");
const addTaskBtn = document.getElementById("addTaskBtn");
const startFilterBtn = document.getElementById("startFilterBtn");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");
const taskTable = document.getElementById("taskTable");

// Handler functions
addTaskBtn.addEventListener('click', ()=>{
    const text = taskInput.value;
    const category = categorySelect.value;
    const deadline = deadlineInput.value;
    const status = statusSelect.value;

    const newTask = createTask(text, category, deadline, status);
    tasks.push(newTask);

    message.textContent = "Add event successfully";
    message.className = "text-success";
    displayAllTasks(tasks);

    // clear the input
    taskInput.value = "";
    categorySelect.value = "Categories";
    deadlineInput.value = "";
    statusSelect.value = "Status";

})

startFilterBtn.addEventListener('click',()=>{
  
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedStatus = statusFilter.value;
  
  const filteredTasks = tasks.filter(task => {
    //search input
    const isMatchText = searchText === "" || task.text.toLowerCase().includes(searchText);
    //search category
    const isMatchCategory = selectedCategory === "all" || task.category === selectedCategory;
    //serach status
    const isMatchStatus = selectedStatus === "all" || task.status === selectedStatus;

    return isMatchText && isMatchCategory && isMatchStatus;
  })

  displayAllTasks(filteredTasks);
  if (filteredTasks.length === 0) {
    message.textContent = "No tasks match your filter.";
    message.className = "text-warning";
  } else {
    message.textContent = `Found ${filteredTasks.length} task(s) based on ${searchText},${selectedCategory},${selectedStatus}.`;
    message.className = "text-success";
  }
  // clear the input
    searchInput.value = "";
    categoryFilter.value = "all";
    statusFilter.value = "all";
})


 //function overdue mark
  function isOverDue(task) {
    const now = new Date();
    const deadline = new Date(task.deadline);
    if((task.status !== "completed") && now > deadline )
    return true;
  }

//display all task in diaplay table
function displayAllTasks(lists) {
  taskTable.innerHTML = ""; 

  lists.forEach(i => {
    const taskRow = document.createElement("tr");

    const textCell = document.createElement("td");
    textCell.textContent = i.text;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = i.category;

    const deadlineCell = document.createElement("td");
    deadlineCell.textContent = i.deadline;

    const statusCell = document.createElement("td");
    statusCell.textContent = i.status;

    // check if overdue 
    if (isOverDue(i)) {
      const overDueBadge = document.createElement("span");
      overDueBadge.setAttribute("class", "badge bg-danger ms-2");
      overDueBadge.textContent = "Overdue";
      statusCell.appendChild(overDueBadge);
    }

    taskRow.appendChild(textCell);
    taskRow.appendChild(categoryCell);
    taskRow.appendChild(deadlineCell);
    taskRow.appendChild(statusCell);

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



