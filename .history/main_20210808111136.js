"use strict";

const inputText = document.querySelector(".input_text");
const createBtn = document.querySelector(".create__Btn");
const shoppingList = document.querySelector(".main_list");
const deleteBtn = document.querySelector(".delete__Btn");
let id__number = 1;

createBtn.addEventListener("click", (event) => {
  const text = inputText.value;
  const list = document.createElement("li");
  list.innerHTML = `
  <span> ${text} </span>
  <button class="delete__Btn">
      <i class="fas fa-trash-alt"></i>
  </button>`;
  list.setAttribute("id", id__number);
  shoppingList.appendChild(list);
  id__number += 1;
  console.log(id__number);
  console.log(list);
});

shoppingList.addEventListener("click", (event) => {
  const target = event.target.parentNode;
  if (target.classList == "delete__Btn") {
    shoppingList.removeChild(target.parentNode);
  }
  //   shoppingList.removeChild(target);
});
