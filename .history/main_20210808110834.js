"use strict";

const inputText = document.querySelector(".input_text");
const createBtn = document.querySelector(".create__Btn");
const shoppingList = document.querySelector(".main_list");
const deleteBtn = document.querySelector(".delete__Btn");

createBtn.addEventListener("click", (event) => {
  const text = inputText.value;
  const list = document.createElement("li");
  list.innerHTML = `
  <span> ${text} </span>
  <button class="delete__Btn">
      <i class="fas fa-trash-alt"></i>
  </button>`;
  shoppingList.appendChild(list);
});

shoppingList.addEventListener("click", (event) => {
  const target = event.target.parentNode;
  if (target.classList == deleteBtn) {
    console.log(target);
  }
  //   shoppingList.removeChild(target);
});
