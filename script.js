const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

console.log(button);
console.log(input);
console.log(list);

// button.addEventListener("click", () => {
//   console.log(input.value);
//   // create elment li
//   const li = document.createElement("li");
//   // add class to li
//   li.className = "todo-list-item";
//   // create element button
//   const deleteBtn = document.createElement("button");
//   // add name to button
//   deleteBtn.innerText = "Delete";
//   // add class to button deleteDtn
//   deleteBtn.className = "delete-button";

//   // create text in li
//   li.innerText = input.value;
//   // add to list li with text
//   list.appendChild(li);
//   // add to li button
//   li.appendChild(deleteBtn);
//   input.value = "";

//   //  delete li from list
//   deleteBtn.addEventListener("click", () => {
//     list.removeChild(li);
//   });
// });

// enter from keybord

// input.addEventListener("keydown", (e) => {
//   if (e.keyCode === 13) {
//     const li = document.createElement("li");
//     // add class to li
//     li.className = "todo-list-item";
//     // create element button
//     const deleteBtn = document.createElement("button");
//     // add name to button
//     deleteBtn.innerText = "Delete";
//     // add class to button deleteDtn
//     deleteBtn.className = "delete-button";
//     // create text in li
//     li.innerText = input.value;
//     // add to list li with text
//     list.appendChild(li);
//     // add to li button
//     li.appendChild(deleteBtn);
//     input.value = "";
//     deleteBtn.addEventListener("click", () => {
//       list.removeChild(li);
//     });
//   }
// });

// ====
function createAddElement() {
  const li = document.createElement("li");
  // add class to li
  li.className = "todo-list-item";
  // create element button
  const deleteBtn = document.createElement("button");
  // add name to button
  deleteBtn.innerText = "Delete";
  // add class to button deleteDtn
  deleteBtn.className = "delete-button";
  // create text in li
  li.innerText = input.value;
  // add to list li with text
  list.appendChild(li);
  // add to li button
  li.appendChild(deleteBtn);
  input.value = "";
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
}

button.addEventListener("click", () => {
  createAddElement();
});
// enter from keybord
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    createAddElement();
  }
});
