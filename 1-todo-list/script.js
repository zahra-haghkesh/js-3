function todoList(todos) {
  // Write your code here...
  const divElement = document.querySelector("#contant");
  const listy = document.createElement("ul");
  divElement.append(listy);
  const items = todos;
  items.forEach((arr) => {
    const liChaildOfUl = document.createElement("li");
    liChaildOfUl.textContent = arr;
    listy.appendChild(liChaildOfUl);
    liChaildOfUl.addEventListener("click", () => {
      liChaildOfUl.classList.toggle("active");
      if (liChaildOfUl.classList.contains("active")) {
        liChaildOfUl.style.textDecorationLine = "line-through";
      } else {
        liChaildOfUl.style.textDecorationLine = "none";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
