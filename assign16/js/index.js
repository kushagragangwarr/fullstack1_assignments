var itemCounter = 1;
const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-btn");
const listItems = document.querySelector("#list-items");

addBtn.addEventListener("click", addNewItem);
listItems.addEventListener("click", checkOrDelete);

function addNewItem() {
    if (inputBox.value == "") return;

    var newItem = document.createElement("div");
    newItem.classList = "item-container";
    newItem.id = "item-" + itemCounter;
    itemCounter++;
    var newList = document.createElement("li");
    newList.textContent = inputBox.value;
    inputBox.value = "";
    var newCheckIcon = document.createElement("i");
    var newTrashIcon = document.createElement("i");
    newCheckIcon.id = "check";
    newTrashIcon.id = "delete";
    newCheckIcon.classList = "fa fa-check";
    newTrashIcon.classList = "fa fa-trash";
    newItem.appendChild(newList);
    newItem.appendChild(newCheckIcon);
    newItem.appendChild(newTrashIcon);
    listItems.appendChild(newItem);
}

function checkOrDelete(e) {
    const item = e.target;
    if (item.id === "delete") {
        listItems.removeChild(e.target.parentNode);
    } else if (item.id === "check") {
        const parent = e.target.parentNode;
        if (parent.classList.contains("check")) {
            parent.classList.remove("check");
            parent.childNodes[0].classList.remove("line");
        } else {
            parent.classList.add("check");
            parent.childNodes[0].classList.add("line");
        }
    }
}