let todoItems = [];

function addBtn(){
    let text = document.querySelector(".input1").value;
    const todo = {
        text,
       
    };
    
    todoItems.push(todo);
    console.log(todo);
    console.log(todoItems);
    displayItem(todoItems);
    
}


function displayItem(array){
    let tasks = '';
    array.forEach((item,index) => {
        tasks += `
        <div class="inputs" >
        <input class="input2" type="text" value="${item.text}" disabled>
        <button  class="editBtn"><i class="fas fa-edit"></i></button>
        <button  onclick="deleteBtn(${index})" class="deleteBtn"><i class="fas fa-trash"></i></button>
    </div>
        `
    });
    document.querySelector(".todoItems").innerHTML = tasks;
   
    
}

function deleteBtn(index){
    todoItems = todoItems.filter(item => todoItems.indexOf(item) != index)
    displayItem(todoItems);

}