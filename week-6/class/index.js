let todoIndex=1;                        
function addTodo(){
    //write the code that reads the content of input box
    // create a new todo on the html dom 
    //clears the input box

    let element=document.getElementById("todoInput");
    const todo= element.value;
    if(todo==""){
        return;
    }
    element.value="";


    const tododiv=document.createElement("div");
    const todospan=document.createElement("span");
    const deltodo=document.createElement("button");
     todospan.innerHTML=todo;
     deltodo.innerHTML="delete";
     deltodo.setAttribute("onclick","deleteTodo( "+ todoIndex +")");
     tododiv.appendChild(todospan);
     tododiv.appendChild(deltodo);
     tododiv.setAttribute("id","todo"+todoIndex);
     const parnetdiv= document.getElementById("todolist");
     parnetdiv.appendChild(tododiv);

   todoIndex++;
   
}
function deleteTodo(index){
//    alert("delete todo  called with "+ index); 
      const divElement= document.getElementById("todo"+index);
      divElement.parentElement.removeChild(divElement);
     
   
}