const todoBtn = document.querySelector("#todoBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
let data = []
todoBtn.addEventListener("click" , function(){
    let value = todoInput.value 
    todoInput.value = '' ; 
    data.push(value)  ;
    console.log(data);
const newListContent = data.reverse() 
    .map(function(item,index,list){
    return  `<li class="list-group-item">${item}</li>`
})
    .join(""); 
    console.log(newListContent );
    todoList.innerHTML = newListContent ;
})