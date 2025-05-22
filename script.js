let addTask = document.getElementById("addTask");
let addBtn = document.getElementById("addBtn");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  if (addTask.value.length > 0) {
    let list = document.createElement("li");
    list.className = "list";
    list.textContent = addTask.value;
    ul.appendChild(list);

    let delBtn = document.createElement("button");
    delBtn.id = "delBtn";
    delBtn.textContent = "X";
    list.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
      list.remove();
    });
    addTask.value = "";
  }
});

addTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && addTask.value.length > 0) {
    addBtn.click();
  }
});
