const data = [
  { id: 1, color: "#6F98A8" },
  { id: 2, color: "#2B8EAD" },
  { id: 3, color: "#2F454E" },
  { id: 4, color: "#2B8EAD" },
  { id: 5, color: "#2F454E" },
  { id: 6, color: "#BFBFBF" },
  { id: 7, color: "#BFBFBF" },
  { id: 8, color: "#6F98A8" },
  { id: 9, color: "#2F454E" },
];

const gridContainerElement = document.getElementById("grids_layout");

function displayGrid(data) {
  while (gridContainerElement.hasChildNodes()) {
    gridContainerElement.removeChild(gridContainerElement.firstChild);
  }
  data.forEach((element) => {
    gridContainerElement.appendChild(getNode(element));
  });
}

function getNode(element) {
  var item = document.createElement("div");
  var text = document.createElement('span');
  text.textContent = element.id;
  text.classList.add("big_text");
  item.className = `col-${element.id}`;
  item.setAttribute(
    "style",
    `border-color: ${element.color}; background-color: ${element.color}`
  );
  item.appendChild(text);
  return item;
}

function onShuffleClick() {
    displayGrid(data.sort(() => Math.random() - 0.5))
}

function onSortClick() {
    displayGrid(data.sort((a, b) => a.id - b.id))
}

displayGrid(data);
