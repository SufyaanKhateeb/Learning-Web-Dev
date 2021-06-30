const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

inputBox.addEventListener('keypress', function (e) {
    if (e. key === 'Enter') {
        let userEnteredValue = inputBox.value;
        if(userEnteredValue.trim() != 0)
            addBtn.onclick();
        else
            return;
    }
});

showTasks();
addBtn.onclick = ()=>{
    let userEnteredValue = inputBox.value; 
    let getLocalStorageData = localStorage.getItem("todolist");
    if(getLocalStorageData == null){
        list = [];
    }else{
        list = JSON.parse(getLocalStorageData);
    }
    list.push(userEnteredValue);
    localStorage.setItem("todolist", JSON.stringify(list));
    showTasks();
    addBtn.classList.remove("active");
}
function showTasks(){
    let getLocalStorageData = localStorage.getItem("todolist");
    
    if(getLocalStorageData == null){
        list = [];
    }else{
        list = JSON.parse(getLocalStorageData); 
    }

    todoList.innerHTML='';
    list.forEach((element, index) => {
        let li = document.createElement('li');
        li.innerHTML=element;
        let span = document.createElement('span');
        span.className='icon';
        span.setAttribute('onclick', 'deleteTask('+index+')');
        let i = document.createElement('i');
        i.className='fas fa-trash';
        span.appendChild(i);
        li.appendChild(span);
        todoList.appendChild(li);
    });
    inputBox.value = ""; 
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("todolist");
    list = JSON.parse(getLocalStorageData);
    list.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(list));
    showTasks();
}