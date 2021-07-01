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
    list.push({value:userEnteredValue,checked:false});
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
        if(element.value==undefined)
            return;
        let li = document.createElement('li');
        li.innerHTML=element.value;
        let del = document.createElement('span');
        let tick = document.createElement('span')
        del.className='del';
        tick.className='tick';
        del.setAttribute('onclick', 'deleteTask('+index+')');
        tick.setAttribute('onclick', 'checkTask('+index+')');
        let t = document.createElement('i');
        t.className='fas fa-trash';
        let c = document.createElement('i');
        if(element.checked) {
            li.classList.add('checked');
            tick.style.backgroundColor='#f02711';
            c.className='fas fa-times';
        }else{
            li.classList.remove('checked');
            c.className='fas fa-check';
        }
        del.appendChild(t);
        tick.appendChild(c);
        li.appendChild(tick);
        li.appendChild(del);
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

function checkTask(index){
    let getLocalStorageData = localStorage.getItem("todolist");
    list = JSON.parse(getLocalStorageData);
    if(list[index].checked)
        list[index].checked=false;
    else
        list[index].checked=true;
    localStorage.setItem("todolist", JSON.stringify(list));
    showTasks();
}