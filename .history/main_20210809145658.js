"use strict";

const inputText = document.querySelector(".input_text");
const createBtn = document.querySelector(".create__Btn");
const shoppingList = document.querySelector(".main_list");
const deleteBtn = document.querySelector(".delete__Btn");

createBtn.addEventListener("click", (event) => {
  const text = inputText.value;
  const list = document.createElement("li");
  createList(list, text);
});

shoppingList.addEventListener("click", (event) => {
  const target = event.target.parentNode;
  if (target.classList == "delete__Btn") {
    target.parentNode.remove();
  }
});

function enterkey() {
  if (window.event.keyCode == 13) {
    const text = inputText.value;
    const list = document.createElement("li");
    createList(list, text);
  }
}

function createList(list, text) {
  if (text === "") {
    inputText.focus();
    return;
  }
  list.innerHTML = `
    <span> ${text} </span>
    <button class="delete__Btn">
        <i class="fas fa-trash-alt"></i>
    </button>`;
  shoppingList.appendChild(list);
  list.scrollIntoView({ block: "center" });
  inputText.value = "";
  inputText.focus();
}
