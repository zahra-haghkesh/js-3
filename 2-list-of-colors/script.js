function listOfColours(colours) {
  // Write your code here...
  const divElement = document.querySelector("#content");
  const selectTag = document.createElement("select");
  const optionTag = document.createElement("option");
  optionTag.textContent = "select a colour";
  optionTag.selected = true;
  optionTag.disabled = true;
  selectTag.appendChild(optionTag);
  divElement.appendChild(selectTag);

  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.textContent = colour;
    option.value = colour;
    selectTag.appendChild(option);
  });
  const p = document.createElement("p");
  divElement.appendChild(p);
  selectTag.addEventListener("change", (e) => {
    p.textContent = `You have selected: ${e.target.value}`;
    p.style.color = e.target.value;
  });
}
 

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
