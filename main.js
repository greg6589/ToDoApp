const formAdd = document.querySelector('.add');
const inputAdd = document.querySelector('.add input');
const inputSearch = document.querySelector('.search');
let taskCounter = document.querySelector('h1 span');
const tasksList = document.querySelector('ul');
const items = document.getElementsByClassName('task')


const addTask = (e) => {
    e.preventDefault();
    let newTaskName = inputAdd.value;
    if (newTaskName === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = newTaskName + '<button>delete</button>';
    tasksList.appendChild(task);
    inputAdd.value = "";
    taskCounter.textContent = items.length
}


formAdd.addEventListener('submit', addTask)