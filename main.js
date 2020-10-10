const formAdd = document.querySelector(".add");
const inputAdd = document.querySelector(".add input");
const inputSearch = document.querySelector(".search");
const inputSearchValue = document.querySelector(".search input");
let taskCounter = document.querySelector(".counter span");
const tasksList = document.querySelector("ul");
const items = document.getElementsByClassName("task");
const hourDisp = document.querySelector(".hour span");
const dateDisp = document.querySelector(".date span");
const toDoListArr = [];
const btnAdd = document.querySelector(".activeInput");
const btnSearch = document.querySelector(".activeSearch");

const removeTask = (e) => {
  e.target.parentNode.style.textDecorationLine = "line-through";
  setTimeout(() => {
    e.target.parentNode.remove();
    taskCounter.textContent = toDoListArr.length;
    const index = e.target.parentNode.dataset.key;
    toDoListArr.splice(index, 1);
    taskCounter.textContent = toDoListArr.length;
    inputSearchValue.value = "";
    renderList();
  }, 700);
};

const addTask = (e) => {
  e.preventDefault();
  let newTaskName = inputAdd.value;
  if (newTaskName === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = newTaskName + '<input type="checkbox">';
  toDoListArr.push(task);
  tasksList.appendChild(task);
  renderList();
  inputAdd.value = "";
  taskCounter.textContent = items.length;
  task.querySelector("input").addEventListener("click", removeTask);
};

const searchTask = (e) => {
  const serachTask = e.target.value.toLowerCase();
  let tasks = toDoListArr;
  tasks = tasks.filter((li) =>
    li.textContent.toLocaleLowerCase().includes(serachTask)
  );
  tasksList.textContent = "";
  tasks.forEach((li) => tasksList.appendChild(li));
  taskCounter.textContent = items.length;
};
const renderList = () => {
  tasksList.textContent = "";
  toDoListArr.forEach((toDoElem, key) => {
    toDoElem.dataset.key = key;
    tasksList.appendChild(toDoElem);
  });
};

inputSearch.addEventListener("input", searchTask);

formAdd.addEventListener("submit", addTask);

// time and date

const clock = () => {
  const time = new Date();

  let seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  let minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  let year = time.getFullYear();
  const month = time.toLocaleString("default", {
    month: "short",
  });

  hourDisp.textContent = `${hours}:${minutes}:${seconds}`;
  dateDisp.textContent = `${time.getDate()} ${month.toUpperCase()} ${year}`;
};
setInterval(clock, 1000);

// add/search button function
const addTaskInputActivator = () => {
  formAdd.classList.toggle("active");
  inputSearch.classList.add("active");
  btnAdd.classList.toggle("animation");
};

btnAdd.addEventListener("click", addTaskInputActivator);

const searchTaskInputActivator = () => {
  inputSearch.classList.toggle("active");
  formAdd.classList.add("active");
  btnAdd.classList.remove("animation");
};

btnSearch.addEventListener("click", searchTaskInputActivator);
