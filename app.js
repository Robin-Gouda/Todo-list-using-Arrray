// variables decleared

let list = [];
let inp = document.getElementById("inp");
let todolist = document.getElementById("todolist");

/*             functions decleared        */

// function to push items in an array
const Clicked = () => {
  if (inp.value.trim() != "") {
    list.push(inp.value);
    inp.value = "";
    showList();
  } else {
    alert("Empty input");
  }
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
  if (newValue.trim() != "") {
    list.splice(i, 1, newValue);
    showList();
  } else {
    /*alert("so u have come to see me");*/
    alert("Empty Edit So No Change");
  }
};

const showList = () => {
  todolist.innerHTML = "";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      (i + 1) +
      ") " +
      "<span>" +
      n +
      "</span>" +
      "<a onclick='editItem(" +
      i +
      ")' >Edit</a><a onclick='deleteItem(" +
      i +
      ")' >&times;</a></li>";
  });
};
