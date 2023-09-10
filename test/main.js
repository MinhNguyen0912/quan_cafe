let todoList = [
    {
      id: 1,
      title: "Lam bai tap ve nha JSI03",
      completed: false,
    },
    {
      id: 2,
      title: "Lam bai tap toan tren lop",
      completed: false,
    },
    {
      id: 3,
      title: "Rua bat",
      completed: false,
    },
    {
      id: 4,
      title: "Quet nha",
      completed: true,
    },
    {
      id: 5,
      title: "Lau nha",
      completed: false,
    },
  ];

// localStorage.setItem("todoList",JSON.stringify(todoList))
var todoListLS = JSON.parse(localStorage.getItem("todoList"))

var todoListBox = document.querySelector("#todoList")
const renderTodoList = ()=>{
    todoListBox.innerHTML=""
    JSON.parse(localStorage.getItem("todoList")).forEach(element => {
        //Tao div bao boc
        var div = document.createElement("div")

        //Tao nut checkbox
        var checkBox = document.createElement("input")
        checkBox.setAttribute("type","checkbox")
        div.appendChild(checkBox)

        //Tao noi dung
        if (element.completed) {
            var title = document.createElement("p")
            title.innerHTML = element.title
            title.style.textDecoration = "line-through"
            div.appendChild(title)
        }else{
            var title = document.createElement("p")
            title.innerHTML = element.title
            div.appendChild(title)
        }

        //Tao nut xoa
        var deleteBtn = document.createElement("p")
        deleteBtn.innerHTML = "X"
        deleteBtn.onclick = ()=> deleteAction(element.id)
        div.appendChild(deleteBtn)

        div.style.display = "flex"
        checkBox.style.marginRight = "12px"
        title.style.marginRight = "20px"

        todoListBox.appendChild(div)
    });
}

var deleteAction = (id)=>{
    var deleteObjIndex = todoListLS.findIndex(todo => todo.id===id)
    todoListLS.splice(deleteObjIndex,1)
    localStorage.setItem("todoList", JSON.stringify(todoListLS))
    renderTodoList()
}

renderTodoList()

var addBtn = document.querySelector("#add-btn")

var addAction = ()=>{
    var inputContent = document.getElementById('inputTodo').value
    console.log(inputContent)  
    todoListLS.push({
        id: todoListLS[todoListLS.length-1].id+1,
        title: inputContent,
        completed: false
    })
    console.log(1)
    localStorage.setItem('todoList', JSON.stringify(todoListLS))

    renderTodoList()
}

addBtn.addEventListener('click',addAction)