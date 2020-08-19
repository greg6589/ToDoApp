const formAdd = document.querySelector('.add');
const inputAdd = document.querySelector('.add input');
const inputSearch = document.querySelector('.search');
const taskCounter = document.querySelector('h1 span');
const tasksList = document.querySelector('ul');

const addTask = (e) => {
    e.preventDefault();
    let newTaskName = inputAdd.value;
    if (newTaskName === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = newTaskName + '<button>delete</button>';
    tasksList.appendChild(task);
    inputAdd.value = ""
}


formAdd.addEventListener('submit', addTask)