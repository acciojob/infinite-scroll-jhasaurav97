//your code here!
const list = document.getElementById("infi-list");
let itemCount = 0;

// Function to add N list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Infinite scroll logic
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    // Reached near bottom
    addItems(2);
  }
});
