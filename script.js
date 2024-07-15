let addBtn = document.querySelector('#newTask button');
let newTask = document.querySelector('#newTask input');
let tasks = document.querySelector('#tasks');

function addTask() {
    if (newTask.value.length == 0) {
        alert("Please enter a task");
    } else {
        tasks.innerHTML += `
        <div class="todo">
            <div class="todo-name">
            ${
                newTask.value
            }
            </div>
            <span class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48"><path fill="#00060f" d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25"/></svg></span>
        </div>`
    }

    var current_tasks = document.querySelectorAll(".delete");
    for(var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    var doneTasks = document.querySelectorAll(".todo-name");
    for(var i = 0; i < doneTasks.length; i++) {
        doneTasks[i].onclick = function () {
            this.classList.toggle("done");
        }
    }

    newTask.value ="";
}

newTask.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        addTask();
    }
})
