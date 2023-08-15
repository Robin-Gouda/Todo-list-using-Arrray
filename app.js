// variables decleared

let list = [];
let inp = document.getElementById("inp");
let todolist = document.getElementById("todolist");

/*             functions decleared        */

// function to push items in an array
const Clicked = () => {
  list.push(inp.value);
  inp.value = "";
  showList();
};
document.getElementById("btn").addEventListener("click", Clicked);

//  function to delete item
const deleteItem = (i) => {
  list.splice(i, 1);
  showList();
};

//  function to edit item
const editItem = (i) => {
  let newValue = prompt("Please enter new value");
  list.splice(i, 1, newValue);
  showList();
};

const showList = () => {
  todolist.innerHTML = "";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      (i + 1) +
      ") " +
      n +
      "<a onclick='editItem(" +
      i +
      ")' >Edit</a><a onclick='deleteItem(" +
      i +
      ")' >&times;</a></li>";
    console.log(i);
  });
};
