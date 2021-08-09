"use strict";

const inputText = document.querySelector(".input_text");
const createBtn = document.querySelector(".create__Btn");
const deleteBtn = document.querySelector(".delete__Btn");
const shoppingList = document.querySelector(".main_list");

createBtn.addEventListener("click", (event) => {
  console.log(inputText.value);
  const text = inputText.value;
  const list = document.createElement("li");
  list.innerHTML = `
  <span> ${text} </span>
  <button class="delete__Btn">
      <i class="fas fa-trash-alt"></i>
  </button>`;
  console.log(list);
});
