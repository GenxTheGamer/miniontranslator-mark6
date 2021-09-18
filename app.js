var btn = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");

function clickHandler() {
  console.log("click");
  console.log("event", inputText.value);
}

btn.addEventListener("click", clickHandler);
