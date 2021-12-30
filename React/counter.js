const counterForm = document.querySelector("#counter");
const counterButton = counterForm.querySelector("button");
let count = 0;

function handleCounter(event) {
  count = count + 1;
  const counterText = event.target.parentElement.querySelector("span");
  counterText.innerText = count;
}

counterButton.addEventListener("click", handleCounter);
