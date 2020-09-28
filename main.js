const formAdd = document.querySelector('.add');
const inputAdd = document.querySelector('.add input');
const inputSearch = document.querySelector('.search');
let taskCounter = document.querySelector('h1 span');
const tasksList = document.querySelector('ul');
const items = document.getElementsByClassName('task');
const hourDisp = document.querySelector('.hour span');
const dateDisp = document.querySelector('.date span');
const toDoListArr = [];




const removeTask = (e) => {
    e.target.parentNode.remove();
    taskCounter.textContent = toDoListArr.length;
    const index = e.target.parentNode.dataset.key;
    toDoListArr.splice(index, 1);
    console.log(toDoListArr);
    taskCounter.textContent = toDoListArr.length;
    inputSearch.value = "";
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    let newTaskName = inputAdd.value;
    if (newTaskName === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = newTaskName + '<button>delete</button>';
    toDoListArr.push(task);
    tasksList.appendChild(task);
    renderList();
    inputAdd.value = "";
    taskCounter.textContent = items.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const searchTask = (e) => {
    const serachTask = e.target.value.toLowerCase();
    let tasks = toDoListArr;
    tasks = tasks.filter(li =>
        li.textContent.toLocaleLowerCase().includes(serachTask)
    );
    tasksList.textContent = "";
    tasks.forEach(li => tasksList.appendChild(li));
    console.log(tasks);
    taskCounter.textContent = items.length;


}
const renderList = () => {
    tasksList.textContent = "";
    toDoListArr.forEach((toDoElem, key) => {
        toDoElem.dataset.key = key;
        tasksList.appendChild(toDoElem);
    });
};

inputSearch.addEventListener('input', searchTask);

formAdd.addEventListener('submit', addTask)

// time and date
const clock = () => {
    const time = new Date();

    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let year = time.getFullYear();
    const month = time.toLocaleString('default', {
        month: 'short'
    })

    hourDisp.textContent = `${hours}:${minutes}:${seconds}`
    dateDisp.textContent = `${time.getDate()} ${month.toUpperCase()} ${year}`

}
setInterval(clock, 1000)