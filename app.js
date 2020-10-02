// selector
const todoin = document.querySelector('.todo-input');
const todobtn = document.querySelector('.todo-sub');
const todolist = document.querySelector('.todo-list');
const filteroption = document.querySelector('.filter');

// Event Listner
todobtn.addEventListener('click', addtodo);
todolist.addEventListener('click', deladd);
filteroption.addEventListener('click', filler);

// function
function addtodo(e) {
  //stoping browser to refresh after button click
  event.preventDefault();

  //creating div
  const tododiv = document.createElement('div');
  tododiv
    .classList
    .add("todo-div");
  //creating li
  const todoli = document.createElement('li');
  todoli.innerText = todoin.value;
  todoli
    .classList
    .add("todo-li");
  tododiv.appendChild(todoli);
  //completed button
  const chkbtn = document.createElement('button');
  chkbtn.innerHTML = '<i class="fas fa-check"></i>';
  chkbtn
    .classList
    .add('completed');
  tododiv.appendChild(chkbtn)
  //delete button
  const dltbtn = document.createElement('button');
  dltbtn.innerHTML = '<i class="fas fa-trash"></i>';
  dltbtn
    .classList
    .add('dlt')
  tododiv.appendChild(dltbtn);
  //append todo
  todolist.appendChild(tododiv);
  //clear box
  todoin.value = "";
}
function deladd(e) {
  const item = e.target;

  //delete
  if (item.classList[0] === 'dlt') {
    const todo = item.parentElement;
    //   animations
    todo
      .classList
      .add("end");
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });

  }
  //check
  if (item.classList[0] === "completed") {
    const todo = item.parentElement;
    todo
      .classList
      .toggle("com");
  }
}
//Drop-down menu
function filler(e) {
  const todos = todolist.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("com")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("com")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
